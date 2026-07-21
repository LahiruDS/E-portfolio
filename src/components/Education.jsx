import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiCalendar } from 'react-icons/hi'

const education = [
  {
    degree: 'BSc (Hons) Computer Science',
    school: 'University of Colombo School of Computing',
    period: '2022 - Present',
    description: 'Specializing in Software Engineering and Data Science. Coursework includes Data Structures, Algorithms, Database Systems, AI, and Web Technologies.',
    highlights: ['Dean\'s List', 'GPA: 3.5+', 'ACM Student Member'],
  },
  {
    degree: 'G.C.E. Advanced Level',
    school: 'Royal College, Colombo',
    period: '2019 - 2021',
    description: 'Physical Science stream with Mathematics, Physics, and Chemistry. Achieved 3 A passes.',
    highlights: ['3A Passes', 'Z-Score: 2.5+', 'Science Society President'],
  },
]

const timeline = [
  {
    title: 'Web Development Intern',
    company: 'TechCorp Solutions',
    period: '2024 Summer',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers on enterprise projects.',
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2023 - Present',
    description: 'Building websites and applications for local businesses. Managed client relationships and delivered projects on time.',
  },
  {
    title: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2023 - Present',
    description: 'Contributing to open source projects. Fixed bugs, added features, and helped with documentation.',
  },
]

function TimelineItem({ item, index, type }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent ring-4 ring-surface" />
      <div className="absolute left-1.5 top-4 w-0.5 h-full bg-surface-lighter" />

      <div className="p-5 rounded-xl bg-surface-light border border-surface-lighter/50 hover:border-primary/20 transition-all duration-300">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-text-primary font-semibold">{item.title || item.degree}</h3>
            <p className="text-primary-light text-sm">{item.company || item.school}</p>
          </div>
          <span className="flex items-center gap-1 text-xs text-text-muted whitespace-nowrap">
            <HiCalendar size={12} />
            {item.period}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-3">{item.description}</p>
        {item.highlights && (
          <div className="flex flex-wrap gap-2">
            {item.highlights.map((h) => (
              <span key={h} className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent-light border border-accent/20">
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <HiAcademicCap className="text-primary-light" size={24} />
              <h3 className="text-xl font-semibold text-text-primary">Education</h3>
            </div>
            {education.map((item, index) => (
              <TimelineItem key={item.degree} item={item} index={index} type="education" />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-primary-light text-xl font-bold">&lt;/&gt;</span>
              <h3 className="text-xl font-semibold text-text-primary">Experience</h3>
            </div>
            {timeline.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} type="experience" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
