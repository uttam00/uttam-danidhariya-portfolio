"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-black" },
      { name: "TypeScript", level: 85, color: "bg-blue-700" },
      { name: "Redux", level: 80, color: "bg-purple-600" },
      { name: "JavaScript", level: 95, color: "bg-yellow-500" },
      { name: "HTML", level: 95, color: "bg-orange-600" },
      { name: "CSS", level: 90, color: "bg-blue-500" },
      { name: "SASS/SCSS", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    id: "ui",
    name: "UI Libraries",
    skills: [
      { name: "Material UI", level: 85, color: "bg-blue-400" },
      { name: "Ant Design", level: 85, color: "bg-red-500" },
      { name: "Bootstrap", level: 80, color: "bg-purple-500" },
      { name: "React Bootstrap", level: 80, color: "bg-indigo-500" },
      { name: "Figma to HTML", level: 90, color: "bg-pink-600" },
      { name: "Yup", level: 75, color: "bg-green-500" },
    ],
  },
  {
    id: "tools",
    name: "Dev Tools",
    skills: [
      { name: "Git", level: 90, color: "bg-orange-600" },
      { name: "Bitbucket", level: 85, color: "bg-blue-700" },
      { name: "Jest", level: 75, color: "bg-red-500" },
      { name: "GraphQL", level: 70, color: "bg-pink-600" },
    ],
  },
]

// All skills for the filter
const allSkills = skillCategories.flatMap((category) => category.skills.map((skill) => skill.name)).sort()

export default function Skills() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [filteredSkills, setFilteredSkills] = useState<string[]>(allSkills)
  const [searchTerm, setSearchTerm] = useState("")

  // Handle skill selection/deselection
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  // Filter skills based on search term
  useEffect(() => {
    if (searchTerm) {
      setFilteredSkills(allSkills.filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())))
    } else {
      setFilteredSkills(allSkills)
    }
  }, [searchTerm])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies and tools in the web development ecosystem.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                      <span className="text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" indicatorClassName={skill.color} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Creative Skill Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-6">My Tech Stack</h3>

          {/* Search input */}
          <div className="relative max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>

          {/* Skill cloud */}
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <TooltipProvider>
              {filteredSkills.map((skill, index) => {
                const isSelected = selectedSkills.includes(skill)
                const charCode = skill.charCodeAt(0) + (skill.charCodeAt(skill.length - 1) || 0)
                const randomSize = (charCode + index) % 3 // Deterministic 0, 1, or 2
                const sizes = ["text-sm", "text-base", "text-lg"]
                const randomRotate = ((charCode * (index + 1)) % 5) - 2 // Deterministic -2 to 2

                return (
                  <Tooltip key={skill}>
                    <TooltipTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.1, y: -5 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        onClick={() => toggleSkill(skill)}
                        className={`
                          cursor-pointer px-4 py-2 rounded-full font-medium
                          transition-all duration-300 transform
                          ${isSelected ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted hover:bg-primary/10"}
                          ${sizes[randomSize]}
                        `}
                        style={{ transform: `rotate(${randomRotate}deg)` }}
                      >
                        {skill}
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to {isSelected ? "deselect" : "select"}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </TooltipProvider>
          </div>

          {/* Selected skills */}
          {selectedSkills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-muted/30 rounded-lg"
            >
              <h4 className="text-xl font-bold mb-4">Selected Skills: {selectedSkills.length}</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full flex items-center gap-2"
                  >
                    {skill}
                    <button
                      onClick={() => toggleSkill(skill)}
                      className="w-4 h-4 rounded-full bg-primary/30 hover:bg-primary/50 flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
