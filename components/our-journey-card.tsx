import Image from "next/image";


interface TimelineEventProps {
    events: {
        year: string;
        title: string;
        description: string;
        image: string;
    }[];
    }
    
const TimelineEvent = ({ events } : TimelineEventProps) => {
  return (
    <>
      {events.map((event, index) => (
        <div key={index} className="relative pl-10 md:pl-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div
              className={`${
                index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
              } relative`}
            >
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold mb-2">{event.year}: {event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
            <div
              className={`${
                index % 2 === 0 ? "" : "order-2"
              } relative h-[200px] rounded-lg overflow-hidden`}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TimelineEvent;
