import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaFigma,
  FaPython,
  FaJava,
  FaUikit,
} from "react-icons/fa";
import {

  SiCsharp,
  SiSwift ,
  SiOpencv,
  SiTensorflow,
  SiKeras,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import {
  TbBrandCpp
} from "react-icons/tb";
import {
  FaRProject
} from "react-icons/fa6";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Language",
        icons: [
          FaPython,
          SiCsharp,
          TbBrandCpp,
          FaRProject,
          SiSwift,
          FaJava,
        ],
      },
      {
        title: "Frameworks",
        icons: [
          SiOpencv,
          SiTensorflow,
          SiKeras,
          FaUikit,
          SiNumpy,
          SiPandas

        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiSwift]
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "GenAI Certified Professional - Oracle Professional",
        stage: "2024 - Present",
      },

    ],
  },
  {
    title: "experience",
    info: [

      {
        title: "Web Developer Intern - CodeBind",
        stage: "2023 - 2023",
      },

    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Data Analysis with Python - FreeCodeCamp",
        stage: "2024",
      },
      {
        title: "Principles of UX/UI Design - Meta",
        stage: "2024",
      },
      {
        title: "Programming Fundamentals in Swift - Meta",
        stage: "2023",
      },
      {
        title: "Version Control - Meta",
        stage: "2023",
      },
      {
        title: "Introduction to iOS Mobile Application Development - Meta",
        stage: "2023",
      },
      {
        title: "Data Visualisation: Empowering Business insights - TATA",
        stage: "2023",
      },
      {
        title: "Data Science Virtual Exp Programme - British Airways",
        stage: "2023",
      },
      {
        title: "Python and Statistics for Financial Analysis - HKUST",
        stage: "2023",
      },
      {
        title: "Certified Event Orginizer - Maginfica - SIMATS",
        stage: "2023",
      },
      {
        title: "Python Programming: Beginner to Professional - Udemy",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />



      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 1.0)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-24 text-5xl"
          >
            From raw  <span className="text-accent">Data to Vivid</span> reality,
            the journey of  <span className="text-accent"> innovation.</span>

          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am a third-year B.Tech student specializing in Artificial Intelligence and Data Science, with a keen interest in data science and immersive engineering. My skills include machine learning, data analysis, and developing AR/VR applications. I am passionate about leveraging technology to solve complex problems and create transformative experiences. I aim to drive innovation by blending technology and creativity in my future career.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
