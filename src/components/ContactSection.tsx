'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Dribbble, Globe } from 'lucide-react'
import { toast } from "sonner@2.0.3"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, email, subject, message } = formData;
  
    // Use the form's email field as the recipient
    const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
    // Open draft in user's email app
    window.location.href = mailto;
  
    // toast.success("Message draft opened in your email app.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "medlpk.product@gmail.com",
      href: "mailto:medlpk.product@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+98 910 618 8099",
      href: "tel:+989106188099"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tehran, Iran",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/medlpk",
      color: "hover:text-blue-600"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://figma.com",
      color: "hover:text-purple-500"
    },
    {
      icon: Dribbble,
      label: "Dribbble",
      href: "https://dribbble.com/medlpk",
      color: "hover:text-pink-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/medlpk",
      color: "hover:text-gray-600"
    }
  ]

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Create <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you and explore how we can collaborate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-border/50 hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    🚀
                  </motion.div>
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-4 border-border/50 hover:border-primary/50 transition-colors duration-300 group">
                        <a
                          href={info.href}
                          className="flex items-center space-x-4"
                        >
                          <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{info.label}</p>
                            <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-4 border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3"
                        >
                          <Icon className={`h-6 w-6 text-muted-foreground transition-colors duration-300 ${social.color}`} />
                          <span className="font-medium group-hover:text-primary transition-colors duration-300">
                            {social.label}
                          </span>
                        </a>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-blue-600/5 border-primary/20">
              <h4 className="text-lg font-semibold mb-3">Let's Collaborate!</h4>
              <p className="text-muted-foreground mb-4">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need help with product design, design systems, or user research, 
                let's connect and see how we can work together.
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for new projects</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}