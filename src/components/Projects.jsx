import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Project 01 - Lanka Land Rent (LLR) – AI-Assisted Land Rental Platform',

    image: "/images/LLR.png",

    description: `Lanka Land Rent (LLR) is an AI-assisted land rental platform that connects landowners and tenants. The platform utilizes AI algorithms to provide personalized recommendations for land rentals based on user preferences, location, and budget. It also offers features such as online booking, secure payment processing, and a user-friendly interface for seamless interactions between landowners and tenants.`,

    tags: [
      'MagicPatterns',
      'UI/UX Design Principles',
      'System Design Concepts',
      'Front-end Prototyping'
    ],

    github: 'https://github.com',

    live: 'https://project-land-rental-platform-with-ai-consultation-370.magicpatterns.app/',

    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'Project 02 - Dynamic IP Address Assignment using DHCP',
    image: '\\images\\PKT.JPG',
    description: 'In this project, I configured a DHCP server to automatically assign IP addresses to multiple PCs in a network. Devices were connected to a switch, and DHCP settings were configured to distribute IP addresses dynamically. This eliminated the need for manual IP configuration and improved network efficiency.',
    tags: ['Cisco Packet Tracer', 'DHCP Protocol', 'Networking Concepts'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-cyan-500/20 to-green-500/20',
  },

{
  title: 'Project 03 - BuildMe.lk – Smart Construction Platform',

  image: '/images/BuildMe.png',

  description: `BuildMe.lk is a smart construction platform that connects customers with trusted construction professionals, suppliers, architects, engineers, and contractors through a centralized online marketplace. The backend is built with Django, Python, and PostgreSQL, ensuring scalability, security, and efficient data management.`,

  tags: [
    'Django',
    'Python',
    'PostgreSQL',
    'REST API',
    'React',
    'Tailwind CSS'
  ],

  github: 'https://github.com/YOUR_USERNAME/BuildMe.lk',

  live: '#',

  color: 'from-amber-500/20 to-orange-500/20',
},
{
  title: 'Project 04 - Jayasekara Legal Associates – Legal Services Website',

  image: '\\images\\jla.JPG',

  description: `A modern and responsive legal services website developed for Jayasekara Legal Associates using React, Vite, and CSS. The website showcases the firm's legal services, professional team, contact information, and provides an online consultation request form integrated with EmailJS.`,

  tags: [
    'React',
    'CSS',
    'Tailwind CSS',
    'Vite',
    'EmailJS'
  ],

  github: 'https://github.com/LahiruDS/LPO-2',

  live: 'https://lpo-2.vercel.app/',

  color: 'from-amber-500/20 to-orange-500/20',
},
{
  title: 'Project 05 - Sri Lanka Tourism – Travel Website',

  image: '\\images\\tour.JPG',

  description: `A modern and responsive tourism website built with React and Tailwind CSS. This project showcases beautiful travel destinations through an elegant, user-friendly interface with a fully responsive design for desktops, tablets, and mobile devices.

`,

  tags: [
    'React',
    'CSS',
    'Tailwind CSS',
    'Vite',
    'EmailJS'
  ],

  github: 'https://github.com/LahiruDS/sri-lanka-tourism/tree/master',

  live: 'https://sri-lanka-tourism-three.vercel.app/',

  color: 'from-amber-500/20 to-orange-500/20',
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
<div className="h-56 overflow-hidden relative">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
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
