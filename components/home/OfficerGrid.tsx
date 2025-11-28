"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import type { Officer } from "@/lib/types";

// Mock data for officers
const officers: Officer[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "President",
    bio: "Senior majoring in Marketing. Passionate about leadership development and competitive events. Led team to State Championship.",
    email: "sarah.johnson@smsu.edu",
    linkedIn: "https://linkedin.com/in/sarahjohnson",
    order: 1,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Vice President",
    bio: "Junior in Finance. Focuses on member engagement and professional networking. Two-time ICDC qualifier in Financial Analysis.",
    email: "michael.chen@smsu.edu",
    linkedIn: "https://linkedin.com/in/michaelchen",
    order: 2,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    position: "Treasurer",
    bio: "Sophomore studying Accounting. Manages chapter finances and fundraising initiatives. Meticulous with budgets and reporting.",
    email: "emma.rodriguez@smsu.edu",
    linkedIn: "https://linkedin.com/in/emmarodriguez",
    order: 3,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "4",
    name: "James Wilson",
    position: "Secretary",
    bio: "Senior in Business Administration. Coordinates meetings and communications. Excellent organizational skills and attention to detail.",
    email: "james.wilson@smsu.edu",
    linkedIn: "https://linkedin.com/in/jameswilson",
    order: 4,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "5",
    name: "Olivia Martinez",
    position: "Marketing Director",
    bio: "Junior in Digital Marketing. Manages social media and promotional campaigns. Creative mind behind our brand presence.",
    email: "olivia.martinez@smsu.edu",
    linkedIn: "https://linkedin.com/in/oliviamartinez",
    order: 5,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: "6",
    name: "David Thompson",
    position: "Events Coordinator",
    bio: "Sophomore in Hospitality Management. Plans and executes chapter events. Known for creating memorable experiences for members.",
    email: "david.thompson@smsu.edu",
    linkedIn: "https://linkedin.com/in/davidthompson",
    order: 6,
    isActive: true,
    createdAt: new Date(),
  },
];

export function OfficerGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated student leaders committed to making SMSU DECA an
            exceptional experience for all members.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {officers.map((officer, index) => (
            <motion.div
              key={officer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary-gold">
                <CardHeader className="text-center pb-4">
                  {/* Profile image placeholder */}
                  <div className="mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-brown to-primary-gold flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {officer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-1">{officer.name}</CardTitle>
                  <div className="text-sm font-semibold text-primary-gold">
                    {officer.position}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-sm leading-relaxed line-clamp-4">
                    {officer.bio}
                  </CardDescription>
                  {officer.linkedIn && (
                    <a
                      href={officer.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary-brown hover:text-primary-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded p-1"
                      aria-label={`Connect with ${officer.name} on LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" aria-hidden="true" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

