import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInWhenVisible delay={0.2}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border border-surface-lighter relative">
                <img
                  src="/images/profile.jpg"
                  alt="Lahiru De Silva"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center absolute inset-0 hidden">
                  <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    <img src="/images/Me.jpeg" alt="Lahiru De Silva" className="w-full h-full object-cover" />
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                I have developed a combination of technical and creative skills through my academic studies and industry experience.<br/><br/>
I have basic knowledge of programming using the C language and experience in applying structured programming concepts to solve problems. I am also familiar with networking concepts such as IP addressing, subnetting, and network configuration using Cisco Packet Tracer.
              </p>
              <p className="text-text-secondary leading-relaxed">
               Additionally, I have gained experience in UI/UX design and system prototyping through academic projects such as the Lanka Land Rent system.<br/><br/>
Through my industry experience, I have also developed skills in graphic design, branding, and digital marketing, allowing me to create visually appealing and effective digital content.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Projects Completed', value: '10+' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'GitHub Stars', value: '50+' },
                  { label: 'Study Years', value: '3' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-surface-light border border-surface-lighter/50 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
