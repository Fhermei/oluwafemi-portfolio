import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-black text-white"
      >
        <RevealOnScroll>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side - Developer Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/public/images/femi.png" 
              alt="Oyewole Oluwafemi"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
            />
          </div>
  
          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm Oyewole Oluwafemi
            </h1>
  
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              I’m a passionate <span className="text-blue-400">Software Developer</span>, 
              <span className="text-blue-400"> Graphics Designer</span>, and 
              <span className="text-blue-400"> Machine Learning & Data Analyst</span> with a love for solving real-world problems using clean code and creative design.
              I blend logic, visuals, and data into products that truly connect with users.
            </p>
  
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded-md font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                🚀 View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded-md font-medium transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              >
                📩 Contact Me
              </a>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>
    );
  };
  