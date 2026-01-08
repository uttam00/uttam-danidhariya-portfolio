"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Heart, Globe } from "lucide-react"

const educationTimeline = [
  {
    period: "08/2018 - 12/2022",
    title: "B.E. in Information Technology",
    institution: "Government Engineering College",
    description: "Completed Bachelor's degree with 7.83 CGPA.",
  },
  {
    period: "03/2016 - 03/2018",
    title: "Higher Secondary Education (HSC)",
    institution: "Vidhyadhish Vidhya Sankul",
    description: "Completed higher secondary education with 73%.",
  },
]

const passions = [
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Learning New Skills",
    description: "Always exploring new technologies and frameworks to expand my knowledge.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
    title: "Travelling",
    description: "Exploring new places and cultures to gain diverse perspectives.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-green-500" />,
    title: "Hiking",
    description: "Enjoy exploring nature and finding inspiration in the great outdoors.",
  },
]

const languages = [
  {
    name: "English",
    proficiency: "Professional Working Proficiency",
    level: 80,
  },
  {
    name: "Hindi",
    proficiency: "Native or Bilingual Proficiency",
    level: 100,
  },
  {
    name: "Gujarati",
    proficiency: "Native or Bilingual Proficiency",
    level: 100,
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a motivated IT professional with a strong problem-solving orientation, committed to developing
            innovative solutions and embracing continuous learning to achieve impactful results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              {educationTimeline.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div className="absolute -left-10 top-0 w-5 h-5 rounded-full border-4 border-primary bg-background"></div>
                  <span className="text-sm font-semibold text-primary">{item.period}</span>
                  <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <p className="mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Passions and Languages */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6">What I&apos;m Passionate About</h3>
            <div className="grid gap-6 mb-10">
              {passions.map((passion, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2 bg-gradient-to-r from-primary/10 to-transparent">
                      <CardTitle className="flex items-center gap-3">
                        {passion.icon}
                        {passion.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{passion.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 mt-10">Languages</h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">{language.name}</h4>
                    </div>
                    <span className="text-sm text-muted-foreground">{language.proficiency}</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${language.level}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
