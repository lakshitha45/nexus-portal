import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const attendanceData = {
  "2nd Year": [
    { rollNo: "21CS001", name: "Aditya Sharma", attendance: 92, status: "Regular" },
    { rollNo: "21CS002", name: "Bhavya Patel", attendance: 88, status: "Regular" },
    { rollNo: "21CS003", name: "Chetan Kumar", attendance: 76, status: "Warning" },
    { rollNo: "21CS004", name: "Divya Reddy", attendance: 95, status: "Regular" },
    { rollNo: "21CS005", name: "Esha Singh", attendance: 65, status: "Critical" },
    { rollNo: "21CS006", name: "Farhan Khan", attendance: 82, status: "Regular" },
    { rollNo: "21CS007", name: "Gitika Verma", attendance: 90, status: "Regular" },
    { rollNo: "21CS008", name: "Harsh Gupta", attendance: 71, status: "Warning" },
  ],
  "3rd Year": [
    { rollNo: "20CS001", name: "Ishaan Nair", attendance: 94, status: "Regular" },
    { rollNo: "20CS002", name: "Jaya Menon", attendance: 89, status: "Regular" },
    { rollNo: "20CS003", name: "Karthik Iyer", attendance: 78, status: "Warning" },
    { rollNo: "20CS004", name: "Lakshmi Devi", attendance: 96, status: "Regular" },
    { rollNo: "20CS005", name: "Mohit Aggarwal", attendance: 68, status: "Critical" },
    { rollNo: "20CS006", name: "Neha Saxena", attendance: 85, status: "Regular" },
    { rollNo: "20CS007", name: "Om Prakash", attendance: 91, status: "Regular" },
    { rollNo: "20CS008", name: "Pooja Mehta", attendance: 73, status: "Warning" },
  ],
  "4th Year": [
    { rollNo: "19CS001", name: "Rahul Joshi", attendance: 97, status: "Regular" },
    { rollNo: "19CS002", name: "Sanya Kapoor", attendance: 93, status: "Regular" },
    { rollNo: "19CS003", name: "Tanmay Bose", attendance: 81, status: "Regular" },
    { rollNo: "19CS004", name: "Uma Shankar", attendance: 98, status: "Regular" },
    { rollNo: "19CS005", name: "Varun Malhotra", attendance: 72, status: "Warning" },
    { rollNo: "19CS006", name: "Warda Hussain", attendance: 88, status: "Regular" },
    { rollNo: "19CS007", name: "Xavier D'Souza", attendance: 95, status: "Regular" },
    { rollNo: "19CS008", name: "Yamini Rao", attendance: 66, status: "Critical" },
  ],
};

type Year = keyof typeof attendanceData;

const Attendance = () => {
  const [selectedYear, setSelectedYear] = useState<Year>("2nd Year");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isYearOpen, setIsYearOpen] = useState(false);

  const filteredData = useMemo(() => {
    return attendanceData[selectedYear].filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || student.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [selectedYear, searchQuery, statusFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Regular":
        return "bg-emerald-100 text-emerald-700";
      case "Warning":
        return "bg-amber-100 text-amber-700";
      case "Critical":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getProgressColor = (attendance: number) => {
    if (attendance >= 85) return "bg-emerald-500";
    if (attendance >= 75) return "bg-amber-500";
    return "bg-rose-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Attendance Records"
        subtitle="View and track student attendance across all years"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Year Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsYearOpen(!isYearOpen)}
                  className="w-full md:w-48 px-4 py-3 bg-background border border-border rounded-lg flex items-center justify-between hover:border-accent transition-colors"
                >
                  <span className="font-medium">{selectedYear}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isYearOpen ? "rotate-180" : ""}`} />
                </button>
                {isYearOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10">
                    {(Object.keys(attendanceData) as Year[]).map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(year);
                          setIsYearOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          selectedYear === year ? "bg-accent text-accent-foreground" : ""
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name or roll number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="All">All Status</option>
                  <option value="Regular">Regular</option>
                  <option value="Warning">Warning</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Roll No</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Student Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Attendance</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Progress</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredData.map((student, index) => (
                    <motion.tr
                      key={student.rollNo}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{student.rollNo}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{student.name}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{student.attendance}%</td>
                      <td className="px-6 py-4">
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getProgressColor(student.attendance)} transition-all duration-500`}
                            style={{ width: `${student.attendance}%` }}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                          {student.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredData.length === 0 && (
              <div className="p-12 text-center text-muted-foreground">
                No students found matching your criteria.
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Attendance;
