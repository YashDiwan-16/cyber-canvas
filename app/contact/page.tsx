"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

            {isSubmitted ? (
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Thank You!
                </h3>
                <p className="mb-4">
                  Your message has been sent successfully. We'll get back to you
                  soon.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    onValueChange={handleSelectChange}
                    value={formData.subject}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="membership">Membership</SelectItem>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-muted-foreground">
                      Student Center, Room 101
                      <br />
                      University Campus
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">club@university.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-muted-foreground">
                    10:00 AM - 4:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-muted-foreground">Closed</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <div className="h-[400px] rounded-lg overflow-hidden border shadow-sm">
            {/* Placeholder for Google Map */}
            <div className="w-full h-full bg-card flex items-center justify-center">
              <p className="text-muted-foreground">
                Google Map would be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">How can I join the club?</h3>
            <p className="text-muted-foreground">
              You can join by filling out the contact form on this page or by
              attending one of our general meetings at the beginning of each
              semester.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Are there membership fees?</h3>
            <p className="text-muted-foreground">
              Yes, there is a small annual fee of $20 that helps cover the cost
              of events and activities.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">How often do you meet?</h3>
            <p className="text-muted-foreground">
              We have general meetings twice a month and additional events
              throughout the semester.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Can I suggest event ideas?</h3>
            <p className="text-muted-foreground">
              We welcome suggestions from all members. You can share your ideas
              during meetings or by contacting any of our executive board
              members directly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Join our vibrant community today and be part of something amazing!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#">Join Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
