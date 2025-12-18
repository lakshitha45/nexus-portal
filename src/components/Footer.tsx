import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg">CSE Department</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Department of Computer Science & Engineering, committed to excellence in education, research, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Faculty", "Attendance", "Resources", "Projects", "Placements"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>123 University Road, City - 500001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>cse@university.edu</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Department of Computer Science & Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
