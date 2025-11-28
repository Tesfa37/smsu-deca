"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Trophy, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 80,
    label: "Active Members",
    suffix: "+",
  },
  {
    icon: Calendar,
    value: 20,
    label: "Events per Year",
    suffix: "+",
  },
  {
    icon: Trophy,
    value: 5,
    label: "Nationals Appearances",
    suffix: "+",
  },
  {
    icon: Award,
    value: 15,
    label: "Competitions Won",
    suffix: "+",
  },
];

function Counter({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsGrid() {
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
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a thriving community of ambitious business leaders and
            entrepreneurs making their mark.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-primary-gold transition-all duration-300 hover:shadow-lg h-full">
                  <CardContent className="flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mb-6">
                      <Icon
                        className="h-8 w-8 text-primary-gold"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary-gold mb-2">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-base md:text-lg text-foreground/80 font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

