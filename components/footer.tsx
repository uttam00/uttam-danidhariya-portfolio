import { Github, Heart, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-2">
                UD
              </div>
              <span>Uttam Danidhariya</span>
            </Link>
            <p className="text-muted-foreground mt-2">Frontend Developer specializing in React and Next.js</p>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Ahmedabad, India</p>
              <a href="mailto:uttamdanidhariya@gmail.com" className="hover:text-primary transition-colors">
                uttamdanidhariya@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:uttamdanidhariya@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using Next.js</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} Uttam Danidhariya. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted-foreground/10 text-center">
          <p className="text-sm text-muted-foreground">
            "Motivated IT professional with a strong problem-solving orientation, committed to developing innovative
            solutions and embracing continuous learning."
          </p>
        </div>
      </div>
    </footer>
  )
}
