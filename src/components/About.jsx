import { motion } from "framer-motion";
import avt from "../assets/avt.jpg";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-28 px-20 bg-slate-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-2 gap-16 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            <p>
              I am a third-year Information Technology student majoring in 
              Software Engineering at Saigon University with a current GPA of 3.30. 
              Throughout my academic journey, I have worked on multiple projects 
              ranging from university coursework to practical systems designed 
              to solve real-world problems.
            </p>

            <p>
              My technical interests include both frontend and backend web 
              development as well as system-level programming. I enjoy building 
              efficient and scalable applications while focusing on creating 
              intuitive user experiences and reliable backend systems.
            </p>

            <p>
              In addition to my development experience, I also worked as a 
              programming tutor at a technology company, where I taught 
              students how to develop simple games and work with robotics kits. 
              I guided them in assembling robots and programming them to move 
              and perform interactive actions, helping them gain hands-on 
              experience with programming and engineering concepts.
            </p>

            {/* EDUCATION */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Education
              </h3>

              <p className="text-gray-300">
                Saigon University <br />
                Bachelor of Information Technology – Software Engineering <br />
                GPA: 3.30 / 4.0
              </p>
            </div>

          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <motion.img
            src={avt}
            alt="profile"
            className="w-80 h-80 object-cover rounded-2xl border border-slate-700 shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        </div>

      </div>
    </motion.section>
  );
}