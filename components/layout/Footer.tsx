import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/competitions", label: "Competitions" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/smsu-deca",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/smsu_deca",
    label: "Instagram",
    icon: Instagram,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-brown text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Branding Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* SMSU Logo Placeholder */}
              <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-primary-brown font-bold text-sm">
                SMSU
              </div>

              {/* DECA Logo Placeholder */}
              <div className="w-10 h-10 bg-primary-gold rounded-lg flex items-center justify-center text-white font-bold text-sm">
                DECA
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">SMSU DECA</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Southwest Minnesota State University&apos;s chapter of DECA, an
                association of marketing students preparing emerging leaders and
                entrepreneurs in business.
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-primary-gold hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-brown rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-white/80">
                Follow us on social media to stay updated on events,
                competitions, and opportunities.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-primary-gold rounded-lg flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-brown"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-white/70 text-center sm:text-left">
            &copy; {currentYear} SMSU DECA. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold rounded"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


