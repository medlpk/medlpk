'use client'

import { motion } from 'motion/react'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ExternalLink, ArrowRight } from 'lucide-react'

interface PortfolioSectionProps {
  onViewCaseStudy?: (caseStudyId: string) => void
}

export function PortfolioSection({ onViewCaseStudy }: PortfolioSectionProps) {
  const projects = [
    {
      id: 1,
      title: "Ejaze.app - Co-Founded EdTech Startup",
      category: "Startup & Product Design",
      description: "Co-founded an EdTech startup and led product discovery through MVP delivery. Conducted market research and co-defined the business model and high-level GTM.",
      image: "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU2MjE5MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Product Strategy", "User Research", "MVP Design", "Startup"],
      problem: "Complex learning needs requiring personalized educational solutions",
      solution: "End-to-end UX/UI design with focus on usability and scalability",
      impact: "Received excellent user feedback and attracted multiple investors",
      duration: "Oct 2024 - Present",
      role: "Co-Founder & Product Designer",
      hasDetails: false
    },
    {
      id: 2,
      title: "Soroush+ Messaging Platform Redesign",
      category: "Mobile App Design",
      description: "Led end-to-end UI redesign across messaging platforms to elevate UX and visual standards. Delivered authentication flows and performance-oriented dashboard.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MTQ5Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile Design", "UI Redesign", "User Experience", "Performance"],
      problem: "Poor user satisfaction and low app store ratings affecting user retention",
      solution: "Comprehensive UI redesign with focus on user experience and visual standards",
      impact: "Improved app rating from 3.7 → 4.2, boosting retention and satisfaction",
      duration: "Dec 2022 - Jun 2024",
      role: "Product Designer",
      hasDetails: true,
      caseStudyId: "soroush"
    },
    {
      id: 3,
      title: "VNF Design System",
      category: "Design Systems",
      description: "Designed foundations and tokenized styles for a scalable design system. Built and documented scalable design systems across multiple companies.",
      image: "https://images.unsplash.com/photo-1563019589-7e7db5152430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzU2MjE5MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Design Systems", "Component Library", "Documentation", "Scalability"],
      problem: "Inconsistent design patterns and slow handoff times across teams",
      solution: "Comprehensive design system with tokenized styles and components",
      impact: "Reduced handoff time and ensured consistency across three companies",
      duration: "4 months",
      role: "Product Designer",
      hasDetails: false
    }
  ]

  const handleViewCaseStudy = (project: typeof projects[0]) => {
    if (project.hasDetails && project.caseStudyId && onViewCaseStudy) {
      onViewCaseStudy(project.caseStudyId)
    }
  }

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of my recent work where I've helped companies create meaningful digital experiences and scalable design systems.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 group">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Badge variant="outline" className="w-fit mb-4">
                      {project.category}
                    </Badge>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-primary">Challenge:</span>
                          <p className="text-muted-foreground">{project.problem}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Solution:</span>
                          <p className="text-muted-foreground">{project.solution}</p>
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-primary">Impact:</span>
                          <p className="text-muted-foreground">{project.impact}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Duration:</span>
                          <p className="text-muted-foreground">{project.duration} • {project.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.hasDetails ? (
                        <Button onClick={() => handleViewCaseStudy(project)} className="group/btn">
                          View Case Study
                          <motion.div
                            className="ml-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Button>
                      ) : (
                        <Button className="group/btn">
                          View Project
                          <motion.div
                            className="ml-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Button>
                      )}
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="group">
            View All Projects
            <motion.div
              className="ml-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}