import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Trophy,
  Briefcase,
  GraduationCap,
  Heart,
  Calendar,
} from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "Competitive Experience",
    description:
      "Compete at district, state, and international levels in business events.",
  },
  {
    icon: Users,
    title: "Professional Networking",
    description:
      "Connect with business professionals, alumni, and fellow students.",
  },
  {
    icon: Briefcase,
    title: "Career Development",
    description:
      "Gain real-world business skills valued by employers across industries.",
  },
  {
    icon: GraduationCap,
    title: "Leadership Opportunities",
    description:
      "Take on officer roles and lead initiatives within the chapter.",
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description:
      "Access to workshops, speaker sessions, and networking mixers.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "Participate in service projects and give back to the community.",
  },
];

const whyJoin = [
  "Build your resume with nationally recognized achievements",
  "Develop confidence through public speaking and presentations",
  "Access scholarships and awards exclusive to DECA members",
  "Learn from industry professionals through guest speaker events",
  "Travel to conferences and compete across the country",
  "Create lasting friendships with like-minded students",
];

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-brown to-primary-gold/20 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-primary-gold" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Join SMSU DECA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Become part of a dynamic community of future business leaders and
              entrepreneurs
            </p>
            <Button
              size="lg"
              className="bg-primary-gold hover:bg-primary-gold/90 text-white text-lg px-8"
              disabled
            >
              Application Form Coming Soon
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-6 text-center">
              Why Join SMSU DECA?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              DECA membership offers unparalleled opportunities for personal and
              professional growth in the business world.
            </p>

            <Card className="border-2 border-primary-gold/20">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {whyJoin.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg text-foreground/90">
                        {reason}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4 text-center">
              Membership Benefits
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              What you&apos;ll gain as a SMSU DECA member
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-gold" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-12 text-center">
              Membership Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary-brown/20">
                <CardHeader>
                  <CardTitle className="text-xl">Who Can Join?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Currently enrolled SMSU students
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">All majors welcome</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        No prior business experience required
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Freshmen through graduate students
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary-brown/20">
                <CardHeader>
                  <CardTitle className="text-xl">What&apos;s Expected?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Attend monthly chapter meetings
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Participate in at least one event per semester
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Annual membership dues (competitive with other clubs)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Commitment to chapter values and goals
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 bg-primary-brown text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Our online application form is coming soon! In the meantime,
              reach out to us with any questions or attend one of our upcoming
              meetings to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-gold hover:bg-primary-gold/90 text-white"
              >
                <a href="mailto:smsudeca@smsu.edu">Contact Us</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <a href="/events">View Upcoming Events</a>
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/70">
              Questions? Email us at{" "}
              <a
                href="mailto:smsudeca@smsu.edu"
                className="text-primary-gold hover:underline"
              >
                smsudeca@smsu.edu
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

