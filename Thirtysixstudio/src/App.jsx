import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
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
    // Initialize LocomotiveScroll with proper options
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
    });

    // Cleanup LocomotiveScroll on unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  useEffect(() => {

    // to animate the title and description
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 4,
      ease: "power2.inOut",
    });
    // to animate the description
    gsap.to(descRef.current, {
      opacity: 4,
      duration: 4,
      ease: "power2.inOut",
    });

    // to animate the scroll text
    gsap.to(scrollTextRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
    });

    // to animate the hero title and text
    gsap.fromTo(heroTitleRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.8)",
        stagger: 0.2
      }
    );

    // to animate the hero text
    gsap.fromTo(heroTextRef.current,
      {
        opacity: 0,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        filter: "blur(0px)",
        duration: 1.2,
        delay: 0.5,
        ease: "power4.out"
      }
    );


    // to handle the click event && to animate the growing span
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          // Ensure growingSpan element exists
          if (growingSpan.current) {
            gsap.set(growingSpan.current, {
              top: e.clientY,
              left: e.clientX,
            });

            gsap.to("body", {
              color: "#000",
              backgroundColor: "#fd2c2a",
              duration: 1.2,
              ease: "power2.inOut",
            });

            gsap.to(growingSpan.current, {
              scale: 1000,
              duration: 2,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.set(growingSpan.current, {
                  scale: 0,
                  clearProps: "all",
                });
              },
            });
          }
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;

      });
    };

    const headingElement = headingRef.current;

    // Check if the heading element exists before adding the event listener
    if (headingElement) {
      headingElement.addEventListener("click", handleClick);
    }

    // Clean up event listener on unmount
    return () => {
      if (headingElement) {
        headingElement.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      {/* to animate the growing span */}
      <span
        ref={growingSpan}
        className="growing shadow rounded-full  bg-[#fd2c2a] fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      {/* to animate the scroll container */}
      <div
        ref={scrollContainer}
        className="h-screen w-full relative font-[Helvetica_Now_Display]"
      >
        {/* to iterate over the first page */}
        {showCanvas &&
          data[1].map((canvasDetails, index) => (
            <Canvas key={index} details={canvasDetails} />
          ))}

        <div className="w-full">
          <Navbar />

          {/* to animate the hero text container */}
          <div className="textcontainer h-auto w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 ref={heroTitleRef} className="text-4xl pt-10 leading-[1.2] opacity-0 translate-y-8">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p ref={heroTextRef} className="text-lg w-[80%] mt-4 font-normal opacity-0 translate-y-8">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both beautiful and functional.
              </p>
              <p ref={scrollTextRef} className="text-md mt-10 font-semibold opacity-0 translate-y-8">Scroll</p>
            </div>
          </div>

          {/* to add the clickable element */}
          <div
            ref={headingRef}
            className="text-[8rem] md:text-[13.3rem] font-normal tracking-tight leading-none pt-20 relative group cursor-pointer"
          >
            Thirtysixstudio

            {/* to animate the hover element */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <div className="bg-[#ffffff] px-6 py-3 rounded-full flex items-center gap-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className=" tracking-normal text-xl font-medium text-red-600 whitespace-nowrap">Click me</span>
                <svg
                  className="w-6 h-6 text-red-600 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </div>
            </div>
          </div>


          {/* to add the about page */}
          <div className="w-full relative h-[70vh] mt-28 px-10">
            {showCanvas &&
              data[2].map((canvasDetails, index) => (
                <Canvas key={index} details={canvasDetails} />
              ))}
            <h1 ref={titleRef} className="text-8xl tracking-tighter opacity-0">about the brand</h1>
            <p ref={descRef} className="text-4xl leading-[1.8] w-[80%] mt-5 font-light opacity-0">
              We are a team of designers, developers, and strategists who are passionate about creating digital experiences that are both beautiful and functional.
            </p>

          </div>

          {/* to add the image slider */}
          <div className="h-auto w-full">
            <ModernImageSlider />

            {/* to add the about page */}
            <div className="h-aouto w-full relative">
              {showCanvas &&
                data[0].map((canvasDetails, index) => (
                  <Canvas key={index} details={canvasDetails} />
                ))}
              <AboutPage />

              {/* to add the footer */}
              <div className="h-auto w-full">
                {showCanvas &&
                  data[9].map((canvasDetails, index) => (
                    <Canvas key={index} details={canvasDetails} />
                  ))}
                <Footer />
              </div>
            </div>

          </div>

          <br />
          <br />


        </div>
      </div>


    </>
  );
}

export default App;
