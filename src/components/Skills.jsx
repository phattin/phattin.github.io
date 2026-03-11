import { motion } from "framer-motion";

import {
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMysql,
  SiSpring,
  SiPhp,
  SiCplusplus,
  SiSharp,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
    { name: "Java", icon: <FaJava size={50} color="#f89820" /> },
    { name: "C#", icon: <SiSharp size={50} color="#9b4f96" /> },
    { name: "TypeScript", icon: <SiTypescript size={50} color="#3178c6" /> },
    { name: "PHP", icon: <SiPhp size={50} color="#777bb4" /> },
    { name: "C/C++", icon: <SiCplusplus size={50} color="#00599C" /> },
    { name: "HTML", icon: <FaHtml5 size={50} color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} color="#264de4" /> },
    { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
    { name: "Git", icon: <FaGitAlt size={50} color="#f1502f" /> },
    { name: "Spring", icon: <SiSpring size={50} color="#6DB33F" /> },
    { name: "MySQL", icon: <SiMysql size={50} color="#00758F" /> },
    { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
  ];

  return (
    <section id="skills" className="py-28 px-20 bg-slate-900 text-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-3">Skills</h2>

        <p className="text-gray-400">
          Technologies and programming languages I work with
        </p>
      </div>

      <div className="grid grid-cols-6 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex flex-col items-center gap-4 hover:border-blue-500 cursor-pointer"
            whileHover={{ scale: 1.08 }}
          >
            {skill.icon}

            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
