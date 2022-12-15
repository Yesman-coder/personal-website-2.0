import React from "react";
import Project1 from "../assets/ludotopy-img/ludotopy-mock.png";
import Project2 from "../assets/podcast-img/podcast-mock.png";
import Project3 from "../assets/vhealth-img/vhealth-mock.png";
import Project4 from "../assets/wanderlust-mock.png";
import Project5 from "../assets/qubits-landing.png";
import Project6 from "../assets/vip-mock.png";
import { Link } from "react-router-dom";

function Card3({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
  url,
}) {
  return (
    <div className={`rounded-lg p-6 shadow-sm bg-slate-200 ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <Link to={url}>
          <img
            className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </Link>
      </div>
      <h3 className="pt-5 text-[14px] font-normal text-gray-600 block">
        {heading}
      </h3>
      <Link to={url}>
        <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
          {description}
        </p>
      </Link>
    </div>
  );
}

function Projects() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8 mb-12">
      <Card3
        className=""
        heading="Ludotopy"
        description="A mobile app designed to place the menial bets we all have been part of and actually keep track of the results and earn money."
        thumbnailSrc={Project1}
        thumbnailAlt="Ludotopy Mock ups"
        url="/ludotopy"
      />
      <Card3
        className=""
        heading="SoundLine Podcast"
        description="An exclusive podcast platform for a company to share relevant content with their employees"
        thumbnailSrc={Project2}
        thumbnailAlt="Podcast mock ups"
        url="/podcast"
      />
      <Card3
        className=""
        heading="V-Health"
        description=" Webapp designed to provide healthcare institutions with all the tools they need to provide online consultation"
        thumbnailSrc={Project3}
        thumbnailAlt="V-health Mock ups"
        url="/vhealth"
      />
      <Card3
        className=""
        heading="Wanderlust App for solo travelers"
        description="Wanderlust offers a platform for solo travelers to connect and share experiences"
        thumbnailSrc={Project4}
        thumbnailAlt="Wanderlust Mock ups"
      />
      <Card3
        className=""
        heading="Qub-its Landing Page Design"
        description="Website for an IT consulting company"
        thumbnailSrc={Project5}
        thumbnailAlt="Qub-its website  Mock ups"
      />
      <Card3
        className=""
        heading="VIP Billionaires app"
        description="Social network for business and crazy rich people "
        thumbnailSrc={Project6}
        thumbnailAlt="VIP Mock ups"
      />
    </div>
  );
}

export default Projects;
