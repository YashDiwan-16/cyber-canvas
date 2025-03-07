import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  // Sample event data
  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop: Introduction to Web Development",
      date: "March 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Tech Building, Room 101",
      description:
        "Learn the basics of web development with HTML, CSS, and JavaScript.",
      image: "/events/hackathon3.jpg",
    },
    {
      id: 2,
      title: "Networking Mixer",
      date: "March 22, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Student Center, Main Hall",
      description:
        "Connect with professionals from leading tech companies in a casual setting.",
      image: "/events/hackathon1.jpg",
    },
    {
      id: 3,
      title: "Hackathon 2025",
      date: "April 5-6, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Center",
      description: "A 48-hour coding competition to solve real-world problems.",
      image: "/events/hackathon2.jpg",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Guest Speaker: AI in Healthcare",
      date: "February 10, 2025",
      image: "/events/hackathon3.jpg",
    },
    {
      id: 5,
      title: "Resume Workshop",
      date: "January 25, 2025",
      image: "/events/hackathon1.jpg",
    },
    {
      id: 6,
      title: "Winter Social",
      date: "December 15, 2024",
      image: "/events/gathering1.jpg",
    },
    {
      id: 7,
      title: "Tech Talk: Blockchain Fundamentals",
      date: "November 20, 2024",
      image: "/events/hackathon2.jpg",
    },
    {
      id: 8,
      title: "Fall Hackathon",
      date: "October 8-9, 2024",
      image: "/events/hackathon2.jpg",
    },
    {
      id: 9,
      title: "Welcome Mixer",
      date: "September 5, 2024",
      image: "/events/CulturalNight2.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Our Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our exciting lineup of workshops, networking opportunities,
            and social gatherings.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-lg overflow-hidden border shadow-sm"
            >
              <div className="relative h-48">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>

                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href={`/events/${event.id}`}>Details</Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    Register
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-white font-bold text-xl mb-2">
                        {event.title}
                      </h3>
                      <p className="text-white/80 text-sm">{event.date}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black"
                      >
                        View Gallery
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to suggest an event?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Have an idea for a workshop, speaker, or social event? We'd love to
          hear from you!
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </>
  );
}
