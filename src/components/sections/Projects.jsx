import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
      {
        title: "🏥 Hospital Management System",
        description:
          "Integrated hospital platform with AI-based diagnostics, appointment booking, and electronic medical records.",
        tools: ["Python", "Django", "Machine Learning"],
        link: "https://github.com/Fhermei/Hospital-management-system-plus-AI",
      },
      {
        title: "🏦 Bank Website Fintech",
        description:
          "Secure digital banking system with user authentication, fraud detection, and financial transaction flows.",
        tools: ["Django", "HTML", "CSS"],
        link: "https://github.com/Fhermei/Bank_App_Fintech.git",
      },
      {
        title: "🛒 E-commerce Store",
        description:
          "A full-featured online store with dynamic product management, variation cart handling, and responsive layout.",
        tools: ["Django", "JavaScript", "Bootstrap"],
        link: "https://github.com/Fhermei/Eccomerce-store---Django.git",
      },
      {
        title: "🎬 Movies API",
        description:
          "RESTful API for managing movie data with endpoints for create, update, and query.",
        tools: ["Django", "Django REST"],
        link: "https://github.com/Fhermei/Movies-Api.git",
      },
      {
        title: "📧 Email Automation (Loan Defaulters)",
        description:
          "Python script to auto-detect loan defaulters and send timely email reminders.",
        tools: ["Pandas", "Yagmail", "SMTP"],
        link: "https://github.com/Fhermei/Email-Automation-Loan_Defaulters-.git",
      },
      {
        title: "🌐 Mvlzerz Social Media App (UI Design)",
        description:
          "A modern and intuitive UI for a social platform with user profile, chat, and content sharing flows.",
        tools: ["Figma", "Prototyping", "Wireframing"],
        link: "https://www.fiverr.com/s/5reggY1",
      },
      {
        title: "🌐 TripAdvisor Tourism ( Web Scrapping)",
        description:
          "This project scrapes Nigeria tourism data from TripAdvisor, extracting: ✅ Tourist spot names ✅ Ratings & number of reviews ✅ Images ✅ Descriptions ✅ Price, trip type, and duration info (defaulted) It stores all this data into a CSV dataset for tourism insights, recommendation engines, or dashboard analytics.",
        tools: ["Selenium", "BeautifulSoup", "CSV Module", "Regular Expressions"],
        link: "https://github.com/Fhermei/-TripAdvisor-Tourism-Web-Scraper.git",
      },
      {
        title: "🏦 Live Currency Converter",
        description:
          "This Currency Converter is a Python application designed to provide real-time currency conversions between multiple global currencies. It leverages up-to-date exchange rates to ensure accurate conversions, making it a valuable tool for individuals, businesses, and financial analysts.",
        tools: ["PyQt6", "beautifulsoup4", "Requests"],
        link: "https://github.com/Fhermei/Live_Currency_Converter.git",
      },
    ];
  
    return (
      <section
        id="projects"
        className="min-h-screen bg-black text-white py-20 px-6 flex items-center justify-center"
      >
        <RevealOnScroll>
        <div className="max-w-7xl w-full">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            🚀 Featured Projects
          </h2>
  
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-[0_4px_20px_rgba(59,130,246,0.05)] 
                  hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-cyan-400 transition-all">
                  {proj.title}
                </h3>
  
                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {proj.description}
                </p>
  
                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tools.map((tool, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-br from-blue-500/10 to-blue-700/10 text-blue-300 text-xs font-medium py-1 px-3 rounded-full border border-blue-500/20 hover:bg-blue-500/10 transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
  
                {/* Link */}
                <div className="mt-auto pt-2">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 underline hover:text-cyan-300 transition-all"
                  >
                    🔗 View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </RevealOnScroll>
      </section>
    );
  };
  