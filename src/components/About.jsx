
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const AboutComponent = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className='text-secondary text-[17px] uppercase tracking-wider'>Introduction</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        I'm a dedicated Web Developer and Data Analyst with strong skills in Java, Python, React,Matlab,Seaborn, Machine Learning, Artificial Intelligence and modern web development technologies. I build responsive, user-centric web applications and develop efficient backend systems using MySQL and MongoDB. Along with creating dynamic interfaces, I specialize in analyzing datasets, generating insights, and applying statistical techniques to support data-driven decision-making. My projects span interactive web platforms, data dashboards, and automated workflows. Currently pursuing Computer Science with a focus on data analytics, artificial intelligence, and scalable web application development.
      </motion.p>
    </>
  );
};

const About = SectionWrapper(AboutComponent, "about");
export default About;
