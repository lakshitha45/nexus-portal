import { motion } from "framer-motion";
import { TrendingUp, Building2, Users, DollarSign, Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import AnimatedCounter from "@/components/AnimatedCounter";

const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "Apple",
  "Goldman Sachs", "Morgan Stanley", "JPMorgan", "Deloitte", "Accenture",
  "TCS", "Infosys", "Wipro", "Cognizant", "HCL",
  "Flipkart", "Paytm", "Razorpay", "Zomato", "Swiggy"
];

const stats = [
  { value: 95, suffix: "%", label: "Placement Rate", icon: <TrendingUp className="w-6 h-6 text-primary-foreground" /> },
  { value: 50, suffix: "+", label: "Recruiting Companies", icon: <Building2 className="w-6 h-6 text-primary-foreground" /> },
  { value: 480, suffix: "", label: "Students Placed", icon: <Users className="w-6 h-6 text-primary-foreground" /> },
  { value: 18, suffix: " LPA", label: "Highest Package", icon: <DollarSign className="w-6 h-6 text-primary-foreground" /> },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Google",
    role: "Software Engineer",
    package: "32 LPA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quote: "The department's training and support helped me crack my dream company. Forever grateful!",
  },
  {
    name: "Priya Patel",
    company: "Microsoft",
    role: "Product Manager",
    package: "28 LPA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    quote: "The industry exposure and placement cell's guidance were instrumental in my success.",
  },
  {
    name: "Arjun Kumar",
    company: "Amazon",
    role: "SDE-II",
    package: "35 LPA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    quote: "World-class faculty and excellent infrastructure prepared me for a global career.",
  },
];

const yearWiseData = [
  { year: "2024", placed: 165, total: 170, highest: "35 LPA", average: "8.5 LPA" },
  { year: "2023", placed: 158, total: 165, highest: "32 LPA", average: "7.8 LPA" },
  { year: "2022", placed: 152, total: 160, highest: "28 LPA", average: "7.2 LPA" },
];

const Placements = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Placements"
        subtitle="Building careers, connecting talent with opportunities"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>

          {/* Company Logos Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Our Recruiters</h2>
            <div className="relative overflow-hidden">
              <div className="flex gap-8 animate-marquee">
                {[...companies, ...companies].map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-6 py-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    <span className="font-semibold text-foreground whitespace-nowrap">{company}</span>
                  </div>
                ))}
              </div>
            </div>
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
          </motion.div>

          {/* Year-wise Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Year-wise Statistics</h2>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Year</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Students Placed</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Total Students</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Placement %</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Highest Package</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Average Package</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {yearWiseData.map((data, index) => (
                      <tr key={index} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{data.year}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{data.placed}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{data.total}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                            {Math.round((data.placed / data.total) * 100)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-accent">{data.highest}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{data.average}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-accent">{testimonial.company} - {testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">Package: {testimonial.package}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
