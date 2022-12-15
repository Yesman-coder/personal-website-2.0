import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import projects from "../data";

function Ludotopy() {
  const index = 0;
  const { name, description, images } = projects[index];

  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
              {name}
              <br />
              my first project ever
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500">
              {description}
              Although inexperience can be seen all over this project, this is
              what opened the gates to UX/UI design for me. With this project I
              started considering users, their needs, and designing products
              that might be useful to them.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={images[0]} alt={description} />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Client and story
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Ludotopy started a joke of 4 recently graduated computer
                programming students. They used to bet on silly things all the
                time and decided to build a very simple app that would allow
                them to place whatever bet they wanted no matter how silly,
                collect money in the form of app tokens and keep a record of all
                those bets. There's an ocean of apps to bet on almost every game
                in the face of earth. But what if I want to bet my friend that
                he cannot drink that tall glass of milk (*wink) in five seconds?
                Enter Ludotopy, a mobile app designed to place the menial bets
                we all have been part of and actually keep track of the results
                and earn money. The purpose of the app was clear but the way
                this would work wasn't. As UX lead designer one of my main
                challenges would be to define how this interaction would take
                place inside the app environment.
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
                    An app to place menial bets easily
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
                    It should be able to arbitrate between users
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
                    It should work with real money
                  </span>
                </li>
              </ul>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={images[6]}
              alt={description}
            />
          </div>
        </div>
      </section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 bg-white">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Research: User Affinity
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            Given this was a project to finish a coding bootcamp, the time to
            perform interviews and extensive research was very short. So, I
            decided the best way to collect input was to run a very simple
            questionnaire among our fellow students to determine the viability
            of the project, their expectations and how they interact with
            similar apps. Then I filtered all the comments by relevance and
            sorted them by similarity to give those groups of comments a name
            that would later define an area of interest during the development
            process.
          </p>
        </div>
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src={images[1]}
          alt={description}
        />
      </div>
      {/* <!-- End block -->
    <!-- Start block --> */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              The Problem
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl dark:text-white">
              Betting has always been very popular throughout human history.
              However, this activity is always related to endless problems that
              can be reduced to one single issue TRUST. With the birth of the
              internet, betting has taken new dimensions and yet the problem
              remains the same how can you be sure that your bet is going to
              happen in a safe environment and that your opponent will actually
              accept its defeat?
            </p>
            <h2 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Problem Statement
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl dark:text-white">
              How might we give users an app that allows them to place any bet
              they like and collect money upon winning such bet?
              <br />
              <br /> How might we create a trustable environment to exchange
              value and information? -How might we deliver a fun app that is
              easy to use and allows users to follow other bets?
            </p>
          </figure>
        </div>
      </section>

      {/* Start Ideation */}
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 bg-white items-center justify-items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img
          className="hidden mb-4 rounded-lg lg:mb-0 lg:flex max-h-[32rem] max-w-2xl"
          src={images[5]}
          alt="ludotopy ideation"
        />
        <div className="text-gray-500 sm:text-lg dark:text-gray-400 mt-0">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Ideation Process
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            The ideation process although it may seem very simplistic and easy
            in reality took longer than expected because we wanted users to
            trust the platform. <br />
            Defining the digital bets was not very hard and the system to award
            the token to the winner was very clear since the beginning.
            <br />
            Now the real challenge here was to answer the question:{" "}
            <strong>How do I know I can trust the other user? </strong> For that
            my suggestion was to develop a reputation system inspired on Mercado
            Libre an online buy and sell platform. Also I proposed to add a
            second layer of security by creating the figure of the{" "}
            <strong>JUDGE</strong>. Someone completely outside the bet that
            could impartially rule and define a winner for a small percentage of
            the bet.
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
                Moodboard
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                The clients wanted a playful aesthetic, something similar to
                video games for children look. The client and I brainstormed a
                mood board to further conceptualize a vision for the products.
                Therefore, I came up with a brand design that is fun, simple,
                and almost child-like. We decided to use very simplistic modular
                designs that resemble poker cards, and the app tokens are a
                visual representation of casino chips. The final aim was to
                build something.
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
                    Fresh
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
                    Dynamic and modern
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
                    Elegant
                  </span>
                </li>
              </ul>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={images[2]}
              alt="ludotopy design"
            />
          </div>
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={images[4]}
              alt="ludotopy fonts and colors"
            />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Font and Colors
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                In order to give it a look that conveys elegance and
                profitableness we choose a color palette based on the green of
                dollar bills and a tone of golden. The font selected was a
                sans-serif font compatible with mobile devices called Overpass.
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
                    Overpass font to convey simplicity and elegance
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
                    Green tone to represent Money
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
                    Tone of yellow to portrait gold
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
              The Final Flow
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl ">
              The most important part of the project from my perspective was
              defining the flow from placing a bet to deciding the winner. The
              clients were stuck here without being able to decide how to award
              the winner the money transparently. To solve this problem, my
              proposal of a JUDGE to rule the outcome of a bet came in very
              handy.
            </p>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex p-8"
              src={images[3]}
              alt="ludotopy fonts and colors"
            />
            <h2 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              Final Outcome & Lesson
            </h2>
            <p className="text-xl font-light text-gray-900 md:text-2xl">
              The main challenge of the app is without a doubt, security. During
              the first iteration users stated they would not feel comfortable
              putting real money in a new app. Nevertheless, the systems I
              designed for reputation and to add a judge to the bets made a huge
              difference in that perception. Besides that, early users found the
              app very amusing and really quick to use. The clients even got an
              offer from someone to buy this app right on the spot, but they
              decided to reject it.
            </p>
          </figure>
        </div>
      </section>
      {/* End flow outcome */}
      <Footer />
    </>
  );
}
export default Ludotopy;
