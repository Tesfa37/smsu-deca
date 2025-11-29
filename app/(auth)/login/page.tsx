import Link from "next/link";
import { LoginForm } from "@/components/forms/LoginForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-brown to-primary-gold/20 px-4">
      <div className="w-full max-w-md">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-4">
            <div className="w-12 h-12 bg-primary-brown rounded-lg" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">SMSU DECA</h1>
          <p className="text-white/80">Officer Dashboard Login</p>
        </div>

        {/* Login Card */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              Sign in to access the officer dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-primary-gold hover:underline"
              >
                Contact an administrator
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} SMSU Collegiate DECA. All rights reserved.
        </p>
      </div>
    </div>
  );
}

