import React from "react";
import HeroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="">
              <h1 className="text-uppercase text-white text-4xl mb-4 font-bold">
                I'm Yesman Utrera
              </h1>
              <h5 className=" text-white text-2xl mb-4">
                UX Designer/Front end developer
              </h5>
              {/* <p className="mt-4 text-lg text-gray-300">
                A Professional Problem Solver based in Caracas-Venezuela. With 4
                years of experience in the IT world.
              </p> */}
              <button className="bg-[#FF4D47] hover:bg-transparent hover:border hover:border-[#FF4D47] text-white font-bold py-2 px-4 rounded mt-6">
                <a
                  href="./assets/yesman-utrera-cv.pdf"
                  download=""
                  className=""
                >
                  Download my CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
