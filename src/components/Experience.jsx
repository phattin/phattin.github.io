import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-28 px-20 bg-slate-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto">

        <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl">

          <h3 className="text-xl font-semibold">
            Programming Tutor
          </h3>

          <p className="text-blue-400 mb-4">
            MindX Technology School
          </p>

          <p className="text-gray-300 leading-relaxed">
            Worked as a programming tutor teaching students the basics
            of programming through game development and robotics projects.
            Guided students in assembling robotic kits and programming them
            to perform movements and simple automated behaviors. These
            activities helped students develop logical thinking,
            problem-solving skills, and an introduction to engineering
            concepts.
          </p>

        </div>

      </div>
    </motion.section>
  );
}