import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      await emailjs.send(
        'service_ymve8zx',
        'template_6t9kn9q',
        {
          title: 'New Portfolio Contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '8iE1BDRVKMfOzCBiT'
      )

      setSubmitted(true)

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      alert('Failed to send message. Please try again.')
    }

    setLoading(false)
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
            Get In{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />

          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Contact Info
            </h3>

            {[
              {
                icon: FaEnvelope,
                label: 'Email',
                value: 'lahiruddesilva2022@gmail.com',
                href: 'mailto:lahiruddesilva2022@gmail.com',
              },
              {
                icon: FaPhone,
                label: 'Phone',
                value: '+94 76 076 4038',
                href: 'tel:+94760764038',
              },
              {
                icon: FaMapMarkerAlt,
                label: 'Location',
                value: 'Matara, Sri Lanka',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20">
                  <item.icon className="text-primary-light" size={20} />
                </div>

                <div>
                  <div className="text-xs text-text-muted">
                    {item.label}
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-text-primary hover:text-primary-light transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-text-primary text-sm">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: FaGithub,
                  href: 'https://github.com/LahiruDS',
                },
                {
                  icon: FaLinkedin,
                  href: 'https://www.linkedin.com/in/lahiru-de-silva-86b0b1329/',
                },
                {
                  icon: FaTwitter,
                  href: 'https://twitter.com',
                },
              ].map((social, index) => (
                <a
                  key={index}
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

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Name
              </label>

              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-lighter text-text-primary focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Email
              </label>

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-lighter text-text-primary focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-2">
                Message
              </label>

              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-lighter text-text-primary resize-none focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                loading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary to-primary-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25'
              }`}
            >
              {loading
                ? 'Sending...'
                : submitted
                ? 'Message Sent!'
                : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}