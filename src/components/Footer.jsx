import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-surface-lighter/50 py-8 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <p className="text-xs sm:text-sm text-text-muted">
            © 2026 Lahiru De Silva | E-Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span>Designed By</span>

            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
              Lahiru De Silva
            </span>
          </div>

          
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/LahiruDS"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary-light transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/lahiru-de-silva-86b0b1329/"
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-primary-light transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:lahiruddesilva2022@email.com"
            className="text-text-muted hover:text-primary-light transition-colors duration-300"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  )
}