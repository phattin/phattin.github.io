import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-10 px-20 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* LEFT */}
        <div>
          <h3 className="text-lg font-semibold text-white">Phat Tin Nguyen</h3>

          <p className="text-sm">Software Engineering Student</p>
        </div>

        {/* SOCIAL */}
        <div className="flex gap-6 text-xl">
          <a
            href="mailto:tin220905@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/phattin"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ph%C3%A1t-t%C3%ADn-nguy%E1%BB%85n-9028213b6/"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}

      <div className="text-center text-sm mt-6 text-gray-500">
        © {new Date().getFullYear()} Phat Tin Nguyen. All rights reserved.
      </div>
    </footer>
  );
}
