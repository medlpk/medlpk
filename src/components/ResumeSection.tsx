'use client'

import { motion } from 'motion/react'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { Download, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react'

export function ResumeSection() {
  const experience = [
    {
      title: "Co-Founder & Product Designer",
      company: "Ejaze.app",
      location: "Tehran, Iran",
      duration: "Oct 2024 - Present",
      description: "Co-founded an EdTech startup and led product discovery through MVP delivery. Conducted market research and co-defined the business model and high-level GTM.",
      achievements: [
        "Co-founded an EdTech startup and led MVP launch that received excellent user feedback",
        "Conducted market research and co-defined business model and high-level GTM",
        "Created comprehensive pitch decks, supporting fundraising activities",
        "Led ideation workshops with team members and defined the product roadmap together"
      ]
    },
    {
      title: "Product Designer",
      company: "Sahab Pardaz",
      location: "Tehran, Iran",
      duration: "Sep 2024 - Aug 2025",
      description: "Designed specialized user dashboards in the internet networks domain, improving usability and accessibility.",
      achievements: [
        "Designed specialized user dashboards improving usability and accessibility",
        "Conducted brainstorming sessions based on user research to ideate and validate new features",
        "Built and documented a scalable design system, ensuring consistency across products",
        "Modernized legacy pages by aligning them with the new design system"
      ]
    },
    {
      title: "Product Designer",
      company: "Tapsell - Gapify",
      location: "Tehran, Iran",
      duration: "Jun 2024 - Sep 2024",
      description: "Designed the activation & customization dashboard for the 'Bapify' AI assistant, focusing on clarity, task success, and quick setup.",
      achievements: [
        "Designed activation & customization dashboard focusing on clarity and task success",
        "Researched and analyzed domestic and international competitors in AI assistants",
        "Planned and managed design delivery across discovery → delivery",
        "Ran design QA / design-check sessions to align implementation with specs"
      ]
    },
    {
      title: "Product Designer",
      company: "Mohaymen ICT Group - Soroush messenger",
      location: "Tehran, Iran",
      duration: "Dec 2022 - Jun 2024",
      description: "Led end-to-end UI redesign across messaging platforms to elevate UX and visual standards.",
      achievements: [
        "Led end-to-end UI redesign across messaging platforms to elevate UX and visual standards",
        "Built and maintained cohesive UI patterns/design system for consistency and reuse",
        "Designed a performance-oriented dashboard for channel owners to improve insight and monetization",
        "Impact: The Soroush+ redesign increased the Android store rating from 3.7 → 4.2"
      ]
    },
    {
      title: "UI-UX Designer",
      company: "Rademan Holding",
      location: "Tehran, Iran",
      duration: "May 2022 - Dec 2022",
      description: "Taught design systems to interns and coached them on applying components in real projects.",
      achievements: [
        "Taught design systems to interns and coached them on applying components in real projects",
        "Mentored teams on UX to achieve more cohesive outputs and higher product quality",
        "Developed and expanded the company-wide design system for multi-project usage",
        "Owned UX process & UI design for the ChemiBoard project (admin panel IA, flows, and screens)"
      ]
    }
  ]

  const education = [
    {
      degree: "Associate of Science in Aerospace Engineering",
      school: "Buein Zahra Technical University",
      location: "Iran",
      year: "2019",
      focus: "Aerospace Engineering"
    }
  ]

  const skills = [
    { name: "Product Design", level: 95 },
    { name: "Design Systems", level: 92 },
    { name: "Interaction Design", level: 90 },
    { name: "User Research", level: 88 },
    { name: "Usability Testing", level: 85 },
    { name: "Information Architecture", level: 87 },
    { name: "Problem Solving", level: 93 },
    { name: "Cross-functional Collaboration", level: 90 }
  ]

  const tools = [
    "Figma", "FigJam", "Miro", "Adobe XD", "Jira", "Confluence", 
    "Google Analytics", "Photoshop", "Illustrator"
  ]

  const achievements = [
    {
      title: "Investor Traction",
      description: "Co-founded Ejaze.app, led MVP launch that received excellent user feedback and attracted multiple investors",
      year: "2024"
    },
    {
      title: "User Satisfaction Impact",
      description: "Redesigned Soroush+ messaging app, improving overall rating from 3.7 → 4.2, boosting retention and satisfaction",
      year: "2024"
    },
    {
      title: "Design Systems at Scale",
      description: "Built and documented scalable design systems across three companies, reducing handoff time and ensuring consistency",
      year: "2022-2024"
    }
  ]

  return (
    <section id="resume" className="py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Resume
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            4+ years of experience designing digital products and scalable design systems that improve user experience and support business goals.
          </p>
          <Button size="lg" className="group">
            <Download className="mr-2 h-4 w-4" />
            Download PDF Resume
            <motion.div
              className="ml-1"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              📄
            </motion.div>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-primary/10 rounded-lg p-3 mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 border-border/50 hover:border-primary/50 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary">{job.title}</h4>
                        <p className="text-lg font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.duration}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-blue-600/10 rounded-lg p-3 mr-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 border-border/50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-blue-600">{edu.degree}</h4>
                        <span className="text-sm text-muted-foreground">{edu.year}</span>
                      </div>
                      <p className="font-medium">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <p className="text-sm text-muted-foreground mt-2">Focus: {edu.focus}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-purple-600/10 rounded-lg p-3 mr-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">Key Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 border-border/50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-purple-600">{achievement.title}</h4>
                        <span className="text-sm text-muted-foreground">{achievement.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Core Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {skills.slice(0, 4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {skills.slice(4).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}