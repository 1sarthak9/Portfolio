'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Code2,
  Database,
  Palette,
  Smartphone
} from 'lucide-react'
import { useTheme } from 'next-themes'
import AnimatedBackground from '@/components/3d/AnimatedBackground'
import AnimatedText from '@/components/3d/AnimatedText'
import AnimatedCard from '@/components/3d/AnimatedCard'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    icon: Code2
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB'],
    icon: Database
  },
  {
    category: 'Product & Design',
    items: ['Product Thinking', 'User Requirements', 'Wireframing', 'Figma'],
    icon: Palette
  },
  {
    category: 'Engineering Tools',
    items: ['Git', 'API Integration', 'Debugging', 'Deployment Basics'],
    icon: Smartphone
  }
];


  const projects = [
  {
    title: 'AI-Assisted Blog',
    description: 'A blog platform integrating AI-powered features for content assistance and improved user interaction.',
    tech: ['JavaScript', 'AI Integration'],
    github: 'https://github.com/1sarthak9/AI-assisted-Blog'
  },
  {
    title: 'Globe-Trails',
    description: 'A full-stack MERN application inspired by Airbnb, featuring property listings, bookings, and user authentication.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/1sarthak9/Globe-Trails'
  },
  {
    title: 'Zomato + Reels',
    description: 'Backend APIs for a food-ordering and short-video hybrid application, focused on scalable REST API design.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/1sarthak9/zomato-reels'
  }
];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* 3D Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="font-bold text-xl cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              SG
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <motion.button 
                onClick={() => scrollToSection('home')} 
                className="hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Home
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                About
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('skills')} 
                className="hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Skills
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('projects')} 
                className="hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Projects
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Contact
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-md hover:bg-accent transition-colors"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center space-x-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-md hover:bg-accent transition-colors"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-accent transition-colors"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatedText text="Sarthak Gupta" />
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
           Full-Stack Developer | Product & Technology Enthusiast


          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Passionate about building scalable, effective web applications that solve real-world problems. Skilled in full-stack development and driven to combine technical expertise with strategic product thinking and technology consulting.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            {[
              { href: "https://github.com/1sarthak9", icon: Github },
              { href: "https://linkedin.com/in/sarthakg-dev1", icon: Linkedin },
              { href: "mailto:sarthakgupta555prds@gmail.com", icon: Mail }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4">
  Hi! I'm Sarthak, a final-year BTech CSE student and full-stack developer passionate about building web applications that solve real-world problems. 
  With hands-on experience in team management and product-focused projects during my college years, I combine technical skills with strategic product thinking and effective collaboration.
  I’m eager to contribute to product management, consulting, or semi-technical roles while leveraging my strong foundation in software development.
</p>

<p className="text-lg text-muted-foreground mb-4">
  My journey in tech began with curiosity about how the internet works and has evolved into building impactful digital experiences. 
  I specialize in React, Node.js, and modern web technologies, complemented by practical involvement in product management projects and co-curricular activities that have strengthened my strategic thinking and leadership skills.
</p>

<p className="text-lg text-muted-foreground">
  Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge through technical writing and mentoring.
</p>

            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span>Fresher</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed:</span>
                    <span>8+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Happy Clients:</span>
                    <span>--</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technologies:</span>
                    <span>8+</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/50 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCard>
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                    >
                      <skillGroup.icon className="h-6 w-6 mr-2 text-primary" />
                      <h3 className="font-semibold">{skillGroup.category}</h3>
                    </motion.div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Badge variant="secondary">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 px-4 relative z-10">
  <motion.div 
    className="max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <AnimatedCard>
            <CardContent className="p-6">
              <motion.h3 
                className="font-semibold text-xl mb-2"
                whileHover={{ x: 5 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Badge variant="outline">{tech}</Badge>
                  </motion.div>
                ))}
              </div>
              <div className="flex space-x-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-sm font-medium transition-all border rounded-md px-3 py-2 shadow-xs hover:bg-accent hover:text-accent-foreground"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-sm font-medium transition-all border rounded-md px-3 py-2 shadow-xs hover:bg-accent hover:text-accent-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </motion.div>
              </div>
            </CardContent>
          </AnimatedCard>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground mb-4">Or reach out directly</p>
                <div className="flex justify-center space-x-4">
                  <a href="mailto:sarthakgupta555prds@gmail.com" className="flex items-center text-primary hover:underline">
                    <Mail className="h-4 w-4 mr-1" />
                    sarthakgupta555prds@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sarthak Gupta. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}