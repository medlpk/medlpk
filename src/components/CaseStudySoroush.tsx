'use client'

import { motion } from 'motion/react'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowLeft, Calendar, User, Target, Lightbulb, Palette, Users, TrendingUp, ArrowRight } from 'lucide-react'

interface CaseStudySoroushProps {
  onBack?: () => void
}

export function CaseStudySoroush({ onBack }: CaseStudySoroushProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <button onClick={() => scrollToSection('overview')} className="hover:text-primary transition-colors">Overview</button>
            <button onClick={() => scrollToSection('problem')} className="hover:text-primary transition-colors">Problem</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-primary transition-colors">Process</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-primary transition-colors">Solution</button>
            <button onClick={() => scrollToSection('outcome')} className="hover:text-primary transition-colors">Outcome</button>
            <button onClick={() => scrollToSection('reflection')} className="hover:text-primary transition-colors">Reflection</button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Badge variant="secondary" className="mb-6">Case Study</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Soroush+ Messaging Platform 
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent block">
              UI Redesign
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            How I led a comprehensive UI redesign to improve user experience and visual standards, 
            resulting in a significant boost in user satisfaction and app store ratings.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Role</p>
                <p className="text-sm text-muted-foreground">Product Designer</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Timeline</p>
                <p className="text-sm text-muted-foreground">Dec 2022 - Jun 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Target className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Impact</p>
                <p className="text-sm text-muted-foreground">3.7 → 4.2 App Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-background/90 to-background/50 backdrop-blur-lg border border-border/50 rounded-2xl p-2 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MTQ5Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Soroush+ messaging platform redesign showcase"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
          <Card className="p-8 border-border/50">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Context</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Soroush+ is a popular messaging platform in Iran with millions of active users. When I joined the team at Mohaymen ICT Group, 
                  the app was facing challenges with user satisfaction, reflected in declining app store ratings and user complaints about 
                  the interface being outdated and confusing.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">My Role</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As the Product Designer, I was responsible for leading the end-to-end UI redesign across the entire messaging platform. 
                  This included designing new user flows, creating a cohesive design system, and ensuring consistency across all touchpoints. 
                  I collaborated closely with product managers, engineers, and stakeholders throughout the 18-month project.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Project Scope</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Design Deliverables</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complete UI redesign for mobile app</li>
                      <li>• Design system and component library</li>
                      <li>• User authentication flows</li>
                      <li>• Performance dashboard for channel owners</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Focus Areas</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Visual hierarchy and information architecture</li>
                      <li>• Consistent UI patterns and reusable components</li>
                      <li>• Improved usability and accessibility</li>
                      <li>• Modern, clean aesthetic aligned with user expectations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Problem Statement */}
        <motion.section
          id="problem"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-border/50">
              <div className="bg-destructive/10 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-semibold text-destructive mb-4">Core Problems Identified</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Poor User Satisfaction</p>
                      <p className="text-sm text-muted-foreground">App store rating had dropped to 3.7, with users frequently complaining about confusing navigation and outdated visual design.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Inconsistent Design Patterns</p>
                      <p className="text-sm text-muted-foreground">The interface lacked cohesive design standards, leading to a fragmented user experience across different sections.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Outdated Visual Standards</p>
                      <p className="text-sm text-muted-foreground">The app's visual design hadn't kept up with modern messaging app standards, making it feel dated compared to competitors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border-border/50">
                <h4 className="font-semibold mb-3">User Pain Points</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-orange-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-orange-500" />
                    </div>
                    <span className="text-sm">Difficulty finding key features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-orange-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-orange-500" />
                    </div>
                    <span className="text-sm">Confusing information hierarchy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-orange-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-orange-500" />
                    </div>
                    <span className="text-sm">Inconsistent visual feedback</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50">
                <h4 className="font-semibold mb-3">Business Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Declining user retention rates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Negative user reviews impacting growth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Reduced engagement from channel owners</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          id="process"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Design Process</h2>
          
          <div className="space-y-12">
            {/* Phase 1 */}
            <Card className="p-8 border-border/50">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 rounded-lg p-3 mr-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">1. Discovery & Research</h3>
                  <p className="text-muted-foreground">Understanding the current state and user needs</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Heuristic Evaluation</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    I conducted a comprehensive heuristic evaluation of the existing app, identifying usability issues 
                    across navigation, visual hierarchy, and information architecture. This helped me create a prioritized 
                    list of areas needing immediate attention.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Analyzed 50+ key user flows</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Documented 30+ usability issues</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Competitor Analysis</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    I studied leading messaging platforms like Telegram, WhatsApp, and Signal to understand current 
                    design patterns and user expectations. This analysis informed my design decisions while ensuring 
                    we maintained Soroush+'s unique identity.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Analyzed 5 major competitors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Identified 15+ best practices</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card className="p-8 border-border/50">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600/10 rounded-lg p-3 mr-4">
                  <Palette className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2. Ideation & Concept Development</h3>
                  <p className="text-muted-foreground">Exploring solutions through collaborative design thinking</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Stakeholder Workshops</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    I organized collaborative workshops with product managers, engineers, and key stakeholders to align on 
                    design goals and priorities. These sessions helped us define success metrics and establish design principles 
                    that would guide the redesign process.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-sm text-muted-foreground">Workshop Sessions</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">5</div>
                    <div className="text-sm text-muted-foreground">Design Principles</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Sketching & Wireframing</h4>
                  <p className="text-muted-foreground text-sm">
                    I started with rapid sketching sessions to explore different layout options and information architectures. 
                    These low-fidelity explorations allowed me to quickly iterate on ideas before moving to more detailed designs. 
                    The wireframing phase helped establish the structural foundation for the new interface.
                  </p>
                </div>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card className="p-8 border-border/50">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600/10 rounded-lg p-3 mr-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">3. Design System Development</h3>
                  <p className="text-muted-foreground">Building scalable and consistent design patterns</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  One of the key aspects of this project was establishing a comprehensive design system that would ensure 
                  consistency across the entire platform and enable faster development cycles for future features.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Foundation Elements</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>• Color palette with semantic tokens</div>
                      <div>• Typography scale and hierarchy</div>
                      <div>• Spacing and layout guidelines</div>
                      <div>• Icon library and illustration style</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Component Library</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>• 40+ reusable UI components</div>
                      <div>• Interactive states and variations</div>
                      <div>• Usage guidelines and documentation</div>
                      <div>• Developer handoff specifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          id="solution"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Design Solution</h2>
          
          <div className="space-y-12">
            {/* Key Design Decisions */}
            <Card className="p-8 border-border/50">
              <h3 className="text-2xl font-bold mb-6">Key Design Decisions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">1. Simplified Information Architecture</h4>
                    <p className="text-muted-foreground text-sm">
                      I restructured the navigation to reduce cognitive load, grouping related features and creating 
                      clearer pathways to key functionality. The new IA reduced the number of taps required to reach 
                      core features by an average of 2-3 interactions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">2. Enhanced Visual Hierarchy</h4>
                    <p className="text-muted-foreground text-sm">
                      I implemented a clear typographic scale and used strategic use of color and spacing to guide 
                      users through the interface. Important actions now stand out through better contrast and positioning.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">3. Consistent Interaction Patterns</h4>
                    <p className="text-muted-foreground text-sm">
                      I standardized interaction patterns across the app, ensuring that similar actions behave consistently. 
                      This reduced the learning curve for users and created a more predictable experience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">4. Modern Visual Language</h4>
                    <p className="text-muted-foreground text-sm">
                      I updated the visual style to align with current messaging app standards while maintaining 
                      Soroush+'s brand identity. This included refined colors, modern iconography, and improved spacing.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Design Showcase */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Visual Design Showcase</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 border-border/50">
                  <h4 className="font-semibold mb-4">Chat Interface Redesign</h4>
                  <div className="relative mb-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU2MjE5MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Chat interface redesign mockup"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Improved message bubble design, better readability, and cleaner input field with enhanced visual feedback.
                  </p>
                </Card>
                
                <Card className="p-6 border-border/50">
                  <h4 className="font-semibold mb-4">Channel Dashboard</h4>
                  <div className="relative mb-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1563019589-7e7db5152430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzU2MjE5MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Performance dashboard for channel owners"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Performance-oriented dashboard providing channel owners with clear insights and monetization tools.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Outcome */}
        <motion.section
          id="outcome"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Outcome & Impact</h2>
          
          <div className="space-y-8">
            {/* Key Results */}
            <Card className="p-8 border-border/50 bg-gradient-to-br from-primary/5 to-blue-600/5">
              <h3 className="text-2xl font-bold mb-6">Measurable Results</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4.2</div>
                  <div className="text-sm text-muted-foreground">App Store Rating</div>
                  <div className="text-xs text-green-600 mt-1">↑ from 3.7</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">+40%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                  <div className="text-xs text-green-600 mt-1">Based on feedback</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">18mo</div>
                  <div className="text-sm text-muted-foreground">Project Duration</div>
                  <div className="text-xs text-muted-foreground mt-1">End-to-end redesign</div>
                </div>
              </div>
            </Card>

            {/* Qualitative Impact */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-border/50">
                <h4 className="font-semibold mb-4">User Feedback</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <p className="text-sm italic mb-2">
                      "The new interface is so much cleaner and easier to navigate. Finally feels like a modern messaging app!"
                    </p>
                    <p className="text-xs text-muted-foreground">— App Store Review</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <p className="text-sm italic mb-2">
                      "Love the new dashboard for my channel. Everything I need is right there and the analytics are clear."
                    </p>
                    <p className="text-xs text-muted-foreground">— Channel Owner</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-border/50">
                <h4 className="font-semibold mb-4">Team Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-green-500" />
                    </div>
                    <span className="text-sm">Reduced design-to-development handoff time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-green-500" />
                    </div>
                    <span className="text-sm">Improved consistency across all product features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded bg-green-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded bg-green-500" />
                    </div>
                    <span className="text-sm">Enhanced collaboration between design and engineering</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Reflection */}
        <motion.section
          id="reflection"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Reflection & Learnings</h2>
          
          <div className="space-y-8">
            <Card className="p-8 border-border/50">
              <h3 className="text-xl font-bold mb-6">Key Learnings</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">The Power of Systematic Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Building a comprehensive design system from the ground up proved crucial for maintaining consistency 
                    across such a large-scale redesign. It not only improved the user experience but also significantly 
                    streamlined our design and development workflow.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Stakeholder Alignment is Everything</h4>
                  <p className="text-muted-foreground text-sm">
                    The early workshops and continuous collaboration with stakeholders prevented scope creep and ensured 
                    everyone was aligned on priorities. This collaborative approach was essential for the project's success.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Incremental Improvements Add Up</h4>
                  <p className="text-muted-foreground text-sm">
                    While we didn't have extensive user testing data, focusing on well-established UX principles and 
                    incremental improvements in usability created measurable impact on user satisfaction.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 border-border/50">
              <h3 className="text-xl font-bold mb-6">What I Would Do Differently</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">More User Research Earlier</h4>
                  <p className="text-muted-foreground text-sm">
                    With more time and resources, I would have conducted more extensive user interviews and usability 
                    testing sessions before finalizing the designs. This would have provided more concrete data to 
                    support design decisions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Phased Rollout Strategy</h4>
                  <p className="text-muted-foreground text-sm">
                    A more gradual rollout with A/B testing would have allowed us to validate design changes with 
                    real user data and make adjustments before full implementation.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Better Success Metrics Definition</h4>
                  <p className="text-muted-foreground text-sm">
                    Setting up more comprehensive analytics and success metrics from the beginning would have provided 
                    better insights into the impact of specific design changes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        <Separator className="my-12" />

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Interested in Learning More?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            This case study represents one of many projects where I've focused on creating meaningful user experiences 
            through thoughtful design and systematic thinking.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={onBack} className="group">
              View More Projects
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
            <Button variant="outline" onClick={() => window.location.hash = 'contact'}>
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}