'use client'

import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { PortfolioSection } from './components/PortfolioSection'
import { ResumeSection } from './components/ResumeSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { CaseStudySoroush } from './components/CaseStudySoroush'
import { Toaster } from './components/ui/sonner'

type ViewType = 'portfolio' | 'case-study-soroush'

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('portfolio')

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Initialize dark mode based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const handleViewCaseStudy = (caseStudyId: string) => {
    if (caseStudyId === 'soroush') {
      setCurrentView('case-study-soroush')
      window.scrollTo(0, 0)
    }
  }

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio')
    window.scrollTo(0, 0)
  }

  if (currentView === 'case-study-soroush') {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <CaseStudySoroush onBack={handleBackToPortfolio} />
        <Toaster position="top-right" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection onViewCaseStudy={handleViewCaseStudy} />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}