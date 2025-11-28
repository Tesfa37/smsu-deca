"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-brown via-primary-brown to-primary-gold/30 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Prepare for Success
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Join SMSU Collegiate DECA and become a leader in business,
            marketing, and entrepreneurship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary-gold hover:bg-primary-gold/90 text-white text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/join">
                Join DECA
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm transition-all"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-background">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
}

