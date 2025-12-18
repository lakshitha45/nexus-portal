import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const projectsData = [
  {
    title: "AI-Powered Health Assistant",
    domain: "AI",
    team: ["Aditya S.", "Priya M.", "Rahul K."],
    description: "A machine learning based health diagnosis system using symptom analysis and medical history.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "Smart Campus IoT System",
    domain: "IoT",
    team: ["Sneha P.", "Vikram R."],
    description: "IoT-based smart classroom automation with attendance tracking and energy management.",
    tech: ["Arduino", "Raspberry Pi", "MQTT", "Node.js"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    domain: "Web",
    team: ["Neha G.", "Arjun N.", "Kavita S."],
    description: "Full-stack e-commerce solution with payment integration and inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Sentiment Analysis Dashboard",
    domain: "Data Science",
    team: ["Mohit A.", "Divya R."],
    description: "Real-time social media sentiment analysis with visualization dashboard.",
    tech: ["Python", "NLP", "Pandas", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Blockchain Voting System",
    domain: "Web",
    team: ["Karthik I.", "Uma S."],
    description: "Secure and transparent voting system using blockchain technology.",
    tech: ["Solidity", "Ethereum", "Web3.js", "React"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
  },
  {
    title: "Autonomous Drone Navigation",
    domain: "AI",
    team: ["Tanmay B.", "Pooja M.", "Harsh G."],
    description: "Computer vision-based autonomous drone navigation and obstacle avoidance.",
    tech: ["Python", "OpenCV", "ROS", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
  },
];

const domains = ["All", "AI", "Web", "IoT", "Data Science"];

const Projects = () => {
  const [selectedDomain, setSelectedDomain] = useState("All");

  const filteredProjects = selectedDomain === "All"
    ? projectsData
    : projectsData.filter((p) => p.domain === selectedDomain);

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case "AI": return "bg-purple-100 text-purple-700";
      case "Web": return "bg-blue-100 text-blue-700";
      case "IoT": return "bg-emerald-100 text-emerald-700";
      case "Data Science": return "bg-amber-100 text-amber-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Student Projects"
        subtitle="Explore innovative projects developed by our talented students"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <Filter className="w-5 h-5 text-muted-foreground" />
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDomain === domain
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {domain}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDomainColor(project.domain)}`}>
                      {project.domain}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>By:</span>
                    <span className="text-foreground">{project.team.join(", ")}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
