import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-5 sm:px-6 lg:px-8 pt-28 pb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute bottom-1/4 right-1/4 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
            <img
              src="/images/pro.jpeg"
              alt="Lahiru De Silva"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />

            <div className="hidden w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 items-center justify-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LD
              </span>
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-6"
        >
          <span className="inline-block max-w-full px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-xs sm:text-sm font-medium leading-relaxed">
            BICT Undergraduate | Graphic Designer | Digital Marketer | Web
            Developer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            Lahiru De Silva
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-7 sm:leading-8 px-2 mb-10"
        >
          An undergraduate student at the University of Kelaniya, currently
          pursuing a Bachelor of Information and Communication Technology. I am
          passionate about both technology and creativity, with a strong
          interest in programming, networking, digital marketing, and graphic
          design.
          <br />
          <br />
          Alongside my academic studies, I have gained industry experience in
          digital marketing and design, which helped me develop practical skills
          in real-world environments. I enjoy combining technical knowledge with
          creative thinking to produce effective solutions.
          <br />
          <br />
          My goal is to become a skilled IT professional who can contribute to
          innovative digital solutions and continuously grow in the technology
          field.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-8 py-3 border border-surface-lighter text-text-primary rounded-lg font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <HiDownload className="inline mr-2" />
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/LahiruDS"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary-light transition-colors"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/lahiru-de-silva-86b0b1329/"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary-light transition-colors"
          >
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="mailto:lahiruddesilva2022@email.com"
            className="text-text-muted hover:text-primary-light transition-colors"
          >
            <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-text-muted hover:text-primary-light transition-colors animate-bounce"
      >
        <HiArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  )
}