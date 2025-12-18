import { motion } from "framer-motion";
import { Mail, Phone, BookOpen } from "lucide-react";

interface FacultyCardProps {
  name: string;
  designation: string;
  qualification: string;
  email: string;
  phone: string;
  specialization: string;
  image: string;
  index: number;
}

const FacultyCard = ({
  name,
  designation,
  qualification,
  email,
  phone,
  specialization,
  image,
  index,
}: FacultyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flip-card"
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front glass-card">
          <div className="h-full flex flex-col">
            <div className="h-40 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-center text-center">
              <h3 className="font-bold text-lg text-foreground">{name}</h3>
              <p className="text-accent font-medium text-sm mt-1">{designation}</p>
              <p className="text-muted-foreground text-sm mt-2">{qualification}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back p-6 flex flex-col justify-center">
          <h3 className="font-bold text-xl mb-4">{name}</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span>{specialization}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{phone}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacultyCard;
