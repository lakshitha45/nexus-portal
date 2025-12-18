import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Faculty from "./pages/Faculty";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Showcase from "./pages/Showcase";
import Placements from "./pages/Placements";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
