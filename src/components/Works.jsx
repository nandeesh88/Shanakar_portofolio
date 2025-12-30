import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className='p-5 rounded-2xl sm:w-[360px] w-full border border-white/20 backdrop-blur-xl shadow-2xl hover:shadow-[#915EFF]/30 transition-all duration-300 relative overflow-hidden group'
        style={{
          background: 'linear-gradient(135deg, rgba(225, 225, 225, 0.1) 0%, rgba(235, 239, 237, 0.08) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Hover Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 to-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        
        <div className='relative z-10'>
          {/* Image Container */}
          <div className='relative w-full h-[230px] rounded-xl overflow-hidden border border-white/10'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />

            {/* Gradient Overlay on Image */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

            {/* GitHub Link Button */}
            <div className='absolute inset-0 flex justify-end items-start m-3'>
              <motion.div
                onClick={() => window.open(source_code_link, "_blank")}
                whileHover={{ scale: 1.15, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 hover:bg-[#915EFF]/30'
              >
                <span className='text-white text-[20px] font-bold'>→</span>
              </motion.div>
            </div>
          </div>

          {/* Project Details */}
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px] bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent'>
              {name}
            </h3>
            <p className='mt-3 text-secondary text-[14px] leading-relaxed'>
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className='px-3 py-1 rounded-full text-[12px] font-medium backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all'
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WorksComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-8">
        <p className='text-secondary text-[20px] uppercase tracking-wider'>My work</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-white via-[#915EFF] to-[#10B981] bg-clip-text text-transparent'>
          Projects
        </h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
        >
          Following projects showcase my skills and experience through real-world examples of my
          work. Each project demonstrates my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const Works = SectionWrapper(WorksComponent, "work");
export default Works;
