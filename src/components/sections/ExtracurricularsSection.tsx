import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import awsCertImage from "@/assets/awss.png";

import cloudEngineerCertImage from "@/assets/awss.png";
import redHatCertImage from "@/assets/awss.png";
import redHatAnsibleCertImage from "@/assets/awss.png";
import iiitbCertImage from "@/assets/awss.png";

const activities = [
  {
    image: awsCertImage,
  role: "AWS Certified Solutions Architect – Associate",
  year: "2024–2027",
  organization: "Amazon Web Services (AWS)",
  description: "Validated expertise in designing scalable, secure, and cost-optimized AWS solutions. Credential issued via Credly.",
  department: "Certification",
  size: "medium",
  link: "https://www.credly.com/badges/b1292f15-7f0c-4304-80e7-83bf33cc4267" // Repla
  },
  {
    image: cloudEngineerCertImage, // import your Credly badge or relevant logo
   role: "Google Cloud Digital Leader – Cloud Engineering",
    year: "2024",
    organization: "Google Cloud / Credly",
    description: "Credentialed in foundational cloud engineering skills including compute, networking, storage, security, and DevOps principles using Google Cloud technologies.",
    department: "Certification",
    size: "medium",
    link: "https://www.credly.com/badges/ef899d1c-7e3f-497d-b211-199898b1dfc8"
  },
  {
    image: redHatCertImage, // Replace with local import or asset path
  role: "Red Hat System Administration I (RH124)",
  year: "2025",
  organization: "Red Hat Academy",
  description: "Completed RH124 under Red Hat Academy, covering essential Linux administration, system tasks, user/group management, and basic networking. Foundation for RHCSA certification.",
  department: "Certification",
  size: "medium",
  link: "https://www.credly.com/badges/4e8ad2fc-430c-41c9-806c-c16c1d5201bf"
  },
  {
    image: redHatAnsibleCertImage, // replace with your imported badge or image path
  role: "Red Hat Linux Automation with Ansible (RH294)",
  year: "2025",
  organization: "Red Hat Academy",
  description: "Completed RH294 under Red Hat Academy, focusing on Linux infrastructure automation using Ansible. Built automation scripts, playbooks, and roles to streamline system management. Prepares for Red Hat Certified Engineer (RHCE).",
  department: "Certification",
  size: "medium",
  link: "https://www.credly.com/badges/3ad27d58-4be5-4495-8751-fff7a7abbc09"
  },
  {
    image: iiitbCertImage, // Replace with actual image path or import
    role: "Post Graduate Diploma in Data Science",
    year: "2019–2020",
    organization: "IIIT Bangalore",
    description: "Completed a year-long postgraduate diploma in Data Science from IIIT Bangalore, covering machine learning, data analytics, statistical methods, Python programming, and real-world case studies.",
    department: "Academic Certification",
    size: "medium",
    link: "https://drive.google.com/file/d/1d3cikIVgSyPAqAaFJ54PXxRO72mlc9hq/view?usp=drive_link"
}
  
];

const achievements = [
  "Managed 50+ college and club events collaboratively",
  "Served as Teaching Assistant for lab sessions with 200+ students",
  "Mentored 10+ interns and fresh graduates",
  "Coordinated teams of 10+ members for academic and extracurricular initiatives",
  "Supported student success through technical guidance and mentorship"
];

