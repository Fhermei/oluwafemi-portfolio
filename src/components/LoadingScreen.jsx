import { useEffect, useState } from "react";

/**
 * LoadingScreen component displays an animated intro screen for your portfolio.
 * It simulates typing "Welcome to Femi's Dev Lab" with a loading bar, then disappears.
 */

export const LoadingScreen = ({ onComplete }) => {
  // State to hold the text being typed out
  const [text, setText] = useState("");
  
  // Full message to be revealed with typewriter effect
  const fullText = "Welcome to Femi's Dev Lab";

  useEffect(() => {
    let index = 0;

    // Interval to simulate typing effect
    const interval = setInterval(() => {
      // Update visible text with next character
      setText(fullText.substring(0, index));
      index++;

      // When complete, clear the interval and call onComplete after delay
      if (index > fullText.length) {
        clearInterval(interval);

        // Optional pause before triggering next screen
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }
    }, 100); // Typing speed in milliseconds

    // Cleanup to prevent memory leaks
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100 flex flex-col items-center justify-center">
      
      {/* Typewriter Text with Glow Effect */}
      <div className="mb-6 text-3xl md:text-5xl font-mono font-bold text-center">
        <span className="text-blue-400 drop-shadow-[0_0_8px_#3b82f6]">
          {text}
        </span>
        <span className="animate-blink text-white">|</span>
      </div>

      {/* Developer-style Progress Bar */}
      <div className="w-[200px] h-[3px] bg-gray-700 rounded-full relative overflow-hidden">
        <div className="w-full h-full bg-blue-500 animate-dev-bar"></div>
      </div>

      {/* Small developer tagline */}
      <div className="mt-4 text-sm text-gray-400 font-light font-mono tracking-widest">
        compiling next-gen code & visuals...
      </div>
    </div>
  );
};
