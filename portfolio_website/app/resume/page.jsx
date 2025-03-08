"use client";

import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs,
    FaGem,
    FaPython,
    FaJava,
    FaPhp,
    FaGithub,
} from "react-icons/fa";

import { 
    SiTailwindcss, 
    SiNextdotjs, 
    SiTypescript, 
    SiGraphql, 
    SiMongodb, 
    SiDocker, 
    SiRubyonrails,
    SiSpringboot,
    SiAngular,
} from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description: 
      "I am a software developer and I excel at crafting elegant digital experiences. I am proficient in various programming languages and technologies.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Balaji",
        },
        {
            fieldName: "Phone",
            fieldValue: "+91 8252759707",
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ years",
        },
        {
            fieldName: "Github",
            fieldValue: "balaji2132",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Email",
            fieldValue: "balajionlyperfection@gmail.com",
        },
        {
            fieldName: "FreeLance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi",
        },
    ]
};

//experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My experience",
    description: 
      "I have worked on various projects and have gained experience in various technologies.",
    items: [
        {
            comapny: "Pippallabs",
            position: "Full stack development intern",
            duration: "June 2024 - present",
        },
        {
            comapny: "Freelancer.com",
            position: "Freelance Software Developer",
            duration: "2022 - May 2024",
        },
    ]
};

//education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My education",
    description: 
      "I have completed my education from various institutions and have gained knowledge in various fields.",
    items: [
        {
            institution: "Chandigarh University",
            degree: "B.E. (Hons) in Computer Science Engineering with specialization in Iot",
            duration: "Aug 2022 - July 2026",
        },
        {
            institution: "Central Board of Secondary Education",
            degree: "Intermediate in Science",
            duration: "Sep 2021 - Aug 2022",
        },
        {
            institution: "Gyan Niketan Public School",
            degree: "Matriculation",
            duration: "June 2014 - July 2016",
        },
    ]
};

//skills data
const skills = {
    title: "My skills",
    description: 
      "I have mastered various technologies and programming languages.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTypescript />,
            name: "typeScript",
        },
        {
            icon: <SiGraphql />,
            name: "graphql",
        },
        {
            icon: <SiMongodb />,
            name: "mongodb",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
        {
            icon: <SiDocker />,
            name: "docker",
        },
        {
            icon: <FaGem />,
            name: "ruby",
        },
        {
            icon: <FaPython />,
            name: "python",
        },
        {
            icon: <FaJava />,
            name: "java",
        },
        {
            icon: <FaPhp />,
            name: "php",
        },
        {
            icon: <SiRubyonrails />,
            name: "ruby on rails",
        },
        {
            icon: <FaGithub />,
            name: "github",
        },
        {
            icon: <SiSpringboot />,
            name: "spring boot",
        },
        {
            icon: <SiAngular />,
            name: "angular",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";



const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                  defaultValue="experience" 
                  className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full gap-6 max-w-[380px] mx-auto xl:mx-0">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;