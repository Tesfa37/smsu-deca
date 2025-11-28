import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, ExternalLink, Target, Users, Briefcase, TrendingUp } from "lucide-react";

const eventCategories = [
  {
    icon: Briefcase,
    title: "Business Management & Administration",
    description: "Events focused on entrepreneurship, business services, and human resources management.",
    examples: ["Entrepreneurship", "Business Services", "Human Resources Management"],
  },
  {
    icon: TrendingUp,
    title: "Finance",
    description: "Financial planning, analysis, and services events for aspiring finance professionals.",
    examples: ["Financial Analysis", "Personal Financial Planning", "Accounting Applications"],
  },
  {
    icon: Target,
    title: "Marketing",
    description: "Strategic marketing, advertising, and brand management competitions.",
    examples: ["Marketing Management", "Sports & Entertainment Marketing", "Advertising Campaign"],
  },
  {
    icon: Users,
    title: "Hospitality & Tourism",
    description: "Events covering hotel management, restaurant operations, and travel services.",
    examples: ["Hotel & Lodging Management", "Restaurant Management", "Travel & Tourism"],
  },
];

const competitionLevels = [
  {
    level: "District Competition",
    description: "Regional competition where members compete against other Minnesota chapters.",
    timeframe: "January - February",
  },
  {
    level: "State Career Development Conference",
    description: "Top performers advance to represent SMSU at the state level.",
    timeframe: "March",
  },
  {
    level: "International Career Development Conference (ICDC)",
    description: "Elite competitors represent SMSU and Minnesota at the international level.",
    timeframe: "April",
  },
];

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-brown to-primary-gold/20 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-primary-gold" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Competitions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Test your skills against the best and brightest business students
              from across the region and nation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-6 text-center">
              About DECA Competitive Events
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                DECA&apos;s Competitive Events Program is designed to help students
                develop and demonstrate industry-relevant skills in marketing,
                finance, hospitality, and management. Through role-plays,
                case studies, and projects, members apply classroom concepts
                to real-world business scenarios.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                SMSU DECA members compete in various categories, earning
                recognition, scholarships, and valuable experience that sets
                them apart in their future careers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-gold hover:bg-primary-gold/90 text-white"
              >
                <Link href="https://www.deca.org/high-school-programs/collegiate-deca/competitive-events/" target="_blank" rel="noopener noreferrer">
                  View All DECA Events
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-brown hover:bg-primary-brown hover:text-white"
              >
                <Link href="/join">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4 text-center">
              Competition Categories
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              SMSU DECA members compete in a wide range of business categories
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {eventCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary-gold/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-gold" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold text-primary-brown mb-2">
                        Example Events:
                      </p>
                      <ul className="space-y-1">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-foreground/80">
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Levels */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4 text-center">
              Competition Journey
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Progress through three levels of competition as you advance your skills
            </p>

            <div className="space-y-6">
              {competitionLevels.map((level, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-primary-gold hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {index + 1}. {level.level}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {level.description}
                        </CardDescription>
                      </div>
                      <span className="text-sm font-semibold text-primary-gold bg-primary-gold/10 px-4 py-2 rounded-full">
                        {level.timeframe}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-brown text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Compete?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Join SMSU DECA and start preparing for competitions. We provide
              study resources, practice sessions, and mentorship to help you succeed.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary-gold hover:bg-primary-gold/90 text-white"
            >
              <Link href="/join">Join DECA Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

