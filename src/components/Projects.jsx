import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Badminton Court Management",
      desc: "A management system that allows staff to handle court bookings and sell badminton equipment while enabling administrators to manage employees and store operations efficiently.",
      tech: ["C#", "MySQL"],
      link: "https://github.com/phattin/BadmintonCourtManagement",
    },

    {
      title: "Smart Bus Tracking System",
      desc: "A web-based transportation management platform that allows administrators to manage bus routes and pickup locations, drivers to track schedules and mark attendance, and parents to monitor their child's bus route.",
      tech: ["React", "TailwindCSS", "NodeJS", "MySQL"],
      link: "https://github.com/Ko4rut/Smart-Bus-Tracking-System",
    },

    {
      title: "Manga Store",
      desc: "An e-commerce website for purchasing manga online with integrated payment functionality and inventory management for tracking stock and handling warehouse operations.",
      tech: ["HTML", "CSS", "PHP"],
      link: "https://github.com/phattin/web2_truyen",
    },
  ];

  return (
    <section id="projects" className="py-28 px-20 bg-slate-900 text-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-3">Projects</h2>

        <p className="text-gray-400">
          A selection of projects that showcase my skills and experience
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

            <p className="text-gray-400 mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-sm bg-slate-700 px-3 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              View on GitHub ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
