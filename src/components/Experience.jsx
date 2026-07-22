import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaUsers, FaBullhorn, FaCamera } from "react-icons/fa";

const experiences = [
  {
    icon: FaBullhorn,
    title: "Media Team Member",
    organization: "Legion Society - University of Kelaniya",
    period: "2025 - Present",
    description:
      "Creating promotional posters, social media content, event branding, photography, videography, and digital marketing materials for university events.",
    skills: ["Graphic Design", "Social Media", "Branding"],
  },
  {
    icon: FaUsers,
    title: "Media Team Member",
    organization: "INIZIO 2025",
    period: "2025",
    description:
      "Contributed to planning and organizing the annual introductory event while coordinating logistics and promotional activities.",
    skills: ["Graphic Design", "Social Media", "Branding"],
  },
  {
    icon: FaCamera,
    title: "Media Team",
    organization: "Game & Animation Workshop 2025",
    period: "2025",
    description:
      "Designed promotional content, managed media coverage, and documented the workshop through photography and social media.",
    skills: ["Photography", "Content Creation", "Design"],
  },
    {
    icon: FaCamera,
    title: "Media Team Member",
    organization: "FCT Shield 2026",
    period: "2026",
    description:
      "I was awarded a Certificate of Appreciation for my contribution as a Media Team Member at the FCT Shield 2026 cricket tournament. This event was organized by the Faculty of Computing and Technology and involved active participation from students across the faculty",
    skills: ["Content Creation", "Flyer Design", "Design"],
  },
];

function ExperienceCard({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const Icon = experience.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -6 }}
      className="rounded-2xl bg-surface-light border border-surface-lighter p-6 hover:border-primary/40 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="text-primary-light text-2xl" />
      </div>

      <h3 className="text-xl font-semibold text-text-primary">
        {experience.title}
      </h3>

      <p className="text-primary-light text-sm mt-1">
        {experience.organization}
      </p>

      <p className="text-text-muted text-sm mb-4">
        {experience.period}
      </p>

      <p className="text-text-secondary leading-relaxed mb-4">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-primary/10 text-primary-light text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Leadership &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Activities
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>

          <p className="text-text-secondary mt-5 max-w-2xl mx-auto">
            My university leadership experience, club activities, event organization,
            and contributions to student communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}