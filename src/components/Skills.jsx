import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMongodb, SiTypescript, SiMysql,
  SiPostman, SiLinux, SiFigma, SiC,
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 85 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 75 },
  { name: 'Python', icon: FaPython, color: '#3776AB', level: 90 },
  { name: 'Java', icon: FaJava, color: '#ED8B00', level: 80 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 70 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 85 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 70 },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 75 },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 60 },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 80 },
  { name: 'Linux', icon: SiLinux, color: '#FCC624', level: 70 },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 65 },
  { name: 'C', icon: SiC, color: '#A8B9CC', level: 70 },
]

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group p-5 rounded-xl bg-surface-light border border-surface-lighter/50 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <skill.icon size={28} style={{ color: skill.color }} />
        <span className="font-medium text-text-primary text-sm">{skill.name}</span>
      </div>
      <div className="w-full h-1.5 bg-surface-lighter rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
        />
      </div>
      <div className="text-right text-xs text-text-muted mt-1">{skill.level}%</div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
