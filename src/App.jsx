import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import {
  About,
  Contact,
  Education,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ChatbotWidget from "./components/Chatbot/ChatbotWidget";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* FIXED FULL-PAGE STARS BACKGROUND */}
        <StarsCanvas />

        <Navbar />

        {/* HOME SECTION */}
        <section id="home" className='relative w-full min-h-screen mx-auto'>
          <div className='max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-6 relative z-10'>

            {/* Default Profile Photo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='mb-8'
            >
              <img
                src="https://ui-avatars.com/api/?name=Shankar+Karajanagi&size=200&background=915EFF&color=fff&bold=true&rounded=true"
                alt="Profile"
                className='w-48 h-48 rounded-full border-4 border-[#915EFF] object-cover shadow-2xl shadow-[#915EFF]/50'
              />
            </motion.div>

            {/* Name with Typewriter Effect */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='font-black text-white text-center lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]'
            >
              <TypeAnimation
                sequence={[
                  500,
                  "Hi, I'm ",
                ]}
                wrapper="span"
                speed={50}
                cursor={false}
                style={{ display: 'inline-block' }}
              />
              {' '}
              <TypeAnimation
                sequence={[
                  1200,
                  "Shankar Karajanagi",
                ]}
                wrapper="span"
                speed={50}
                cursor={false}
                style={{ display: 'inline-block' }}
                className='text-[#915EFF]'
              />
            </motion.h1>

            {/* Title/Role with Typewriter Effect */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-[#dfd9ff] font-medium text-center lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4'
            >
              <TypeAnimation
                sequence={[
                  2500,
                  'Web Developer and Data Analyst',
                ]}
                wrapper="p"
                speed={80}
                cursor={false}
              />
            </motion.div>

            {/* Short Bio with Typewriter Effect */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='text-secondary text-center max-w-3xl mt-6 text-[18px]'
            >
              <TypeAnimation
                sequence={[
                  3700,
                  'Designing User-Friendly Web Experiences and Delivering Actionable Data Insights',
                ]}
                wrapper="p"
                speed={80}
                cursor={false}
              />
            </motion.div>

            {/* All Three Buttons with Same Outline Style */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 6.0 }}
              className='flex gap-4 mt-8 flex-wrap justify-center'
            >
              <a
                href='#contact'
                className='border-2 border-[#EF4444] py-3 px-8 rounded-xl outline-none text-white font-bold hover:bg-[#EF4444] transition-all'
              >
                Contact Me
              </a>
              <a
                href='#work'
                className='border-2 border-[#915EFF] py-3 px-8 rounded-xl outline-none text-white font-bold hover:bg-[#915EFF] transition-all'
              >
                View Projects
              </a>
              <a
                href='https://github.com/ShankarKarajanagi18'
                target='_blank'
                rel='noopener noreferrer'
                className='border-2 border-[#4AABFF] py-3 px-8 rounded-xl outline-none text-white font-bold hover:bg-[#4AABFF] transition-all'
              >
                GitHub Profile
              </a>
            </motion.div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <About />

        {/* SKILLS SECTION */}
        <Tech />

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <Education />

        {/* PROJECTS SECTION */}
        <Works />

        {/* WHY HIRE ME SECTION - Video Introduction */}
        <section id="video" className="relative z-0 bg-transparent py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className='text-secondary text-[17px] uppercase tracking-wider'>
                Get to Know Me
              </p>
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-white via-[#915EFF] to-[#10B981] bg-clip-text text-transparent">
                Why Hire Me?
              </h2>
              <p className='text-secondary text-center max-w-3xl mx-auto mt-6 text-[17px] leading-[30px]'>
                Watch this quick video to learn about my strengths, mindset, and what makes me a great addition to your team.
              </p>
            </motion.div>

            {/* Video Card */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl max-w-5xl w-full border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, rgba(222, 219, 228, 0.1) 0%, rgba(235, 235, 235, 0.08) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 to-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <div className="relative z-10">
                  {/* Responsive YouTube Video Embed */}
                  <div className="video-responsive">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/Lph_ecVTI-o"
                      title="Why Hire Me - Shankar Karajanagi"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-xl"
                    />
                  </div>

                 
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="relative z-0 bg-transparent py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className='text-secondary text-[17px] uppercase tracking-wider'>
                Download My CV
              </p>
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-white via-[#915EFF] to-[#10B981] bg-clip-text text-transparent">
                Resume
              </h2>
            </motion.div>

            {/* Main Card */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="p-10 rounded-2xl max-w-3xl w-full border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(203, 201, 207, 0.1) 0%, rgba(149, 199, 182, 0.08) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-[#915EFF]/10 to-[#10B981]/10 opacity-50' />

                <div className="relative z-10">
                  {/* Floating Icon */}
                  <div className="flex justify-center mb-8">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-8xl"
                    >
                      📄
                    </motion.div>
                  </div>

                  <p className="text-secondary text-center max-w-2xl mx-auto text-[17px] mb-8 leading-relaxed">
                    Download my resume to learn more about my experience, skills, and education.
                    Feel free to reach out if you have any questions!
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 flex-wrap justify-center">
                    <motion.a
                      href="/Shnkar129_resume.pdf"
                      download="Shnkar129_resume.pdf"
                      whileHover={{ scale: 1.08, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="py-4 px-10 rounded-xl text-white font-bold text-lg flex items-center gap-3 backdrop-blur-xl border-2 border-[#8B5CF6]/50 hover:border-[#8B5CF6] shadow-xl hover:shadow-[#8B5CF6]/50 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, rgba(194, 192, 200, 0.3) 0%, rgba(197, 195, 199, 0.2) 100%)',
                        backdropFilter: 'blur(15px)',
                        WebkitBackdropFilter: 'blur(15px)',
                      }}
                    >
                      <span className="text-2xl">📥</span>
                      Download Resume
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/karajanagi-shankar-piragonda/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="py-4 px-10 rounded-xl text-white font-bold text-lg flex items-center gap-3 backdrop-blur-xl border-2 border-[#0077B5]/50 hover:border-[#0077B5] shadow-xl hover:shadow-[#0077B5]/50 cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, rgba(240, 240, 240, 0.3) 0%, rgba(228, 228, 228, 0.2) 100%)',
                        backdropFilter: 'blur(15px)',
                        WebkitBackdropFilter: 'blur(15px)',
                      }}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn Profile
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <Contact />

        {/* CHATBOT WIDGET - Fixed at bottom right */}
        <ChatbotWidget />
      </div>
    </BrowserRouter>
  );
};

export default App;
