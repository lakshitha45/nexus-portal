import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Book, Video, Link as LinkIcon, ChevronDown } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const resourcesData = {
  "2nd Year": [
    { name: "Data Structures Notes", type: "PDF", size: "2.5 MB", icon: FileText },
    { name: "OOP Concepts Guide", type: "PDF", size: "1.8 MB", icon: FileText },
    { name: "Discrete Mathematics", type: "PDF", size: "3.2 MB", icon: FileText },
    { name: "Computer Organization", type: "Video", size: "Video Series", icon: Video },
  ],
  "3rd Year": [
    { name: "Database Management Systems", type: "PDF", size: "4.1 MB", icon: FileText },
    { name: "Operating Systems Notes", type: "PDF", size: "3.5 MB", icon: FileText },
    { name: "Computer Networks", type: "PDF", size: "2.9 MB", icon: FileText },
    { name: "Software Engineering", type: "PDF", size: "2.2 MB", icon: FileText },
  ],
  "4th Year": [
    { name: "Machine Learning Guide", type: "PDF", size: "5.2 MB", icon: FileText },
    { name: "Cloud Computing", type: "PDF", size: "3.8 MB", icon: FileText },
    { name: "Cyber Security Notes", type: "PDF", size: "2.7 MB", icon: FileText },
    { name: "Big Data Analytics", type: "Video", size: "Video Series", icon: Video },
  ],
};

const syllabusLinks = [
  { name: "2nd Year Syllabus", semester: "III & IV" },
  { name: "3rd Year Syllabus", semester: "V & VI" },
  { name: "4th Year Syllabus", semester: "VII & VIII" },
];

type Year = keyof typeof resourcesData;

const Resources = () => {
  const [selectedYear, setSelectedYear] = useState<Year>("2nd Year");
  const [isYearOpen, setIsYearOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Learning Resources"
        subtitle="Access study materials, notes, syllabus, and helpful links"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Syllabus Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Syllabus</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {syllabusLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-6 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Book className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Semester {item.semester}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Study Materials */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-foreground">Study Materials</h2>
              
              {/* Year Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsYearOpen(!isYearOpen)}
                  className="w-48 px-4 py-3 bg-card border border-border rounded-lg flex items-center justify-between hover:border-accent transition-colors"
                >
                  <span className="font-medium">{selectedYear}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isYearOpen ? "rotate-180" : ""}`} />
                </button>
                {isYearOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10">
                    {(Object.keys(resourcesData) as Year[]).map((year) => (
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
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {resourcesData[selectedYear].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 flex items-center justify-between hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      resource.type === "PDF" ? "bg-rose-100 text-rose-600" : "bg-purple-100 text-purple-600"
                    }`}>
                      <resource.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{resource.name}</h3>
                      <p className="text-sm text-muted-foreground">{resource.type} • {resource.size}</p>
                    </div>
                  </div>
                  <button className="p-3 hover:bg-muted rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-accent" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Important Links</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "University Portal", desc: "Academic Information" },
                { name: "Online Library", desc: "E-Books & Journals" },
                { name: "Placement Cell", desc: "Career Resources" },
                { name: "Research Portal", desc: "Publications" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-5 flex items-center gap-3"
                >
                  <LinkIcon className="w-5 h-5 text-accent" />
                  <div>
                    <h4 className="font-medium text-foreground">{link.name}</h4>
                    <p className="text-xs text-muted-foreground">{link.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
