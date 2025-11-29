import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

/**
 * Storyblok Webhook Handler
 * Triggers ISR revalidation when content changes in Storyblok
 *
 * Setup in Storyblok:
 * 1. Go to Settings → Webhooks
 * 2. Add webhook URL: https://your-domain.com/api/revalidate
 * 3. Set Secret (optional but recommended)
 * 4. Select events: Story published, Story unpublished
 */

const webhookSchema = z.object({
  text: z.string(),
  action: z.enum(["published", "unpublished", "deleted"]),
  space_id: z.number(),
  story_id: z.number(),
  full_slug: z.string(),
});

// Verify webhook signature (if secret is configured)
function verifyWebhookSignature(
  request: NextRequest,
  body: string
): boolean {
  const webhookSecret = process.env.STORYBLOK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    // If no secret is configured, skip verification
    // Note: In production, you should always use a secret
    console.warn("Storyblok webhook secret not configured");
    return true;
  }

  const signature = request.headers.get("webhook-signature");

  if (!signature) {
    return false;
  }

  // Storyblok uses a simple signature method
  // signature = body + webhook_secret
  const expectedSignature = body + webhookSecret;

  return signature === expectedSignature;
}

export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const body = await request.text();

    // Verify webhook signature
    if (!verifyWebhookSignature(request, body)) {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 401 }
      );
    }

    // Parse webhook payload
    const payload = JSON.parse(body);
    const validatedPayload = webhookSchema.parse(payload);

    console.log("Storyblok webhook received:", {
      action: validatedPayload.action,
      slug: validatedPayload.full_slug,
    });

    // Revalidate affected paths
    const pathsToRevalidate = [
      `/`, // Homepage
      `/${validatedPayload.full_slug}`, // Specific page
    ];

    // If it's an event, revalidate events page
    if (validatedPayload.full_slug.startsWith("events/")) {
      pathsToRevalidate.push("/events");
    }

    // Revalidate all affected paths
    for (const path of pathsToRevalidate) {
      try {
        revalidatePath(path);
        console.log(`Revalidated path: ${path}`);
      } catch (error) {
        console.error(`Error revalidating path ${path}:`, error);
      }
    }

    return NextResponse.json({
      success: true,
      revalidated: pathsToRevalidate,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error processing Storyblok webhook:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid webhook payload", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "Storyblok Webhook Handler",
    timestamp: new Date().toISOString(),
  });
}

