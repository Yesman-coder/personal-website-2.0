import React from "react";
import { useState } from "react";
import Project1 from "../assets/podcast-img/podcast-mock.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PodcastMock1 from "../assets/podcast-img/podcast-mock1.png";
import PodcastApproach from "../assets/podcast-img/podcast-approach.png";
import PodcastScript from "../assets/podcast-img/podcast-script.jpg";
import PodcastPersona from "../assets/podcast-img/podcast-user.jpg";
import PodcastMoodboard from "../assets/podcast-img/podcast-moodboard.png";
import PodcastSketch from "../assets/podcast-img/podcast-sketches.jpg";
import PodcastBrainstorm from "../assets/podcast-img/podcast-brainstorming.png";
import PodcastPrototypes from "../assets/podcast-img/podcast-prototypes.png";
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

function Podcast() {
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
              Podcast <br />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500">
              An exclusive podcast platform to share relevant content with
              employees
            </p>
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
                We were contacted by a banking institution for a very particular
                project. The company wants to offer its employees quality
                content they can consume on their way to and back from work. The
                idea is that this content is as entertaining as educational and
                the format they chose for that was the Podcast. They will
                arrange specialist inside the same institution to create and
                transmit tailored content that can help employees grow their
                knowledge about work-related topics or simply understand better
                their client's lifestyle.
              </p>
              {/* <!-- List --> */}
              <ul
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
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
                    Main UX designer
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
                    Main UI designer
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
                    Research Specialist
                  </span>
                </li>
              </ul>
            </div>
            <img
              className="hidden w-3/6 mb-4 rounded-lg lg:mb-0 lg:flex max-h-[625px]"
              src={PodcastMock1}
              alt="podcast mock feature"
            />
          </div>
        </div>
      </section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 bg-white">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Approach
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            For this project, I decided the approach we are going to use is the
            design thinking process that centers in the user. Even though this
            job was commissioned by our client they made emphasis that they want
            people to join, enjoy and share the content on this app. For that
            reason, we aim to create a mobile app that meets the basic user
            needs and is. to quote Adam Walker: functional, reliable, usable and
            pleasurable.
          </p>
        </div>
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex m-h-80"
          src={PodcastApproach}
          alt="design Thinking process"
        />
      </div>
      {/* <!-- End block -->
    <!-- Start block --> */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              The Research
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl dark:text-white">
              For starters we wanted to understand the final of user of our app.
              The company assured us that they were avid consumers of content in
              form of Podcast, but we wanted to double check this was the case
              and ask them if there are other forms of content they prefer to
              consume. We also wanted to deepen in other areas like what kind of
              content they usually listen to, where do they listen to and when.
              This to map out the preferences of the users and make sure our app
              covers the most important of them.
            </p>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex p-8"
              src={PodcastScript}
              alt="user interview script podcast"
            />
            <h2 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Problem Statement
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl dark:text-white">
              How might we give users an app that helps her find the best
              content for her and interact with its creators?
              <br />
              <br /> How might we offer our client a mobile app to share
              relevant content with its employees?
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              User Persona
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl dark:text-white">
              Our User Persona gathers interest of our initial research group,
              and it gives us a clear direction on who should we design for.
            </p>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex p-8"
              src={PodcastPersona}
              alt="podcast user persona"
            />
          </figure>
        </div>
      </section>
      {/* Start Ideation */}
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 bg-white items-center justify-items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img
          className="hidden mb-4 rounded-lg lg:mb-0 lg:flex max-h-[32rem] max-w-2xl"
          src={PodcastMoodboard}
          alt="podcast moodboard"
        />
        <div className="text-gray-500 sm:text-lg dark:text-gray-400 mt-0">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Moodboard
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            As main UX designer I focused in gathering as many elements online
            as I could to illustrate our client the image we wanted to give to
            his app but beyond that during a meeting I also showed some basic
            navigation wireframes we already had.
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
                First Sketches
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Going after simple and functional I created some sketches to
                show to the team to hear their input and collect their feedback.
                (Then I stained the sketch with coffee on purpose to add a layer
                of drama)
              </p>
              {/* <!-- List --> */}
              <ul
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
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
                    Juvenile and Sleek
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
                    Colorful
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
                    Simple and Functional
                  </span>
                </li>
              </ul>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={PodcastSketch}
              alt="podcast sketch"
            />
          </div>
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={PodcastBrainstorm}
              alt="high fidelity prototypes"
            />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Brain Storming
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Since the client had already defined some boundaries for the
                project the brainstorming sessions was focused on going th extra
                mile to enhance the basic functionality of the app
              </p>
              {/* <!-- List --> */}
              <ul
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
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
                    Create an app that allows employees to connect, browse,
                    store and play content.
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
                    Create a Webapp for content creator to give them more
                    possibilities to create and manage content
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
                    Create a system of appreciation (Claps) so users can show
                    the creators some love
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
                    Categorize content for better browsing experience &
                    Highlight the daily content{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End design */}
      {/* Start FLow outcome */}
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              High Fidelity Prototypes
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl ">
              The final part of the first iteration was to produce the high
              fidelity prototypes. The client only suggested minor changes that
              would be considered for the second iteration and the development
              team is currently working on the app
            </p>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex p-8"
              src={PodcastPrototypes}
              alt="high fidelity prototypes"
            />
            <h2 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              Final Outcome & Lesson
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl">
              Occupying so many important roles in a project may be very
              demanding and stressful. However, having a great team and
              understanding how the different areas connect gives a holistic
              perception about the process that makes things a little easier.
              This was the first iteration on this ongoing project and we are
              excited to see how users will interact with our product and the
              feedback they'll provide The main challenge with this project
              would be how to engage users but from the User Experience
              perspective making it very simple and useful is all we can do.
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
                    handleOpen(
                      <PodcastApproach />,
                      "Design Approach to the project"
                    )
                  }
                  alt="Approach to the project"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={PodcastApproach}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() =>
                    handleOpen(<PodcastScript />, "Interview Scripts")
                  }
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={PodcastScript}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() => handleOpen(<PodcastPersona />, "User persona")}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={PodcastPersona}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() =>
                    handleOpen(<PodcastSketch />, "First sketches")
                  }
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={PodcastSketch}
                />
                <p></p>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() => handleOpen(<PodcastMoodboard />, "MoodBoard")}
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={PodcastMoodboard}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  onClick={() =>
                    handleOpen(<PodcastPrototypes />, "Mid Fidelity prototypes")
                  }
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={PodcastPrototypes}
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
export default Podcast;
