import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const officers = [
  {
    role: "President",
    responsibilities: "Leads chapter meetings, coordinates with advisors, represents SMSU DECA at conferences",
  },
  {
    role: "Vice President",
    responsibilities: "Assists president, manages member engagement, oversees event planning",
  },
  {
    role: "Treasurer",
    responsibilities: "Manages chapter finances, fundraising, budgets, and financial reporting",
  },
  {
    role: "Secretary",
    responsibilities: "Records meeting minutes, manages communications, maintains chapter records",
  },
  {
    role: "Marketing Director",
    responsibilities: "Manages social media, promotional materials, and chapter visibility",
  },
  {
    role: "Events Coordinator",
    responsibilities: "Plans and executes chapter events, workshops, and social activities",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-brown to-primary-gold/20 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              About SMSU DECA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Building the next generation of business leaders and entrepreneurs
              at Southwest Minnesota State University
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-12 w-12 text-primary-gold mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-6">
                Our Mission
              </h2>
            </div>

            <Card className="border-2 border-primary-gold/20">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                  SMSU Collegiate DECA is committed to preparing emerging leaders
                  and entrepreneurs in marketing, finance, hospitality, and
                  management. We provide practical learning experiences that
                  prepare members for careers in business through competitive
                  events, networking opportunities, and professional development.
                </p>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                  Our chapter strives to create an inclusive environment where
                  students can develop their skills, build lasting connections,
                  and achieve success at the state, regional, and international
                  levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisor Section */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary-gold mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
                Chapter Advisor
              </h2>
            </div>

            <Card className="border-2 hover:border-primary-gold transition-colors">
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-brown to-primary-gold flex items-center justify-center text-white text-3xl font-bold shadow-lg mx-auto mb-4">
                  DA
                </div>
                <CardTitle className="text-2xl">Dr. [Advisor Name]</CardTitle>
                <p className="text-lg text-muted-foreground">
                  Faculty Advisor, Business Department
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-base text-foreground/80 mb-4">
                  Our advisor brings years of industry experience and academic
                  expertise to guide our chapter. They provide mentorship,
                  support competitive preparation, and connect students with
                  professional opportunities.
                </p>
                <a
                  href="mailto:advisor@smsu.edu"
                  className="text-primary-gold hover:text-primary-brown font-medium transition-colors"
                >
                  advisor@smsu.edu
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Officer Roles */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-primary-gold mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
                Leadership Structure
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our executive board works collaboratively to ensure the chapter
                runs smoothly and provides value to all members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officers.map((officer, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-brown">
                      {officer.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">
                      {officer.responsibilities}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-primary-brown text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-gold">
                  Competence
                </h3>
                <p className="text-white/80">
                  Developing business skills through hands-on experience and
                  competition
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-gold">
                  Innovation
                </h3>
                <p className="text-white/80">
                  Encouraging creative thinking and entrepreneurial mindset
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-gold">
                  Integrity
                </h3>
                <p className="text-white/80">
                  Upholding ethical standards in all business practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

