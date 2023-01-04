import React from "react";
import ProfilePic from "../assets/profile_pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {
  return (
    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#FF4D47]">
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Journalist</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Graduated from the prestigious UCAB In Caracas, Venezuela as a
                  journalist +12 years of experience
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#FF4D47]">
                  <i className="fas fa-pen-nib"></i>
                </div>
                <h6 className="text-xl font-semibold">UX Designer</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  +4 years creating products that give meaningful and relevant
                  experiences to users
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#FF4D47]">
                  <i className="fas fa-user"></i>
                </div>
                <h6 className="text-xl font-semibold">Front End Dev</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  +3 years of writing and executing code in HTML, CSS,
                  Javascript and React
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg shadow-slate-400 hover:shadow-orange-200"
                src={ProfilePic}
              />
            </div>
            <div className="w-full md:w-5/12">
              <div className="">
                <h3 className="text-3xl font-semibold text-white mt-4">
                  About Me
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  For over twelve years, I was a journalist and a producer in a
                  convulsed Venezuela. My experience involved writing feature
                  articles and content creation for Media Giants such as CNN
                  International, The BBC, and The Times of London. The collision
                  with the authoritarian regime in power was inevitable. My job
                  got too dangerous and stressful and by then my daughter
                  Isabella was born. Using my exceptional communication skills,
                  I took advantage on my ability to carry out thorough research
                  and analysis. This added to my experience in HTML, CSS,
                  JavaScript, Python, and other programming languages have made
                  me an overachiever <strong>UX/UI designer</strong> who is not
                  afraid to face weaknesses and gives his best to accomplish his
                  goals. I completed my tool belt studying and becoming
                  proficient within programs such as Photoshop, Illustrator,
                  Whimsical and Figma.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-[#FF4D47] mr-3">
                          <i className="fas fa-heart text-white"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Father of two in love with my wife
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-[#FF4D47] mr-3">
                          <i className="fas fa-check text-white"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Wildly Creative</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-[#FF4D47] mr-3">
                          <i className="far fa-user text-white"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Empathetic and Human</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
