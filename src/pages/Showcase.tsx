import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const achievements = [
  {
    title: "Smart India Hackathon Winners",
    year: "2024",
    description: "Team TechVengers won the grand finale of Smart India Hackathon 2024.",
    category: "Hackathon",
    icon: Trophy,
  },
  {
    title: "ACM-ICPC Regional Finalists",
    year: "2024",
    description: "Three teams qualified for the ACM-ICPC Asia Regional Finals.",
    category: "Competition",
    icon: Medal,
  },
  {
    title: "Best Paper Award - IEEE Conference",
    year: "2023",
    description: "Research paper on 'Deep Learning for Medical Imaging' received best paper award.",
    category: "Research",
    icon: Award,
  },
  {
    title: "Google Summer of Code",
    year: "2024",
    description: "5 students selected for GSoC 2024, contributing to major open source projects.",
    category: "Internship",
    icon: Star,
  },
];

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
    title: "Hackathon Winners 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=400&fit=crop",
    title: "Tech Symposium",
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    title: "Workshop Session",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    title: "Industry Visit",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    title: "Team Building",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    title: "Project Presentation",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Hackathon": return "bg-purple-100 text-purple-700";
    case "Competition": return "bg-blue-100 text-blue-700";
    case "Research": return "bg-emerald-100 text-emerald-700";
    case "Internship": return "bg-amber-100 text-amber-700";
    default: return "bg-muted text-muted-foreground";
  }
};

const Showcase = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Achievements & Showcase"
        subtitle="Celebrating the accomplishments of our talented students and faculty"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Recent Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                          {achievement.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{achievement.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-medium">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "15+", label: "Hackathons Won" },
              { value: "50+", label: "Research Papers" },
              { value: "30+", label: "Industry Certifications" },
              { value: "100+", label: "Awards Received" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
