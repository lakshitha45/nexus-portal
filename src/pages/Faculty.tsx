import PageHeader from "@/components/PageHeader";
import FacultyCard from "@/components/FacultyCard";

const facultyData = [
  {
    name: "Dr. Rajesh Kumar",
    designation: "Professor & HOD",
    qualification: "Ph.D (IIT Delhi)",
    email: "rajesh.kumar@university.edu",
    phone: "+91 9876543210",
    specialization: "Machine Learning & AI",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Priya Sharma",
    designation: "Associate Professor",
    qualification: "Ph.D (IISc Bangalore)",
    email: "priya.sharma@university.edu",
    phone: "+91 9876543211",
    specialization: "Data Science & Analytics",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Amit Verma",
    designation: "Associate Professor",
    qualification: "Ph.D (NIT Trichy)",
    email: "amit.verma@university.edu",
    phone: "+91 9876543212",
    specialization: "Cyber Security",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Sneha Patel",
    designation: "Assistant Professor",
    qualification: "Ph.D (IIT Bombay)",
    email: "sneha.patel@university.edu",
    phone: "+91 9876543213",
    specialization: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. Vikram Singh",
    designation: "Assistant Professor",
    qualification: "M.Tech (IIT Madras)",
    email: "vikram.singh@university.edu",
    phone: "+91 9876543214",
    specialization: "Web Technologies",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Meera Reddy",
    designation: "Assistant Professor",
    qualification: "Ph.D (BITS Pilani)",
    email: "meera.reddy@university.edu",
    phone: "+91 9876543215",
    specialization: "Internet of Things",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. Arjun Nair",
    designation: "Assistant Professor",
    qualification: "M.Tech (NIT Calicut)",
    email: "arjun.nair@university.edu",
    phone: "+91 9876543216",
    specialization: "Database Systems",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Kavitha Iyer",
    designation: "Assistant Professor",
    qualification: "Ph.D (Anna University)",
    email: "kavitha.iyer@university.edu",
    phone: "+91 9876543217",
    specialization: "Computer Networks",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
];

const Faculty = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Our Faculty"
        subtitle="Meet our distinguished faculty members dedicated to excellence in education and research"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyData.map((faculty, index) => (
              <FacultyCard key={index} {...faculty} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
