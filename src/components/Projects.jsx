import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Learning Platform',
    description: 'A full-stack e-learning platform with course management, quizzes, and progress tracking. Built with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'AI Chatbot',
    description: 'An intelligent chatbot using NLP for customer support. Features sentiment analysis and multi-language support.',
    tags: ['Python', 'TensorFlow', 'Flask', 'NLP'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-cyan-500/20 to-green-500/20',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with interactive maps, forecasts, and location-based alerts using OpenWeather API.',
    tags: ['React', 'TypeScript', 'REST API', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Task Manager App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop, and team workspaces.',
    tags: ['React', 'Firebase', 'Material UI', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-green-500/20 to-teal-500/20',
  },
  {
    title: 'Portfolio Generator',
    description: 'A CLI tool that generates beautiful portfolio websites from a JSON config. Supports multiple themes and layouts.',
    tags: ['Node.js', 'CLI', 'Handlebars', 'CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    title: 'Expense Tracker',
    description: 'Personal finance tracker with charts, budgeting tools, and export features. Built with modern React patterns.',
    tags: ['React', 'Chart.js', 'Context API', 'LocalStorage'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl bg-surface-light border border-surface-lighter/50 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-surface-light/40" />
        <span className="text-4xl font-bold text-text-primary/10 group-hover:text-text-primary/20 transition-colors relative z-10">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-light transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary-light border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-primary-light transition-colors"
          >
            <FaGithub size={16} />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-light transition-colors"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
