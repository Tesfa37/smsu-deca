import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  ExternalLink,
  FileText,
  HelpCircle,
  Link as LinkIcon,
  GraduationCap,
} from "lucide-react";

const externalResources = [
  {
    title: "DECA Inc. Official Website",
    description:
      "Access the official DECA website for competition guidelines, event information, and resources.",
    url: "https://www.deca.org",
    icon: LinkIcon,
  },
  {
    title: "Collegiate DECA Homepage",
    description:
      "Specific resources and information for collegiate DECA chapters and members.",
    url: "https://www.deca.org/high-school-programs/collegiate-deca/",
    icon: GraduationCap,
  },
  {
    title: "DECA Competitive Events Guide",
    description:
      "Comprehensive guide to all competitive events, including role-plays and case studies.",
    url: "https://www.deca.org/high-school-programs/collegiate-deca/competitive-events/",
    icon: FileText,
  },
  {
    title: "SMSU Business Programs",
    description:
      "Explore Southwest Minnesota State University's business degree programs and opportunities.",
    url: "https://www.smsu.edu",
    icon: BookOpen,
  },
];

const faqs = [
  {
    question: "What is DECA?",
    answer:
      "DECA is an international organization that prepares emerging leaders and entrepreneurs in marketing, finance, hospitality, and management through competitive events and professional development.",
  },
  {
    question: "Do I need to be a business major to join?",
    answer:
      "No! DECA is open to all majors. We welcome students from any field who want to develop business skills and leadership abilities.",
  },
  {
    question: "How much time commitment is required?",
    answer:
      "We typically have one chapter meeting per month, plus optional events and competitions. Members can choose their level of involvement based on their schedule and interests.",
  },
  {
    question: "Are there membership fees?",
    answer:
      "Yes, there is an annual membership fee that covers national DECA dues and chapter activities. Scholarships and payment plans may be available.",
  },
  {
    question: "What competitions can I participate in?",
    answer:
      "Members can compete in various categories including marketing, finance, hospitality, and management at district, state, and international levels.",
  },
  {
    question: "Do I need prior competition experience?",
    answer:
      "Not at all! We provide training, practice sessions, and mentorship to help all members prepare for competitions, regardless of experience level.",
  },
  {
    question: "Can I join mid-year?",
    answer:
      "Yes! While we encourage joining at the start of the academic year, new members are welcome anytime. Contact us to learn about current opportunities.",
  },
  {
    question: "What career paths do DECA members pursue?",
    answer:
      "DECA alumni work in diverse fields including marketing, finance, entrepreneurship, consulting, sales, human resources, and many other business-related careers.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-brown to-primary-gold/20 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary-gold" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Everything you need to succeed in DECA and beyond
            </p>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4 text-center">
              Essential Links
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Important resources for DECA members and students
            </p>

            <div className="space-y-6">
              {externalResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary-gold" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">
                              {resource.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {resource.description}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto border-primary-brown hover:bg-primary-brown hover:text-white"
                      >
                        <Link
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Resource
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Study Materials - Placeholder */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-12 text-center">
              Member Study Materials
            </h2>

            <Card className="border-2 border-primary-gold/20 text-center">
              <CardContent className="p-12">
                <FileText className="h-16 w-16 text-primary-gold mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-primary-brown mb-4">
                  Coming Soon
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We&apos;re working on creating a comprehensive library of study
                  guides, practice exams, and competition resources exclusively
                  for SMSU DECA members.
                </p>
                <p className="text-sm text-muted-foreground">
                  Check back soon or contact an officer for current study materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-primary-gold mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about SMSU DECA
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary-gold/50 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary-brown">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-foreground/80">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Still have questions?
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary-gold hover:bg-primary-gold/90 text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

