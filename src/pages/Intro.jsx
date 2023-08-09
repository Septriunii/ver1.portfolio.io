import { useState, useEffect } from "react";
import SlideshowImage from "../components/SlideshowImage";

function Intro() {
  const [showText, setShowText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setShowText(true);
  }, []);

  useEffect(() => {
    setShowText(true);

    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000); // Hide the line after 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div id="intro">
      <div className="w-full h-[33rem] flex flex-col-reverse md:flex-row mt-10 md:mt-0">
        <div className="h-full w-full p-2 pt-14 lg:pl-10">
          <p
            className={`text-sm md:text-base lg:text-lg font-light font_theme mb-3 text-orange-600 Hi italic first-letter: left-fade-in ${
              isVisible ? "active" : ""
            }`}
          >
            Hi I am
          </p>
          <div>
            <div className="flex flex-row">
              <p className="text-4xl mb-2 font-bold md:text-5xl lg:text-7xl z-40 shrink typing-effect ">
                Anthony<span className="text-orange-600">Alabado</span>
              </p>
              {showText && <h1 className="md:text-6xl cursor-blink ">|</h1>}
            </div>

            <p
              className={`text-lg mb-4 md:text-xl lg:mb-8 font-bold lg:text-2xl text-opacity-40 opacity-40 italic above-fade-in flex ${
                isVisible ? "active" : ""
              }`}
            >
              I am a passionate and dedicated web developer focusing on frontend
              development.
            </p>
            <p
              className={`md:mt-10 text-xs mb-10 text-justify leading-5 md:leading-7 md:indent-0 md:text-sm lg:text-base font-light opacity-90 font_theme indent-4
            fade-in ${isVisible ? "active" : ""}`}
            >
              I have a keen eye for design and I'm skilled in{" "}
              <span>graphics design</span>, applying fundamental design
              principles to create visually appealing and user-friendly
              interfaces. I am well-versed in{" "}
              <span>web development architecture</span> and have a thorough
              understanding of how to integrate frontend interfaces with{" "}
              <span>backend systems</span>.
            </p>
          </div>
          <button
            className={`w-full md:w-56 text-orange-600 font-semibold place-self-center md:place-self-start left-fade-in ${
              isVisible ? "active" : ""
            }`}
            onClick={() =>
              window.open("/test1.github.io/src/assets/resume.pdf", "_blank")
            }
          >
            Check out my resume
          </button>
        </div>

        <div
          className={` h-56 w-full justify-center  md:h-full  lg:w-[35%] md:w-[40%] p-1 shrink-0 flex md:mt-0 right-fade-in ${
            isVisible ? "active" : ""
          }`}
        >
          <div className="w-56 md:w-full lg:h-96 md:h-[60%] md:items-start  md:justify-end flex md:mt-10">
            <div className="h-full w-full md:place-items-end lg:w-[23rem] lg:h-[23rem] ">
              <div className="flex justify-center items-center w-full h-full relative ">
                <div className="h-[85%] w-[85%] flex items-center border-orange-600 rounded-tl-3xl rounded-br-3xl  border-2 z-30 absolute"></div>
                <div className="h-14 w-14 md:h-16 md:w-16 lg:h-24 lg:w-24 bg-orange-700 absolute rounded-full -left-2 md:left-1 top-12 -z-40 opacity-90 "></div>
                <div className="h-14 w-14 md:h-16 md:w-16 lg:h-24 lg:w-24 bg-orange-800 absolute rounded-full right-12 -bottom-1 z-40"></div>
                <SlideshowImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
