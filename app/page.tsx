// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Calendar, Users, Award, ArrowRight } from "lucide-react";

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="animated-gradient absolute inset-0 opacity-10"></div>
//         <div className="container relative px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
//           <div className="mb-8">
//             <Image
//               src="/cresalogo.jpeg"
//               alt="Club Logo"
//               width={120}
//               height={120}
//               className="mx-auto"
//             />
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
//             Welcome to{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
//               Cresa Club
//             </span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mb-8">
//             To foster a collaborative environment for students to develop
//             technical, cultural, and leadership skills.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button size="lg" asChild>
//               <Link href="/contact">Join Us</Link>
//             </Button>
//             <Button size="lg" variant="outline" asChild>
//               <Link href="/events">Upcoming Events</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="container py-16 md:py-24">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Join our vibrant community and take advantage of these amazing
//             opportunities.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center">
//             <div className="bg-primary/10 p-3 rounded-full mb-4">
//               <Calendar className="h-6 w-6 text-primary" />
//             </div>
//             <h3 className="text-xl font-bold mb-2">Exciting Events</h3>
//             <p className="text-muted-foreground">
//               Participate in workshops, competitions, and social gatherings
//               throughout the academic year.
//             </p>
//           </div>

//           <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center">
//             <div className="bg-primary/10 p-3 rounded-full mb-4">
//               <Users className="h-6 w-6 text-primary" />
//             </div>
//             <h3 className="text-xl font-bold mb-2">Networking</h3>
//             <p className="text-muted-foreground">
//               Connect with like-minded peers, alumni, and industry professionals
//               to expand your network.
//             </p>
//           </div>

//           <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center">
//             <div className="bg-primary/10 p-3 rounded-full mb-4">
//               <Award className="h-6 w-6 text-primary" />
//             </div>
//             <h3 className="text-xl font-bold mb-2">Skill Development</h3>
//             <p className="text-muted-foreground">
//               Enhance your skills through hands-on projects, leadership
//               opportunities, and collaborative work.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events Preview */}
//       <section className="bg-muted py-16 md:py-24">
//         <div className="container">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
//               <p className="text-muted-foreground">
//                 Don't miss out on our exciting upcoming events.
//               </p>
//             </div>
//             <Button variant="outline" className="mt-4 md:mt-0" asChild>
//               <Link href="/events" className="flex items-center">
//                 View All Events <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((event) => (
//               <div
//                 key={event}
//                 className="bg-card rounded-lg overflow-hidden border shadow-sm"
//               >
//                 <div className="relative h-48">
//                   <Image
//                     src={`/placeholder.svg?height=300&width=500&text=Event+${event}`}
//                     alt={`Event ${event}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="text-sm text-primary font-medium mb-2">
//                     {new Date(Date.now() + event * 86400000).toLocaleDateString(
//                       "en-US",
//                       {
//                         month: "long",
//                         day: "numeric",
//                         year: "numeric",
//                       }
//                     )}
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">
//                     Workshop: Topic {event}
//                   </h3>
//                   <p className="text-muted-foreground mb-4">
//                     A brief description of this amazing event that you
//                     definitely don't want to miss.
//                   </p>
//                   <Button variant="outline" size="sm" asChild>
//                     <Link href={`/events/${event}`}>Learn More</Link>
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="container py-16 md:py-24">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Hear from students who have been part of our community.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[1, 2, 3].map((testimonial) => (
//             <div
//               key={testimonial}
//               className="bg-card rounded-lg p-6 shadow-sm border"
//             >
//               <div className="flex items-center mb-4">
//                 <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
//                   <Image
//                     src={`/placeholder.svg?height=100&width=100&text=S${testimonial}`}
//                     alt="Student"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-bold">Student Name {testimonial}</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Class of 202{testimonial + 2}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-muted-foreground">
//                 "Being part of this club has been one of the highlights of my
//                 college experience. I've learned so much and made amazing
//                 friends along the way."
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-primary text-primary-foreground py-16 md:py-24">
//         <div className="container text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Join Our Community?
//           </h2>
//           <p className="max-w-2xl mx-auto mb-8 opacity-90">
//             Become a part of our vibrant community today and unlock a world of
//             opportunities.
//           </p>
//           <Button size="lg" variant="secondary" asChild>
//             <Link href="/contact">Join Us Now</Link>
//           </Button>
//         </div>
//       </section>
//     </>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Calendar, Users, Award, ArrowRight } from "lucide-react";

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="animated-gradient absolute inset-0 opacity-10"></div>
//         <div className="container relative px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
//           <div className="mb-8">
//             <Image
//               src="/cresalogo.jpeg"
//               alt="Club Logo"
//               width={120}
//               height={120}
//               className="mx-auto"
//             />
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
//             Welcome to{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
//               Cresa Club
//             </span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mb-8">
//             To foster a collaborative environment for students to develop
//             technical, cultural, and leadership skills.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button size="lg" asChild>
//               <Link href="/contact">Join Us</Link>
//             </Button>
//             <Button size="lg" variant="outline" asChild>
//               <Link href="/events">Upcoming Events</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events Preview */}
//       <section className="bg-muted py-16 md:py-24">
//         <div className="container">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
//               <p className="text-muted-foreground">
//                 Don't miss out on our exciting upcoming events.
//               </p>
//             </div>
//             <Button variant="outline" className="mt-4 md:mt-0" asChild>
//               <Link href="/events" className="flex items-center">
//                 View All Events <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
//               <div className="relative h-48">
//                 <Image
//                   src="/events/hackathon1.jpg"
//                   alt="Hackathon"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">Annual Hackathon</h3>
//                 <p className="text-muted-foreground mb-4">
//                   Join us for an exciting hackathon where innovation meets
//                   collaboration!
//                 </p>
//                 <Button variant="outline" size="sm" asChild>
//                   <Link href="/events/hackathon1">Learn More</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="container py-16 md:py-24">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Hear from students who have been part of our community.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-card rounded-lg p-6 shadow-sm border">
//             <div className="flex items-center mb-4">
//               <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
//                 <Image
//                   src="/team/person1.jpg"
//                   alt="Team Member"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <h4 className="font-bold">John Doe</h4>
//                 <p className="text-sm text-muted-foreground">Class of 2025</p>
//               </div>
//             </div>
//             <p className="text-muted-foreground">
//               "Being part of this club has been one of the highlights of my
//               college experience. I've learned so much and made amazing friends
//               along the way."
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="animated-gradient absolute inset-0 opacity-10"></div>
        <div className="container relative px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/cresalogo.jpeg"
              alt="Club Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Cresa Club
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            To foster a collaborative environment for students to develop
            technical, cultural, and leadership skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Join Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">
                Don't miss out on our exciting upcoming events.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link href="/events" className="flex items-center">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "/events/hackathon1.jpg",
              "/events/hackathon1.jpg",
              "/events/hackathon1.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden border shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={src}
                    alt={`Event ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {new Date(
                      Date.now() + (index + 1) * 86400000
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Workshop: Topic {index + 1}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing event that you
                    definitely don't want to miss.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/events/${index + 1}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from students who have been part of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["/team/person1.jpg", "/team/person1.jpg", "/team/person1.jpg"].map(
            (src, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm border"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={src}
                      alt={`Student ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Student Name {index + 1}</h4>
                    <p className="text-sm text-muted-foreground">
                      Class of 202{index + 2}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Being part of this club has been one of the highlights of my
                  college experience. I've learned so much and made amazing
                  friends along the way."
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
