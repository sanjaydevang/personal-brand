import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "../../assets/linkpic1.jpg";

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };
  
  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <video
            src="/assets/Background5.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110 md:scale-110 md:object-[85%_center] lg:object-center object-[70%_center] transform-gpu"
          />
          {/* Enhanced gradient overlay with multiple layers for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
      </div>

      {/* Introduction Component - Vertically Centered */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            <motion.div 
              className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 
                         sm:mx-auto md:mx-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#7EA046] text-2xl font-bold">◆◆</span>
                <span className="text-white text-xl font-bold">Sanjay <span className="text-[#7EA046]">Devang</span></span>
              </div>
              <motion.div variants={itemVariants} className="mb-4">
                <p className="text-2xl md:text-3xl font-medium text-white shadow-text">Hi! I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white shadow-text whitespace-nowrap">
                  Sanjay <span style={{ color: '#7EA046' }}>Devang</span>
                </h1>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-2xl md:text-2xx text-white mb-2 shadow-text">
              Versatile Engineer | Software, Cloud & Applied AI
              </motion.h2>
              <motion.p variants={itemVariants} className="text-white text-base sm:text-lg md:text-lg lg:text-lg max-w-2xl mb-8 leading-relaxed shadow-text">
                <span className="block text-lg sm:text-xl md:text-xl lg:text-2xl font-medium mb-2" style={{ color: '#7EA046' }}>
                Engineer at heart, reliability in practice
                </span>
                My journey blends system reliability, DevOps practices, and cloud architecture. I’ve supported mission-critical applications at the London Stock Exchange, enhanced infrastructure at Sabre, and am currently pursuing a Master’s in Information Systems Technology at The George Washington University. With expertise across AWS, Kubernetes, Artificial Intelligence, and automation, I love building reliable, scalable systems that keep the world running.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="gradient-button !bg-[#7EA046] hover:!bg-black/40 hover:backdrop-blur-sm text-white rounded-lg shadow-md"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  className="gradient-button !bg-[#7EA046] hover:!bg-black/40 hover:backdrop-blur-sm text-white rounded-lg shadow-md"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Fixed at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full">
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div 
            className="relative cursor-pointer scale-75 sm:scale-90 md:scale-100" 
            onClick={() => scrollToSection("about")}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full blur-lg bg-[#7EA046]/30"></div>
            
            {/* Arrow Container */}
            <motion.div 
              className="relative bg-[#7EA046]/10 p-5 rounded-full border-2 border-[#7EA046]/30 backdrop-blur-sm 
                         hover:bg-[#7EA046]/20 hover:border-[#7EA046]/50 transition-all duration-300
                         hover:scale-110 group"
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-6 h-6 text-[#7EA046] group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Profile Image - Bottom Right */}
      <div className="hidden md:block absolute bottom-8 right-8 z-20">
        <img
          src={profileImg}
          alt="Profile"
          className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-[#7EA046] shadow-lg bg-white"
        />
      </div>
    </section>
  );
}