import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, 
  ClipboardCheck, 
  BookOpen, 
  Rocket, 
  Briefcase, 
  Award,
  GraduationCap,
  Building2,
  Trophy,
  Calendar
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const quickLinks = [
  { name: "Faculty", icon: Users, path: "/faculty", color: "from-blue-500 to-blue-600" },
  { name: "Attendance", icon: ClipboardCheck, path: "/attendance", color: "from-emerald-500 to-emerald-600" },
  { name: "Resources", icon: BookOpen, path: "/resources", color: "from-purple-500 to-purple-600" },
  { name: "Projects", icon: Rocket, path: "/projects", color: "from-orange-500 to-orange-600" },
  { name: "Placements", icon: Briefcase, path: "/placements", color: "from-rose-500 to-rose-600" },
  { name: "Showcase", icon: Award, path: "/showcase", color: "from-cyan-500 to-cyan-600" },
];

const stats = [
  { value: 25, suffix: "+", label: "Expert Faculty", icon: <Users className="w-6 h-6 text-primary-foreground" /> },
  { value: 500, suffix: "+", label: "Students", icon: <GraduationCap className="w-6 h-6 text-primary-foreground" /> },
  { value: 95, suffix: "%", label: "Placement Rate", icon: <Briefcase className="w-6 h-6 text-primary-foreground" /> },
  { value: 50, suffix: "+", label: "Companies", icon: <Building2 className="w-6 h-6 text-primary-foreground" /> },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden pt-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-400" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full animate-rotate-3d" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground text-sm mb-6">
                <Trophy className="w-4 h-4" />
                <span>NAAC A++ Accredited</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Department of
                <span className="block text-accent">Computer Science</span>
                & Engineering
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl">
                Empowering minds with cutting-edge technology education. Building tomorrow's innovators, leaders, and problem solvers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/faculty" className="btn-primary">
                  Explore Faculty
                </Link>
                <Link to="/projects" className="btn-secondary bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  View Projects
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-accent/20 rounded-full animate-pulse-glow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 gradient-primary rounded-3xl rotate-12 shadow-2xl flex items-center justify-center">
                    <GraduationCap className="w-32 h-32 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a center of excellence in computer science education and research, producing globally competitive professionals who contribute to technological advancement and societal development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education with state-of-the-art infrastructure, foster innovation through research, and develop industry-ready professionals with strong ethical values and leadership qualities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Department at a Glance</h2>
            <p className="section-subtitle">Numbers that speak our success story</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Quick Access</h2>
            <p className="section-subtitle">Navigate to important sections</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={link.path} className="quick-link-card group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Stay updated with department activities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tech Symposium 2024", date: "Jan 15-17", type: "Conference" },
              { title: "Hackathon Challenge", date: "Feb 5-6", type: "Competition" },
              { title: "Industry Expert Talk", date: "Jan 25", type: "Seminar" },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">{event.type}</span>
                    <h3 className="font-semibold text-foreground mt-1">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{event.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/events" className="btn-secondary">
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
