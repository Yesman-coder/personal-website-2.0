import React from "react";
import { useState } from "react";
import Project1 from "../assets/vhealth-img/vhealth-mock.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VhealthMock1 from "../assets/vhealth-img/vhealth-mock1.png";
import VhealthCompetition from "../assets/vhealth-img/vhealth-competition.png";
import VhealthSurveys from "../assets/vhealth-img/vhealth-surveys.jpg";
import VhealthPersona from "../assets/vhealth-img/vhealth-persona.jpg";
import VhealthFlow from "../assets/vhealth-img/vhealth-flow.jpg";
import VhealthDashboard from "../assets/vhealth-img/vhealth-dashboard.png";
import VhealthTest from "../assets/vhealth-img/vhealth-test.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Vhealth() {
  const [modalImg, setModalImg] = useState({});
  const [imgCaption, setImgCaption] = useState("");

  const [open, setOpen] = React.useState(false);
  function handleOpen(element, text) {
    setOpen(true);
    setModalImg(element.type);
    setImgCaption(text);
  }
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
              Vhealth <br />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500">
              Webapp designed to provide healthcare institutions with all the
              tools they need to provide online consultation
            </p>
            <a
              href="https://vhealth-web.vercel.app/"
              className="text-gray-500 cursor-pointer text-xl duration-300 transition hover:text-[#FA5252]"
            >
              Link to the platform
            </a>
            <p className="lg:hidden text-slate-400 ">
              On mobile the image gallery is at the bottom of the page to
              improve browsing and reading without disturbing the layout. Enjoy!
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Project1} alt="podcast" />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 justify-items-center">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Client and story
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                After covid pandemics many things in the world changed. The
                healthcare sector was perhaps one of the most affected areas
                everywhere in the planet. Thinking about this, our client
                decided to commission our team the creation of a platform that
                could be used anywhere in the world by any healthcare provider
                as a tool to offer remote, affordable and appropriate
                healthcare. Sadly, only a few months after commissioning this
                project our client passed away due to Covid. Nevertheless, we
                took the decision to embrace his will and carry on building this
                important product now under the name of V-health.
              </p>
              {/* <!-- List --> */}
              <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <h3>My Role</h3>
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    UX researcher
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    UI designer
                  </span>
                </li>
              </ul>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={VhealthMock1}
              alt="podcast mock feature"
            />
          </div>
        </div>
      </section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 bg-white">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Competition Analysis
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            As a team lead, I decided to taint the market and see the current
            offer of similar apps. Initially I realized that the costs of
            systems like the one we were trying to build was really high and
            definitely not meant for average person to use. Their target was
            almost exclusively large clinical institutions and hospitals. All
            the apps I reviewed required users to pay a premium subscription in
            order to access all the features. When I presented my findings to
            the team, we decided to stay away from that model and provide a
            complete platform that . Even though, all of them offer “unique”
            features in my analysis I discovered that it was in almost every
            case a euphemism for expensive ad-on.
          </p>
        </div>
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex m-h-80"
          src={VhealthCompetition}
          alt="design Thinking process"
        />
      </div>
      {/* <!-- End block -->
    <!-- Start block --> */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              User Interviews and Surveys
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl dark:text-white">
              I scheduled virtual interviews with over 25 users, most of them
              healthcare providers, a large part of the interviewees agreed that
              most of the existing apps in the market are very complex and hard
              to use. Given the urgency they may have sometimes, using these on
              a daily basis for their practice was cumbersome. Some others
              remarked that the app is not only difficult for the doctors, but
              patients also have problems approaching and understanding the
              interfaces. To confirm these findings, I also prepared an online
              survey for a broader group and the results were very similar
              <br /> <br />
              Teh team wanted to create a webapp that will make it simpler for
              doctors and patients to interact. It will combine measures from an
              affordable dedicated mobile device, and it will calculate and
              alert if any of the basic life index is altered. This will allow
              the doctors to make better decisions in the shortest amount of
              time.
              <br /> <br />
              Early results of surveys and interviews showed that participants
              confirmed our approach and mentioned some useful features patient
              clinical story, digital signature and digital prescriptions that
              were included in the final product. A virtual hospital for
              everyone.
            </p>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex p-8"
              src={VhealthSurveys}
              alt="Survey results"
            />
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              User Persona
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl dark:text-white">
              The user persona created to facilitate the visualization of our
              target user had to be a healthcare provider. Really committed with
              his profession beyond the monetary retribution Dr. Bruno aims to
              really have an impact and serve as many patients as he can. The
              next for us was to develop tools for him to achieve his goals.
            </p>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex p-8"
              src={VhealthPersona}
              alt="podcast user persona"
            />
            <h2 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Problem Statement
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl dark:text-white">
              -Doctors need an optimal tool to better serve his patients
              <br />
              -Patients must get proper care even when they can’t afford it
              <br />
              <br /> How might we build a web-app that help doctors and patients
              connect with each other and interact in a seamless, inexpensive,
              and effective way? way?
            </p>
          </figure>
        </div>
      </section>
      {/* Start Ideation */}
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 bg-white items-center justify-items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img
          className="hidden mb-4 rounded-lg lg:mb-0 lg:flex max-h-[32rem] max-w-2xl"
          src={VhealthFlow}
          alt="Tentative user flow"
        />
        <div className="text-gray-500 sm:text-lg dark:text-gray-400 mt-0">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            User Flow
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            As main UX designer I focused in gathering as many elements online
            as I could to illustrate our client the image we wanted to give to
            his app but beyond that I stressed the importance of putting the
            relationship patient-doctor in the center of all of our activity.
          </p>
        </div>
      </div>
      {/* End Ideation */}
      {/* Start DEsign */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                The design of the experience
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                The website design for the brand had to keep visual consistency
                and harmony with the identity concept. We needed to transmit the
                solemnity of a hospital but also let potential users quickly
                catch the message, review the benefits of the product, and
                request a Demo The web pages feature the well-balanced
                combination of airy light and deep dark backgrounds, clear
                visual hierarchy, readable fonts, and digestible information
                blocks make the website scannable and eye-pleasing. <br />
                <br />
                The website uses the sticky header to make the core links and
                cart available from any point of interaction. As lead UX
                designer of this project I put a lot of attention in the
                interactivity of each element and decided to create modular
                components shaped like cards that slightly resemble the
                annotation boards doctor use in the real world. <br />
                <br />I also aimed to reduce the number of steps required to
                achieve a goal in the page. The basic interaction between doctor
                and patient in our platform happens only after 3 clicks and this
                is a very important metric for all the team. In the case of
                doctors creating the clinical history of a patient was a very
                complex process that took 5 steps in most of the competitors
                apps. In ours we made it a joint effort between doctor and
                patient and reduce the steps to 3.
              </p>
              {/* <!-- List --> */}
              <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Reduce Steps to achieve goals
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Facilitate the contact patient-doctor and viceversa
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Separated components to improve performance
                  </span>
                </li>
              </ul>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={VhealthDashboard}
              alt="vhealth login screen"
            />
          </div>
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={VhealthTest}
              alt="high fidelity prototypes"
            />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Testing With Users
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                During the initial test users were pleased with the interface of
                the product. Most of them found it attractive and inviting.
                Nevertheless a percentage of the testers thought that the design
                was too juvenile and not professional. As UX lead I recommended
                the managers to perform mores tests on the subject to find out
                if this could affect users perception in the future. The Testing
                was reduced to the most painful process pointed out by the
                doctors we interview during the exploratory phase.
              </p>
              {/* <!-- List --> */}
              <ul className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Create an online service patients can effectively access
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Create Store and Retrieve a patients medical records
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Set a virtual appointment
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Attend a virtual appointment and create prescriptions after
                    it.
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                We tested the first version of our product with 5 users. The
                results of the test showed doctors found our app not only useful
                but some even refer to it as "way better than what we have right
                now". <br />
                However, a large percentage also found that the app would need
                some modifications in order to meet the demands of their
                specialties.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End design */}
      {/* Start FLow outcome */}
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <h2 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              Final Outcome & Lesson
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl">
              As a platform that aims to earn a spot in the healthcare sector
              Vhealth has still a long way to go. Nevertheless, In this first
              iteration the focus was almost entirely on the user giving it a
              very humanistic approach that can make vhealth the new standard
              for clinical activities. I, as the lead UX designer consider that
              the biggest obstacle to come is to tailor the experience of
              Vhealth for each and everyone of the existing specialties in
              medicine. As a side note, one of the biggest lessons I learned on
              this project is to never make assumptions on behalf of the users.
              Always have a hypothesis test and validate the results of your
              tests.
            </p>
          </figure>
        </div>
      </section>
      {/* End flow outcome */}\{/* Start Mobile Gallery */}
      <section className="overflow-hidden text-gray-700 lg:hidden  py-8 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <h2 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            Mobile Image Gallery
          </h2>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/3">
              <div className="w-full h-auto p-1 md:p-2">
                <img
                  onClick={() =>
                    handleOpen(<VhealthCompetition />, "Competition analysis")
                  }
                  alt="Approach to the project"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={VhealthCompetition}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() =>
                    handleOpen(<VhealthSurveys />, "Survey results")
                  }
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={VhealthSurveys}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() => handleOpen(<VhealthPersona />, "User persona")}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={VhealthPersona}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() =>
                    handleOpen(<VhealthDashboard />, "First sketches")
                  }
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={VhealthDashboard}
                />
                <p></p>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() => handleOpen(<VhealthFlow />, "User flow")}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={VhealthFlow}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() =>
                    handleOpen(<VhealthTest />, "Mid Fidelity prototypes")
                  }
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={VhealthTest}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={modalImg}
          />
          <p className="text-slate-400">{imgCaption}</p>
        </Box>
      </Modal>
      {/* End Mobile Gallery */}
      <Footer />
    </>
  );
}
export default Vhealth;
