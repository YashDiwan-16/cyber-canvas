import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                About Our Club
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Founded in 2015, our club has been at the forefront of fostering
                innovation, collaboration, and excellence among students.
              </p>
              <Button asChild>
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Club+Photo"
                alt="Club members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card rounded-lg p-8 border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To create a vibrant community where students can develop their
              skills, explore new ideas, and build lasting connections that
              extend beyond their academic journey.
            </p>
            <p className="text-muted-foreground">
              We strive to provide opportunities for personal and professional
              growth through workshops, competitions, networking events, and
              collaborative projects.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              To be recognized as the premier student organization that empowers
              members to become leaders, innovators, and change-makers in their
              respective fields.
            </p>
            <p className="text-muted-foreground">
              We envision a community where creativity flourishes, diversity is
              celebrated, and every member feels supported in pursuing their
              passions.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>

          <div className="space-y-12">
            <div className="relative pl-10 md:pl-0">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-border"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold mb-2">2015: Foundation</h3>
                  <p className="text-muted-foreground">
                    Our club was founded by a group of passionate students who
                    wanted to create a space for collaboration and innovation.
                  </p>
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300&text=2015"
                    alt="Foundation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="relative pl-10 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300&text=2018"
                    alt="Growth"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2 md:pl-12">
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold mb-2">2018: Expansion</h3>
                  <p className="text-muted-foreground">
                    We expanded our reach and began hosting larger events,
                    including our annual conference that attracts students from
                    across the region.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-10 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold mb-2">2021: Recognition</h3>
                  <p className="text-muted-foreground">
                    Our club received the "Outstanding Student Organization"
                    award for our contributions to campus life and student
                    development.
                  </p>
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300&text=2021"
                    alt="Recognition"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="relative pl-10 md:pl-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300&text=Today"
                    alt="Present day"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2 md:pl-12">
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold mb-2">Today: Innovation</h3>
                  <p className="text-muted-foreground">
                    We continue to innovate and grow, with new initiatives and
                    partnerships that provide even more opportunities for our
                    members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Skill Development</h3>
                  <p className="text-muted-foreground">
                    Enhance your technical, leadership, and communication skills
                    through hands-on projects and workshops.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Networking Opportunities</h3>
                  <p className="text-muted-foreground">
                    Connect with peers, alumni, and industry professionals who
                    share your interests.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Resume Enhancement</h3>
                  <p className="text-muted-foreground">
                    Add valuable experience to your resume through participation
                    in club activities and leadership roles.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 border shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Community</h3>
                  <p className="text-muted-foreground">
                    Be part of a supportive community that celebrates diversity
                    and encourages collaboration.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Access to Resources</h3>
                  <p className="text-muted-foreground">
                    Gain access to exclusive resources, tools, and opportunities
                    that will help you succeed.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Fun and Friendship</h3>
                  <p className="text-muted-foreground">
                    Enjoy social events and build lasting friendships with
                    like-minded individuals.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/contact">Join Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
