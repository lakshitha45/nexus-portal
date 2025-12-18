import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Lock, 
  BarChart3, 
  Calendar, 
  BookOpen, 
  Bell,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import PageHeader from "@/components/PageHeader";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Student Dashboard" subtitle="Login to access your personalized dashboard" />

        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="glass-card p-8">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-center text-foreground mb-6">Student Login</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@university.edu"
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary mt-6">
                    Login to Dashboard
                  </button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Demo: Enter any email and password to login
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Welcome, Student!" subtitle="Your personalized academic dashboard" />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Attendance", value: "87%", icon: BarChart3, color: "from-emerald-500 to-emerald-600" },
              { label: "Assignments", value: "12/15", icon: CheckCircle2, color: "from-blue-500 to-blue-600" },
              { label: "Pending Tasks", value: "5", icon: Clock, color: "from-amber-500 to-amber-600" },
              { label: "Notifications", value: "3", icon: Bell, color: "from-rose-500 to-rose-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Attendance Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Subject-wise Attendance</h3>
              <div className="space-y-4">
                {[
                  { subject: "Data Structures", attendance: 92 },
                  { subject: "Database Systems", attendance: 85 },
                  { subject: "Computer Networks", attendance: 78 },
                  { subject: "Operating Systems", attendance: 90 },
                  { subject: "Software Engineering", attendance: 88 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{item.subject}</span>
                      <span className="font-medium text-foreground">{item.attendance}%</span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.attendance}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full rounded-full ${
                          item.attendance >= 85 ? "bg-emerald-500" : item.attendance >= 75 ? "bg-amber-500" : "bg-rose-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming</h3>
              <div className="space-y-4">
                {[
                  { title: "DS Assignment Due", date: "Tomorrow", type: "assignment", icon: BookOpen },
                  { title: "CN Lab Test", date: "Jan 20", type: "exam", icon: AlertCircle },
                  { title: "Project Review", date: "Jan 22", type: "meeting", icon: Calendar },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.type === "assignment" ? "bg-blue-100 text-blue-600" :
                      item.type === "exam" ? "bg-rose-100 text-rose-600" :
                      "bg-purple-100 text-purple-600"
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-6 mt-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: "Submitted Data Structures Assignment 5", time: "2 hours ago", status: "success" },
                { action: "Attended OS Lab Session", time: "Yesterday", status: "success" },
                { action: "Downloaded CN Notes - Unit 3", time: "2 days ago", status: "info" },
                { action: "Registered for Tech Symposium", time: "3 days ago", status: "success" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === "success" ? "bg-emerald-500" : "bg-blue-500"
                  }`} />
                  <span className="flex-1 text-sm text-foreground">{activity.action}</span>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <button onClick={() => setIsLoggedIn(false)} className="btn-secondary">
              Logout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
