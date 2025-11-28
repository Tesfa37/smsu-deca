import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  MapPin,
  Users,
  MessageSquare,
  Linkedin,
  Instagram,
  Calendar,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Reach out to our chapter leadership team",
    content: "smsudeca@smsu.edu",
    href: "mailto:smsudeca@smsu.edu",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Find us on campus",
    content: "SMSU Business Building, Marshall, MN 56258",
    href: "https://maps.google.com/?q=SMSU+Marshall+MN",
  },
  {
    icon: Calendar,
    title: "Meeting Times",
    description: "Join us at our monthly meetings",
    content: "First Tuesday of each month, 6:00 PM",
    href: "/events",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    description: "Connect with us professionally",
    url: "https://www.linkedin.com/company/smsu-deca",
    handle: "@smsu-deca",
  },
  {
    icon: Instagram,
    name: "Instagram",
    description: "Follow our chapter activities",
    url: "https://www.instagram.com/smsu_deca",
    handle: "@smsu_deca",
  },
  {
    icon: MessageSquare,
    name: "Discord",
    description: "Join our member community",
    url: "#",
    handle: "Link available to members",
  },
];

const advisorInfo = {
  name: "Dr. [Advisor Name]",
  title: "Faculty Advisor",
  department: "Business Department",
  email: "advisor@smsu.edu",
  office: "Business Building, Room 123",
  hours: "By appointment",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-brown to-primary-gold/20 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="h-16 w-16 mx-auto mb-6 text-primary-gold" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Get in touch with SMSU DECA - we&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-12 text-center">
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg text-center"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary-gold" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/90 mb-4">
                        {method.content}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-primary-brown hover:bg-primary-brown hover:text-white"
                      >
                        <a
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {method.title === "Email Us" ? "Send Email" : "View Details"}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Advisor Information */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary-gold mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
                Faculty Advisor
              </h2>
              <p className="text-lg text-muted-foreground">
                Our advisor is here to guide and support the chapter
              </p>
            </div>

            <Card className="border-2 border-primary-gold/20">
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-brown to-primary-gold flex items-center justify-center text-white text-3xl font-bold shadow-lg mx-auto mb-4">
                  {advisorInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <CardTitle className="text-2xl">{advisorInfo.name}</CardTitle>
                <CardDescription className="text-lg">
                  {advisorInfo.title} • {advisorInfo.department}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-sm font-semibold text-primary-brown mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${advisorInfo.email}`}
                      className="text-base text-primary-gold hover:underline"
                    >
                      {advisorInfo.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-brown mb-1">
                      Office
                    </p>
                    <p className="text-base text-foreground/80">
                      {advisorInfo.office}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-brown mb-1">
                      Office Hours
                    </p>
                    <p className="text-base text-foreground/80">
                      {advisorInfo.hours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4 text-center">
              Connect on Social Media
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Follow us to stay updated on events, competitions, and chapter news
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg text-center"
                  >
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7 text-primary-gold" />
                      </div>
                      <CardTitle className="text-lg">{social.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {social.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold text-primary-brown mb-3">
                        {social.handle}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-primary-brown hover:bg-primary-brown hover:text-white"
                        disabled={social.url === "#"}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.url === "#" ? "Members Only" : `Follow on ${social.name}`}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <section className="py-16 md:py-24 bg-primary-brown text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="h-16 w-16 mx-auto mb-6 text-primary-gold" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Form Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              We&apos;re building an online contact form to make it even easier to
              reach us. In the meantime, please use the email address or social
              media links above.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-gold hover:bg-primary-gold/90 text-white"
            >
              <a href="mailto:smsudeca@smsu.edu">Email Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

