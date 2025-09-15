import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const projects = [
    {
      title: "Gas Level Detection & Auto Booking System",
      role: "Full-Stack + IoT Developer",
      stack: ["NodeMCU", "Firebase", "GSM", "HTML/CSS", "JavaScript"],
      description: "IoT system to monitor gas levels and trigger bookings via web app in real time.",
      github: "https://github.com/Sirajuddin101",
      demo: "#",
    },
    {
      title: "Attendance Tracking App",
      role: "Full-Stack Developer",
      stack: ["Firebase", "React", "Firestore"],
      description: "Multi-role attendance system for students, teachers, and admins.",
      github: "https://github.com/Sirajuddin101",
    },
    {
      title: "Inventory Management System",
      role: "Backend & UI Developer",
      stack: ["React", "Firebase", "Node.js"],
      description: "Real-time inventory tracker with role-based access control.",
      github: "https://github.com/Sirajuddin101",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Sirajuddin Kamal
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Sirajuddin101" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/sirajuddin-kamal-721410333" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Sirajuddin Kamal
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Web Developer | Frontend & Backend | IoT Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Crafting modern, responsive web applications with real-time features and IoT integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my expertise in full-stack development and IoT integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="mb-3">
                        {project.role}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Sirajuddin Kamal. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
