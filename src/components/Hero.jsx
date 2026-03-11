import { motion } from "framer-motion";
import resume from "../assets/My_Resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-between px-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Nguyen Phat Tin</h1>

        <p className="text-xl mb-6">Software Engineer</p>

        <div className="flex gap-4">

          {/* Resume button */}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600 transition">
              View Resume
            </button>
          </a>

          {/* Github button */}
          <a
            href="https://github.com/phattin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border px-6 py-3 rounded hover:bg-slate-700 transition">
              Github
            </button>
          </a>

        </div>
      </motion.div>

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
        className="w-96"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}