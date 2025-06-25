// src/components/sections/About.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React", "Next.js", "HTML", "CSS", "JavaScript", "TailwindCSS", "Bootstrap"
  ];

  const backendSkills = [
    "Python", "Django", "Node.js", "Flask", "SQL", "Firebase"
  ];

  const graphicsSkills = [
    "Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"
  ];

  const dataSkills = [
    "Machine Learning", "Data Analysis", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"
  ];

  const automationSkills = [
    "Web Scraping", "Automation", "Selenium", "BeautifulSoup", "Python Scripts"
  ];

  const guiSkills = [
    "Tkinter", "PyQt6", "Kivy"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Introduction */}
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            I’m <span className="text-blue-400 font-semibold">Oyewole Oluwafemi</span>, a dynamic
            <span className="text-blue-400 font-medium"> Software Developer</span>,
            <span className="text-cyan-400 font-medium"> Machine Learning Engineer</span>,
            <span className="text-yellow-300 font-medium"> Data Analyst</span>, and
            <span className="text-pink-400 font-medium"> Graphics/UI Designer</span>. 
            I build beautiful, fast, and scalable solutions across web, design, and data-driven systems.
          </p>

          {/* Skills Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Frontend", color: "blue", skills: frontendSkills },
              { title: "Backend", color: "green", skills: backendSkills },
              { title: "Graphics & UI", color: "pink", skills: graphicsSkills },
              { title: "ML & Analytics", color: "yellow", skills: dataSkills },
              { title: "Automation", color: "cyan", skills: automationSkills },
              { title: "GUI/Desktop App Development", color: "green", skills: guiSkills },
            ].map(({ title, color, skills }, index) => (
              <div
                key={index}
                className={`p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-[0_4px_20px_rgba(59,130,246,0.05)]
                hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] transition-all duration-300`}
              >
                <h3 className={`text-xl font-bold mb-4 text-${color}-400`}>{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`bg-${color}-600/10 text-${color}-300 px-3 py-1 rounded-full text-sm hover:bg-${color}-600/20 transition`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education + Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 🎓 Education */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-400">🎓 Education</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li>
                  <strong>🎯 PGD in Computer Science</strong><br />
                  Osun State University, Nigeria (2024 – 2025)
                </li>
                <li>
                  <strong>🏗️ B.Eng in Civil Engineering</strong><br />
                  Osun State University, Nigeria (2016 – 2021)
                </li>
              </ul>
            </div>

            {/* 💼 Experience */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-400">💼 Work Experience</h3>
              <ul className="space-y-6 text-sm text-gray-300">
                <li>
                  <strong>🧑‍🏫 Facilitator – Web & Data Science</strong><br />
                  Taught Python, Web Development, and UI Design at Western Pinnacle University (Feb 2025 – Present).
                </li>
                <li>
                  <strong>💻 Full Stack Developer – Mvlzerz</strong><br />
                  Built social media, fintech, and ecommerce platforms with React, Django, Flask, and automation using Python.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
