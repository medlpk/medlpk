'use client'

import { motion } from 'motion/react'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Palette, Target, Users, Zap } from 'lucide-react'

export function AboutSection() {
  const values = [
    {
      icon: Palette,
      title: "User-Centered Design",
      description: "Every design decision starts with understanding user needs and behaviors through research and testing."
    },
    {
      icon: Target,
      title: "Business Impact",
      description: "Designs that not only look great but drive measurable business results and user satisfaction."
    },
    {
      icon: Users,
      title: "Cross-functional Collaboration",
      description: "Strong experience working with engineering, product, and business teams to deliver cohesive solutions."
    },
    {
      icon: Zap,
      title: "Scalable Systems",
      description: "Building design systems and processes that scale across teams and reduce handoff time."
    }
  ]

  const skills = [
    "Design Systems",
    "Interaction Design", 
    "Responsive Web Design",
    "Information Architecture",
    "User Research",
    "Usability Testing",
    "A/B Testing",
    "Problem Solving",
    "User Strategy",
    "Cross-functional Collaboration",
    "Prototyping",
    "Wireframing"
  ]

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Designing with <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I believe great design happens when creativity meets strategy and user empathy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">My Design Philosophy</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                As a Senior Product Designer with over 4 years of experience, I specialize in designing 
                digital products and scalable design systems that improve user experience and support 
                business goals.
              </p>
              <p>
                I'm skilled in user research, prototyping, wireframing, and usability testing, with 
                strong experience collaborating across cross-functional teams. My focus is on turning 
                complex problems into simple, user-centered solutions.
              </p>
              <p>
                Throughout my career, I've had the opportunity to work on diverse projects - from 
                co-founding a startup and leading MVP launches to redesigning messaging platforms 
                that serve millions of users. I believe in the power of design systems to create 
                consistency and efficiency across teams.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="outline" className="py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-background/90 to-background/50 backdrop-blur-lg border border-border/50 rounded-2xl p-2 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/flagged/photo-1573144142793-a87ccabca492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTYyMTkwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mohammad Ehsan Delpak - Senior Product Designer"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-xl p-3 shadow-lg"
              >
                <Palette className="h-6 w-6" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-xl p-3 shadow-lg"
              >
                <Zap className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Design Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/50">
                    <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}