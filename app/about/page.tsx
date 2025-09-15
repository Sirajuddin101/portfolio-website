import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Award, GraduationCap, Languages, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Fluent" },
    { name: "Dari", level: "Native" },
    { name: "Pashto", level: "Native" },
  ]

  const awards = [
    {
      title: "Final Year Project Winner",
      organization: "COMSATS University",
      year: "2025",
      icon: Award,
    },
    {
      title: "Arduino & IoT Certification",
      organization: "Qanmos",
      year: "2025",
      icon: Award,
    },
    {
      title: "Allama Iqbal Scholarship",
      organization: "HEC",
      year: "2021-2025",
      icon: Award,
    },
  ]

  const skills = [
    "React",
    "Node.js",
    "Firebase",
    "JavaScript",
    "HTML/CSS",
    "IoT Development",
    "Arduino",
    "NodeMCU",
    "Real-time Systems",
    "Full-Stack Development",
    "API Integration",
    "Database Design",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm hover:scale-105 transition-transform duration-300"
            >
              Sirajuddin Kamal
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-foreground font-medium">
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

      <div className="container mx-auto px-4 py-12 max-w-4xl relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Header Section with Photo */}
        <div className="text-center mb-16 relative z-10">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <Image
                src="https://i.postimg.cc/MG8fQ5xh/Whats-App-Image-2025-09-14-at-5-17-06-PM.jpg"
                alt="Sirajuddin Kamal"
                fill
                className="rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" />
              <span>Kabul, Afghanistan</span>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <Card className="mb-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Who I Am
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a web designer & developer with strong skills in both frontend and backend development. I specialize
              in building full-stack applications and real-time systems using modern tools like React, Firebase, and
              Node.js. I'm also passionate about IoT development and automation, combining hardware and software to
              create innovative solutions.
            </p>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mb-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">COMSATS University • 2021 - 2025</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA: 2.5</p>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Final Year Project</h4>
                <p className="text-muted-foreground">
                  <strong>Gas Level Detection & Automatic Booking System</strong> - An innovative IoT solution combining
                  hardware sensors with web application for real-time gas monitoring and automated booking system.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages Section */}
        <Card className="mb-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-purple-600" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{language.name}</span>
                  <Badge variant="outline">{language.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Awards & Certifications */}
        <Card className="mb-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              Awards & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <award.icon className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{award.title}</h3>
                    <p className="text-muted-foreground">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Highlight */}
        <Card className="mb-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Web Developer Intern</h3>
                <p className="text-muted-foreground">TechNova</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Worked on client projects in an agile environment. Built responsive interfaces and integrated APIs
                  using HTML, CSS, JavaScript, React, and Firebase.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center pt-8 relative z-10">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
            collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/Sirajuddin101" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
