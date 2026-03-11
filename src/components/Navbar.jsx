import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md text-white flex justify-between items-center px-10 py-4 shadow-lg z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">Phat Tin</h1>

      {/* Menu */}
      <ul className="flex gap-8">
        {[
          "home",
          "about",
          "projects",
          "skills",
          "experience",
          "contact",
        ].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
          >
            <a
              href={`#${item}`}
              className="capitalize hover:text-blue-400 transition-colors duration-300"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
