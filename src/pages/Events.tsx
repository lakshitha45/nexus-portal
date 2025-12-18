import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const eventsData = [
  {
    title: "Tech Symposium 2024",
    date: "January 15-17, 2024",
    time: "9:00 AM - 5:00 PM",
    venue: "Main Auditorium",
    type: "Conference",
    description: "Annual technical symposium featuring keynote speakers, paper presentations, and project exhibitions.",
    attendees: 500,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    title: "Hackathon Challenge",
    date: "February 5-6, 2024",
    time: "24-hour Event",
    venue: "Computer Labs",
    type: "Competition",
    description: "48-hour coding marathon to solve real-world problems with exciting prizes.",
    attendees: 200,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
  },
  {
    title: "Industry Expert Talk",
    date: "January 25, 2024",
    time: "2:00 PM - 4:00 PM",
    venue: "Seminar Hall",
    type: "Seminar",
    description: "Expert session on 'Future of AI in Enterprise Applications' by industry leaders.",
    attendees: 150,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  },
  {
    title: "Code Sprint",
    date: "February 20, 2024",
    time: "10:00 AM - 6:00 PM",
    venue: "Lab Complex",
    type: "Competition",
    description: "Competitive programming contest with multiple rounds and attractive prizes.",
    attendees: 300,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    title: "Workshop: Cloud Computing",
    date: "March 5-7, 2024",
    time: "9:30 AM - 1:00 PM",
    venue: "Digital Classroom",
    type: "Workshop",
    description: "Hands-on workshop on AWS, Azure, and GCP with certification preparation.",
    attendees: 100,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    title: "Alumni Meet",
    date: "March 15, 2024",
    time: "4:00 PM onwards",
    venue: "Convention Center",
    type: "Networking",
    description: "Annual gathering of alumni for networking and knowledge sharing.",
    attendees: 400,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Conference": return "bg-purple-100 text-purple-700";
    case "Competition": return "bg-rose-100 text-rose-700";
    case "Seminar": return "bg-blue-100 text-blue-700";
    case "Workshop": return "bg-emerald-100 text-emerald-700";
    case "Networking": return "bg-amber-100 text-amber-700";
    default: return "bg-muted text-muted-foreground";
  }
};

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Events & Activities"
        subtitle="Stay updated with department events, workshops, and seminars"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {eventsData.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 gradient-primary rounded-full hidden md:block z-10" />
                  
                  <div className="md:ml-20 glass-card overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 h-48 lg:h-auto">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 lg:w-2/3">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4 text-accent" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4 text-accent" />
                            <span>{event.attendees}+ Expected</span>
                          </div>
                        </div>

                        <button className="btn-primary mt-4 text-sm">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