export default function ExtracurricularsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentAchievement, setCurrentAchievement] = useState(0);

  // Rotate achievements
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="extracurriculars" 
      className="py-12 md:py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "30px 30px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(#7EA046 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h3 className="text-lg font-medium mb-2" style={{ color: '#7EA046' }}>Beyond Academics</h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Extracurriculars</h2>
        </motion.div>

        {/* Mobile View - Horizontal Scroll with Sticky Achievement Card */}
        <div className="md:hidden relative">
          {/* Sticky Achievement Card */}
          <div className="sticky top-0 left-0 z-10 bg-[#0f2027] pb-4">
            <motion.article
              className="relative w-full h-[200px] bg-gradient-to-br from-[#7EA046]/10 via-black/80 to-black/90 rounded-lg overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-[1px] rounded-lg border border-[#7EA046]/20" />
              <div className="relative h-full p-6 flex flex-col">
                {/* Header */}
                <div className="text-center mb-4">
                  <motion.div 
                    className="w-10 h-10 mx-auto mb-2 rounded-full border-2 border-[#7EA046]/40 flex items-center justify-center bg-black/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.span className="text-lg font-bold text-[#7EA046]">A</motion.span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">Key Achievements</h3>
                </div>

                {/* Rotating Achievements */}
                <div className="flex-1 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentAchievement}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-center px-4"
                    >
                      <p className="text-[#7EA046] text-base font-semibold leading-relaxed">
                        {achievements[currentAchievement]}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2 justify-center">
                  {achievements.map((_, index) => (
                    <motion.div
                      key={index}
                      className="w-6 h-0.5 rounded-full"
                      animate={{
                        backgroundColor: index === currentAchievement 
                          ? "rgb(126, 160, 70)" 
                          : "rgba(126, 160, 70, 0.2)",
                        scale: index === currentAchievement ? [1, 1.2, 1] : 1
                      }}
                      transition={{ 
                        duration: index === currentAchievement ? 2 : 0.3,
                        repeat: index === currentAchievement ? Infinity : 0
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          </div>

          {/* Scrollable Activity Cards */}
          <div className="-mx-4 px-4 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#7EA046]/20 scrollbar-track-transparent">
            <div className="flex gap-4 min-w-max pt-4">
              {activities.map((activity, index) => (
                <motion.article
                  key={activity.role}
                  className="relative w-[280px] h-[400px] flex-shrink-0 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={activity.image}
                      alt={activity.role}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-end">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded-full bg-[#7EA046]/20 text-[#7EA046] text-xs border border-[#7EA046]/30">
                          {activity.year}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">
                          {activity.department}
                        </span>
                      </div>
                      {activity.link ? (
                        <a
                          href={activity.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-bold text-[#7EA046] underline hover:text-[#5a7a2e] transition-colors"
                        >
                          {activity.role}
                        </a>
                      ) : (
                        <span className="text-xl font-bold text-white">{activity.role}</span>
                      )}
                      <p className="text-sm text-white/80">{activity.organization}</p>
                      <p className="text-sm text-white/60 line-clamp-2">{activity.description}</p>
                    </div>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-[1px] rounded-lg border border-white/10" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid - Unchanged */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Achievement Card */}
          <motion.article
            className="relative min-h-[280px] bg-gradient-to-br from-[#7EA046]/10 via-black/80 to-black/90 rounded-lg overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative border */}
            <motion.div 
              className="absolute inset-[1px] rounded-lg border border-[#7EA046]/20"
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="absolute inset-0">
              <div className="relative h-full p-6 flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-[#7EA046]/40 flex items-center justify-center bg-black/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.span 
                        className="text-xl font-bold text-[#7EA046]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        A
                      </motion.span>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Key Achievements</h3>
                  <div className="w-16 h-0.5 bg-[#7EA046]/30 mx-auto" />
                </div>

                {/* Rotating Achievements */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative h-24 w-full max-w-[280px] mx-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentAchievement}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <p className="text-[#7EA046] text-xl font-semibold px-4 leading-relaxed">
                            {achievements[currentAchievement]}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2 justify-center mt-4">
                  {achievements.map((_, index) => (
                    <motion.div
                      key={index}
                      className="relative h-2"
                    >
                      <motion.div
                        className="w-8 h-0.5 rounded-full absolute top-1/2 -translate-y-1/2"
                        animate={{
                          backgroundColor: index === currentAchievement 
                            ? "rgb(126, 160, 70)" 
                            : "rgba(126, 160, 70, 0.2)",
                          scale: index === currentAchievement ? [1, 1.2, 1] : 1
                        }}
                        transition={{ 
                          duration: index === currentAchievement ? 2 : 0.3,
                          repeat: index === currentAchievement ? Infinity : 0
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-24 h-24 opacity-10">
                  <motion.div
                    className="w-full h-full border-l-2 border-t-2 border-[#7EA046] rounded-tl-lg"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                  <motion.div
                    className="w-full h-full border-r-2 border-b-2 border-[#7EA046] rounded-br-lg"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.article>

          {/* Activity Cards */}
          {activities.map((activity, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.article
                key={activity.role}
                className="group relative min-h-[280px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Background Image with Gradient */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-black/60 mix-blend-multiply transition-opacity duration-300"
                    animate={{ opacity: isHovered ? 0.3 : 0.6 }}
                  />
                  <motion.img
                    src={activity.image}
                    alt={activity.role}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full p-4 flex flex-col justify-between">
                  {/* Top Content */}
                  <div>
                    <motion.div 
                      className="inline-flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 mb-3"
                      animate={{ y: isHovered ? -5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-[#7EA046] rounded-full mr-2"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-[#7EA046] text-xs font-medium">{activity.year}</span>
                    </motion.div>

                    {activity.link ? (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-[#7EA046] underline hover:text-[#5a7a2e] transition-colors mb-2 tracking-tight line-clamp-2 block"
                      >
                        {activity.role}
                      </a>
                    ) : (
                      <span className="text-lg font-bold text-white mb-2 tracking-tight line-clamp-2 block">{activity.role}</span>
                    )}
                  </div>

                  {/* Bottom Content */}
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <p className="text-gray-200 text-xs line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[#7EA046] font-semibold">{activity.organization}</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <span className="text-white/70">{activity.department}</span>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute top-2 right-2 w-8 h-8 border border-white/10 rounded-full"
                    animate={{ 
                      rotate: isHovered ? 360 : 0,
                      borderColor: isHovered ? "rgba(126, 160, 70, 0.3)" : "rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 1 }}
                  >
                    <motion.div 
                      className="absolute inset-0 border-t-2 border-[#7EA046] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{ 
                    boxShadow: isHovered 
                      ? "inset 0 0 0 2px rgba(126, 160, 70, 0.5)" 
                      : "inset 0 0 0 1px rgba(255, 255, 255, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
} 