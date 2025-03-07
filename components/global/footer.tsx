import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                ClubName
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              To foster a collaborative environment for students to
              develop technical, cultural, and leadership skills.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/events"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Events
              </Link>
              <Link
                href="/team"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Team
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
              <span className="text-sm text-muted-foreground">
                Email: club@university.edu
              </span>
              <span className="text-sm text-muted-foreground">
                Location: Student Center, Room 101
              </span>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ClubName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
