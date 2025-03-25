import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { TfiAngleDown } from "react-icons/tfi";
import { TbClick } from "react-icons/tb";

import { PiMouseScroll } from "react-icons/pi";
import gsap from "gsap";
import Navbar from "./components/Nave_bar";
import Footer from "./components/Footer";
import ModernImageSlider from "./components/Image_slider";
import AboutPage from "./components/About";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);
  const scrollContainer = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const scrollTextRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => locomotiveScroll.destroy();
  }, []);

  useEffect(() => {
    // GSAP animations remain largely the same
    gsap.to(titleRef.current, { opacity: 1, duration: 4, ease: "power2.inOut" });
    gsap.to(descRef.current, { opacity: 1, duration: 4, ease: "power2.inOut" });
    gsap.to(scrollTextRef.current, { opacity: 1, duration: 2, ease: "power2.inOut" });

    gsap.fromTo(heroTitleRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.8)", stagger: 0.2 }
    );

    gsap.fromTo(heroTextRef.current,
      { opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", filter: "blur(10px)" },
      { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", filter: "blur(0px)", duration: 1.2, delay: 0.5, ease: "power4.out" }
    );

    const handleClick = (e) => {
      setShowCanvas((prev) => {
        if (!prev && growingSpan.current) {
          gsap.set(growingSpan.current, { top: e.clientY, left: e.clientX });
          gsap.to("body", { color: "#000", backgroundColor: "#fd2c2a", duration: 1.2, ease: "power2.inOut" });
          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => gsap.set(growingSpan.current, { scale: 0, clearProps: "all" }),
          });
        } else {
          gsap.to("body", { color: "#fff", backgroundColor: "#000", duration: 1.2, ease: "power2.inOut" });
        }
        return !prev;
      });
    };

    const headingElement = headingRef.current;
    if (headingElement) {
      headingElement.addEventListener("click", handleClick);
    }

    return () => {
      if (headingElement) headingElement.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={scrollContainer} className="min-h-screen w-full relative overflow-hidden font-[Helvetica_Now_Display]">
      <span ref={growingSpan} className="growing shadow rounded-full bg-[#fd2c2a] fixed top-[-20px] left-[-20px] w-5 h-5 pointer-events-none"></span>

      {showCanvas && data[1].map((canvasDetails, index) => (
        <Canvas key={index} details={canvasDetails} />
      ))}

      <div className="w-full h-full">
        <Navbar />

        <div className="textcontainer h-auto w-full px-4 sm:px-6 md:px-[10%] lg:px-[20%] md:mt-10 mt-20 ">
          <div className="text w-full md:w-[60%] lg:w-[50%]">
            <h3 ref={heroTitleRef} className="text-2xl sm:text-3xl md:text-4xl pt-6 md:pt-10 leading-[1.2] opacity-0 translate-y-8">
              At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
            </h3>
            <p ref={heroTextRef} className="text-base sm:text-lg w-full md:w-[80%] mt-4 font-normal opacity-0 translate-y-8">
              We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional.
            </p>
            <p ref={scrollTextRef} className=" flex items-center  text-sm sm:text-md mt-6 md:mt-10 font-semibold opacity-0 translate-y-8">Scroll <PiMouseScroll /></p>

            <div className=" md:hidden  flex items-center justify-center gap-2 absolute right-2 translate-y-2 md:right-32 ">
              <span className=" text-sm sm:text-md font-semibold ">Click here</span>
              <TbClick className=" animate-bounce text-base font-bold" />
            </div>

          </div>
        </div>

        <div ref={headingRef} className="text-transparent bg-clip-text bg-[url('https://images.unsplash.com/photo-1508248073176-8032d6408cb1?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] text-[3.6rem] sm:text-[5rem] md:text-[8rem] lg:text-[13.3rem] font-normal tracking-tight leading-none pt-10 md:pt-20 relative group cursor-pointer px-4">
          Thirtysixstudio
          <div className="absolute  md:block hidden -top-1 md:-top- left-1/2 transform -translate-x-1/2 opacity-0     group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className="bg-[#ffffff] px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center gap-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="tracking-normal  text-base md:text-xl font-medium text-red-600 whitespace-nowrap">Click me</span>
              <TfiAngleDown className=" text-black text-base font-bold" />
            </div>

          </div>
        </div>

        <div className="w-full relative min-h-[50vh] md:h-[70vh] mt-16 md:mt-28 px-4 sm:px-6 md:px-10">
          {showCanvas && data[5].map((canvasDetails, index) => (
            <Canvas key={index} details={canvasDetails} />
          ))}
          <h1 ref={titleRef} className="text-4xl sm:text-6xl md:text-8xl tracking-tighter opacity-0">about the brand</h1>
          <p ref={descRef} className="text-xl sm:text-2xl md:text-4xl leading-[1.8] w-full md:w-[80%] mt-5 font-light opacity-0">
            We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional.
          </p>
        </div>

        <div className="h-auto w-full">
          <ModernImageSlider />

          <div className="h-auto w-full relative">
            {showCanvas && data[0].map((canvasDetails, index) => (
              <Canvas key={index} details={canvasDetails} />
            ))}
            <AboutPage />

            <div className="h-auto w-full">
              {showCanvas && data[9].map((canvasDetails, index) => (
                <Canvas key={index} details={canvasDetails} />
              ))}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;