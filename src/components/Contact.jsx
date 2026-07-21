import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6">Contact Info</h3>

            {[
              { icon: FaEnvelope, label: 'Email', value: 'lahiruddesilva2022@email.com', href: 'mailto:lahiruddesilva2022@email.com' },
              { icon: FaPhone, label: 'Phone', value: '+94 76 076 4038', href: 'tel:+94760764038' },
              { icon: FaMapMarkerAlt, label: 'Location', value: 'Matara, Sri Lanka', href: null },
              
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary-light" size={20} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-text-primary hover:text-primary-light transition-colors text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-text-primary text-sm">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {[
                { icon: FaGithub, href: 'https://github.com/LahiruDS', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/lahiru-de-silva-86b0b1329/', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface-light border border-surface-lighter flex items-center justify-center text-text-muted hover:text-primary-light hover:border-primary/30 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-text-secondary mb-1.5">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-lighter text-text-primary text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-1.5">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-lighter text-text-primary text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-lighter text-text-primary text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
