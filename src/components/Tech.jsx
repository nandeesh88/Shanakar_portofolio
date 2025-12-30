import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

// Animation variants for staggered tech items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each item
      delayChildren: 0.3, // Initial delay before starting
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4,
    }
  }
};

const TechComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className='text-secondary text-[17px] uppercase tracking-wider'>My Technical Skills</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Technologies
        </h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='flex flex-row flex-wrap justify-center gap-10'
      >
        {technologies.map((technology) => (
          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.15, 
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.3 }
            }}
            className='flex flex-col items-center' 
            key={technology.name}
          >
            <div className='w-28 h-28'>
              <BallCanvas icon={technology.icon} />
            </div>
            <motion.p 
              className='text-white text-center mt-2 font-medium text-[14px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {technology.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

const Tech = SectionWrapper(TechComponent, "tech");
export default Tech;
