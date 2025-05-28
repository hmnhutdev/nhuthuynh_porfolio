import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectModal } from "@/components/ProjectModal";
import { staggerContainer, staggerItem } from "@/lib/animations";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  longDescription: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB featuring real-time inventory management.",
      longDescription:
        "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "JWT",
        "Tailwind CSS",
      ],
      features: [
        "User Authentication",
        "Product Management",
        "Shopping Cart",
        "Payment Processing",
        "Order Tracking",
        "Admin Dashboard",
      ],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/nhuthuynh/ecommerce",
    },
    {
      id: "dashboard",
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization dashboard with interactive charts and advanced filtering capabilities.",
      longDescription:
        "Real-time data visualization dashboard with interactive charts, advanced filtering, and customizable widgets. Built for scalability and performance.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "Vue.js",
        "D3.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
      ],
      features: [
        "Real-time Data",
        "Interactive Charts",
        "Custom Widgets",
        "Advanced Filtering",
        "Export Features",
        "Mobile Responsive",
      ],
      liveUrl: "https://example-dashboard.com",
      githubUrl: "https://github.com/nhuthuynh/dashboard",
    },
    {
      id: "mobile",
      title: "Task Management App",
      description:
        "Cross-platform mobile application for team collaboration with real-time synchronization.",
      longDescription:
        "Cross-platform mobile application for team collaboration with real-time synchronization, offline capabilities, and intuitive user interface.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React Native",
        "Firebase",
        "TypeScript",
        "Redux",
        "Expo",
        "AsyncStorage",
      ],
      features: [
        "Team Collaboration",
        "Real-time Sync",
        "Offline Mode",
        "Push Notifications",
        "File Attachments",
        "Time Tracking",
      ],
      liveUrl: "https://apps.apple.com/example",
      githubUrl: "https://github.com/nhuthuynh/taskapp",
    },
    {
      id: "ai",
      title: "AI Content Generator",
      description:
        "AI-powered content generation platform with natural language processing capabilities.",
      longDescription:
        "AI-powered content generation platform using natural language processing to create high-quality written content for various use cases.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "Python",
        "TensorFlow",
        "FastAPI",
        "React",
        "OpenAI API",
        "Docker",
      ],
      features: [
        "Text Generation",
        "Multiple Formats",
        "Custom Templates",
        "API Integration",
        "Batch Processing",
        "Quality Control",
      ],
      liveUrl: "https://example-ai.com",
      githubUrl: "https://github.com/nhuthuynh/ai-content",
    },
    {
      id: "blockchain",
      title: "DeFi Trading Platform",
      description:
        "Decentralized finance trading platform with smart contract integration and real-time market data.",
      longDescription:
        "Decentralized finance trading platform with smart contract integration, real-time market data, and secure wallet connectivity.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React",
        "Web3.js",
        "Solidity",
        "Ethereum",
        "MetaMask",
        "Chart.js",
      ],
      features: [
        "Wallet Integration",
        "Smart Contracts",
        "Real-time Trading",
        "Portfolio Tracking",
        "Yield Farming",
        "Security Audited",
      ],
      liveUrl: "https://example-defi.com",
      githubUrl: "https://github.com/nhuthuynh/defi-platform",
    },
    {
      id: "saas",
      title: "SaaS Analytics Tool",
      description:
        "Multi-tenant SaaS platform for business analytics with subscription management and billing integration.",
      longDescription:
        "Multi-tenant SaaS platform for business analytics with subscription management, billing integration, and comprehensive reporting.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Stripe",
        "Prisma",
        "Vercel",
        "Tailwind CSS",
      ],
      features: [
        "Multi-tenancy",
        "Subscription Management",
        "Advanced Analytics",
        "Custom Reports",
        "API Access",
        "White Labeling",
      ],
      liveUrl: "https://example-saas.com",
      githubUrl: "https://github.com/nhuthuynh/saas-analytics",
    },
  ];

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => (
    <motion.div
      variants={staggerItem}
      className="project-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={() => setSelectedProject(project)}
      custom={index}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <motion.div
          className="project-overlay absolute inset-0 bg-portfolio-primary/90 opacity-0 flex items-center justify-center"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-white text-portfolio-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">Some of my recent work</p>
        </ScrollReveal>

        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
