import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-surface-lighter/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <span>Designed By</span>
          
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
            Lahiru De Silva
          </span><br/>
          <span>@ 2026 Lahiru De Silva | E-Portfolio. All rights reserved</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/LahiruDS" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary-light transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/lahiru-de-silva-86b0b1329/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary-light transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:lahiruddesilva2022@email.com" className="text-text-muted hover:text-primary-light transition-colors">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
