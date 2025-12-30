import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const EducationCard = ({ degree, university, duration, cgpa, coursework }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      whileHover={{ scale: 1.02, y: -5 }}
      className='w-full p-8 rounded-2xl border border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl hover:shadow-[#10B981]/20 transition-all duration-300 relative'
      style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#10B981]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300' />

      <div className='relative z-10'>
        <h3 className='text-white font-bold text-[26px] mb-1 bg-gradient-to-r from-white to-[#10B981] bg-clip-text text-transparent'>
          {degree}
        </h3>
        <p className='text-secondary text-[17px] font-semibold mt-1'>{university}</p>
        <div className='flex items-center gap-2 mt-3'>
          <span className='px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-[13px] font-medium border border-[#10B981]/30'>
            {duration}
          </span>
        </div>

        {cgpa && (
          <div className='mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F59E0B]/20 to-[#EF4444]/20 border border-[#F59E0B]/30 inline-block'>
            <p className='text-[#F59E0B] text-[18px] font-bold'>{cgpa}</p>
          </div>
        )}

        {coursework && (
          <div className='mt-5 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10'>
            <p className='text-[#10B981] font-semibold mb-2 text-[15px]'>📚 Relevant Coursework:</p>
            <p className='text-secondary text-[14px] leading-relaxed'>{coursework}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ title, organization, year }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3, 0.75)}
      whileHover={{ scale: 1.05, y: -8 }}
      className='p-6 rounded-xl border border-white/20 backdrop-blur-xl shadow-xl hover:shadow-[#8B5CF6]/30 transition-all duration-300 relative overflow-hidden group'
      style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/30 to-[#EC4899]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative z-10'>
        <h4 className='text-white font-bold text-[17px] mb-1'>{title}</h4>
        <p className='text-secondary text-[14px]'>{organization}</p>
        {year && (
          <span className='inline-block mt-2 px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-[11px] font-medium border border-[#8B5CF6]/30'>
            {year}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const AchievementCard = ({ title, description }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      whileHover={{ scale: 1.03, x: 10 }}
      className='p-6 rounded-xl border border-white/20 backdrop-blur-xl shadow-xl hover:shadow-[#F59E0B]/30 transition-all duration-300 relative overflow-hidden group'
      style={{
        background: 'linear-gradient(135deg, rgba(248, 245, 241, 0.15) 0%, rgba(241, 231, 231, 0.1) 100%)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-br from-[#F59E0B]/30 to-[#EF4444]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative z-10'>
        <h4 className='text-white font-bold text-[18px] mb-2'>{title}</h4>
        <p className='text-secondary text-[15px] leading-relaxed'>{description}</p>
      </div>
    </motion.div>
  );
};

const EducationComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className='text-secondary text-[17px] uppercase tracking-wider'>My Academic Background</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-white via-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent'>
          Education & Certifications
        </h2>
      </motion.div>

      <div className='mt-20 max-w-7xl mx-auto'>

        {/* Education Section */}
        <div className='mb-16'>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-white text-[32px] font-bold mb-8'
          >
            <span className='bg-gradient-to-r from-white to-[#10B981] bg-clip-text text-transparent'>
              Education
            </span>
          </motion.h3>
          <EducationCard
            degree="Bachelor of Science in Computer Science"
            university="C M R University - Bangalore, India"
            duration="Expected Graduation: July 2026 (4 years)"
            cgpa="Current CGPA: 8.9+"
            coursework="Data Structures & Algorithms, Object-Oriented Programming, Database Management, Web Development, Operating Systems, Software Engineering"
          />
        </div>

        {/* Certifications Section */}
        <div className='mb-16'>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-white text-[32px] font-bold mb-8'
          >
            <span className='bg-gradient-to-r from-white to-[#8B5CF6] bg-clip-text text-transparent'>
              Certifications
            </span>
          </motion.h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <CertificationCard
              title="Database Management"
              organization="NPTEL"
            />
            <CertificationCard
              title="Software Engineering"
              organization="Infosys Springboard"
            />
            <CertificationCard
              title="SQL Certification"
              organization="HackerRank"
            />
          </div>
        </div>


        {/* Achievements Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-white text-[32px] font-bold mb-8'
          >
            <span className='bg-gradient-to-r from-white to-[#F59E0B] bg-clip-text text-transparent'>
              Achievements
            </span>
          </motion.h3>
          <div className='grid grid-cols-1 gap-6'>
            <AchievementCard
              title="Member of Tech Club"
              description="Active member contributing to various technical events and workshops"
            />
            <AchievementCard
              title="Adobe Hackathon Participant"
              description="Participated in Adobe Hackathon, showcasing creative problem-solving skills"
            />
            <AchievementCard
              title="Bharatiya Antariksh Hackathon 2025"
              description="Participated in the prestigious space technology hackathon organized in collaboration with ISRO"
            />
          </div>
        </div>

      </div>

    
    </>
  );
};

const Education = SectionWrapper(EducationComponent, "education");
export default Education;
