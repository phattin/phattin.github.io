import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-28 px-20 bg-slate-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-2 gap-12">
        {/* LEFT FORM */}
        {/* LEFT FORM */}
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your full name"
              className="bg-slate-700 p-3 rounded-md w-full outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="email@example.com"
              className="bg-slate-700 p-3 rounded-md w-full outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows="6"
              placeholder="Your message..."
              className="bg-slate-700 p-3 rounded-md w-full outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT CONTACT INFO */}
        <div className="space-y-6">
          {/* EMAIL */}
          <a href="mailto:tin220905@gmail.com">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-4 cursor-pointer hover:border-blue-500 transition"
            >
              <FaEnvelope size={28} className="text-blue-400" />

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">tin220905@gmail.com</p>
              </div>
            </motion.div>
          </a>

          {/* GITHUB */}
          <a href="https://github.com/phattin" target="_blank">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 mt-6 p-6 rounded-xl border border-slate-700 flex items-center gap-4 cursor-pointer hover:border-gray-400 transition"
            >
              <FaGithub size={28} />

              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-400">github.com/phattin</p>
              </div>
            </motion.div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/ph%C3%A1t-t%C3%ADn-nguy%E1%BB%85n-9028213b6/"
            target="_blank"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 mt-6 p-6 rounded-xl border border-slate-700 flex items-center gap-4 cursor-pointer hover:border-blue-500 transition"
            >
              <FaLinkedin size={28} className="text-blue-500" />

              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-400">Connect professionally</p>
              </div>
            </motion.div>
          </a>

          {/* LOCATION */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-4 hover:border-pink-500 transition"
          >
            <FaMapMarkerAlt size={28} className="text-pink-500" />

            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-400">Ho Chi Minh City, Vietnam</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
