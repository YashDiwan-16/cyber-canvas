import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

export default function TeamPage() {
  const executiveTeam = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "President",
      bio: "Computer Science senior with a passion for AI and machine learning.",
      image: "/team/person1.jpg",
    },
    {
      id: 2,
      name: "Taylor Smith",
      role: "Vice President",
      bio: "Information Systems junior focused on data analytics and visualization.",
      image: "/team/person1.jpg",
    },
    {
      id: 3,
      name: "Jordan Lee",
      role: "Treasurer",
      bio: "Finance major with a minor in Computer Science, interested in fintech.",
      image: "/team/person1.jpg",
    },
    {
      id: 4,
      name: "Morgan Chen",
      role: "Secretary",
      bio: "Communications major with a talent for social media management and event planning.",
      image: "/team/person1.jpg",
    },
  ];

  const teamMembers = [
    {
      id: 5,
      name: "Riley Wilson",
      role: "Events Coordinator",
      image: "/team/person1.jpg",
    },
    {
      id: 6,
      name: "Casey Brown",
      role: "Marketing Lead",
      image: "/team/person1.jpg",
    },
    {
      id: 7,
      name: "Jamie Garcia",
      role: "Technical Workshop Lead",
      image: "/team/person1.jpg",
    },
    {
      id: 8,
      name: "Quinn Murphy",
      role: "Outreach Coordinator",
      image: "/team/person1.jpg",
    },
    {
      id: 9,
      name: "Avery Thompson",
      role: "Social Media Manager",
      image: "/team/person1.jpg",
    },
    {
      id: 10,
      name: "Sam Patel",
      role: "Webmaster",
      image: "/team/person1.jpg",
    },
    {
      id: 11,
      name: "Jordan Kim",
      role: "Graphic Designer",
      image: "/team/person1.jpg",
    },
    {
      id: 12,
      name: "Drew Martinez",
      role: "Content Creator",
      image: "/team/person1.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 sm:py-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the dedicated individuals who make our club thrive.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="container py-12 sm:py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Executive Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executiveTeam.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-lg overflow-hidden border shadow-sm group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
                <div className="flex justify-center space-x-3 mt-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Team Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-lg overflow-hidden border shadow-sm text-center group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                  <div className="flex justify-center space-x-3 mt-3">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Mail className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="container py-12 sm:py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Interested in becoming a part of our team? We're always looking for
          passionate individuals to join us.
        </p>
        <Button size="lg" asChild className="mt-2">
          <Link href="/contact">Apply Now</Link>
        </Button>
      </section>
    </>
  );
}
