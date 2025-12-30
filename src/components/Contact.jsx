import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ContactComponent = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await fetch('https://formspree.io/f/xnngeqdp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className='text-secondary text-[17px] uppercase tracking-wider'>Get in Touch</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-white via-[#915EFF] to-[#10B981] bg-clip-text text-transparent'>
          Contact Me.
        </h2>
        <p className='text-secondary text-center max-w-3xl mx-auto mt-6 text-[17px] leading-[30px]'>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out!
        </p>
      </motion.div>

      {/* Email Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-8"
      >
        <motion.a
          href="mailto:shankarkarajanagi18@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-4 px-10 rounded-xl text-white font-bold transition-all flex items-center gap-3 backdrop-blur-xl border-2 border-white/30 hover:border-[#915EFF] hover:bg-[#915EFF]/20 shadow-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(233, 231, 236, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <span className="text-2xl">✉️</span>
          <span className="text-[18px]">Email Me</span>
        </motion.a>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6 mb-20"
      >
        {/* GitHub */}
        <motion.a
          href="https://github.com/ShankarKarajanagi18"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 hover:border-white/40 shadow-xl hover:shadow-white/20 transition-all"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
          }}
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/karajanagi-shankar-piragonda/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 hover:border-[#0077B5]/50 shadow-xl hover:shadow-[#0077B5]/30 transition-all"
          style={{
            background: 'linear-gradient(135deg, rgba(231, 237, 240, 0.15) 0%, rgba(228, 228, 228, 0.05) 100%)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
          }}
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </motion.a>

        {/* Twitter/X */}
        <motion.a
          href="https://x.com/Shankar__45"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 hover:border-[#1DA1F2]/50 shadow-xl hover:shadow-[#1DA1F2]/30 transition-all"
          style={{
            background: 'linear-gradient(135deg, rgba(240, 240, 240, 0.15) 0%, rgba(225, 227, 229, 0.05) 100%)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
          }}
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Contact Form */}
      <div className='flex justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className='p-8 rounded-2xl max-w-2xl w-full border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group'
          style={{
            background: 'linear-gradient(135deg, rgba(223, 223, 223, 0.1) 0%, rgba(204, 206, 205, 0.08) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 to-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

          <div className='relative z-10'>
            <p className='text-secondary text-[17px] uppercase tracking-wider'>Get in touch</p>
            <h3 className='text-white font-black md:text-[40px] sm:text-[30px] xs:text-[30px] text-[25px] mt-2 bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent'>
              Send Message
            </h3>

            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='mt-4 p-4 rounded-xl backdrop-blur-md border border-green-400/30 shadow-lg'
                style={{
                  background: 'linear-gradient(135deg, rgba(217, 221, 220, 0.2) 0%, rgba(185, 185, 185, 0.1) 100%)',
                }}
              >
                <p className='text-green-400 text-center font-semibold'>
                  Thank you! Your message has been sent successfully!
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='mt-4 p-4 rounded-xl backdrop-blur-md border border-red-400/30 shadow-lg'
                style={{
                  background: 'linear-gradient(135deg, rgba(235, 235, 235, 0.2) 0%, rgba(224, 222, 222, 0.1) 100%)',
                }}
              >
                <p className='text-red-400 text-center font-semibold'>
                  ❌ Oops! Something went wrong. Please try again.
                </p>
              </motion.div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-8 flex flex-col gap-6'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-3'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className='py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium backdrop-blur-md focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF]/30 transition-all'
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                  }}
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-3'>Your Email</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className='py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium backdrop-blur-md focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF]/30 transition-all'
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                  }}
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-3'>Your Message</span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What do you want to say?'
                  className='py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium backdrop-blur-md focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF]/30 transition-all resize-none'
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                  }}
                  required
                />
              </label>

              <motion.button
                type='submit'
                disabled={loading}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='py-4 px-8 rounded-xl outline-none w-full text-white font-bold shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#915EFF]/30 hover:border-[#915EFF] relative overflow-hidden group'
                style={{
                  background: 'linear-gradient(135deg, rgba(208, 207, 209, 0.3) 0%, rgba(219, 219, 219, 0.3) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className='inline-block'
                      >
                        
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        
                      </motion.span>
                    </>
                  )}
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-[#915EFF]/40 to-[#10B981]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

const Contact = SectionWrapper(ContactComponent, "contact");
export default Contact;
