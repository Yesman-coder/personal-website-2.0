import LudotopyMock from "./assets/ludotopy-img/ludotopy-mock.png";
import LudotopyMock1 from "./assets/ludotopy-img/ludotopy-mock-1.png";
import LudotopyAffinity from "./assets/ludotopy-img/ludotopy-affinity.jpg";
import LudotopyIdeation from "./assets/ludotopy-img/ludotopy-ideation.jpg";
import LudotopyDesign from "./assets/ludotopy-img/ludotopy-design.jpg";
import LudotopyFont from "./assets/ludotopy-img/ludotopy-fonts-color.jpg";
import LudotopyFlow from "./assets/ludotopy-img/ludotopy-flow.png";
import VhealthCompetition from "./assets/vhealth-img/vhealth-competition.png";
import VhealthDashboard from "./assets/vhealth-img/vhealth-dashboard.png";
import VhealthFlow from "./assets/vhealth-img/vhealth-flow.jpg";
import VhealthMock from "./assets/vhealth-img/vhealth-mock.png";
import VhealthMock1 from "./assets/vhealth-img/vhealth-mock1.png";
import VhealthPersona from "./assets/vhealth-img/vhealth-persona.jpg";
import VhealthSurveys from "./assets/vhealth-img/vhealth-surveys.jpg";
import VhealthTest from "./assets/vhealth-img/vhealth-test.png";

const projects = [
  {
    id: 1,
    name: "Ludotopy",
    description: "A mobile app to create trivial bets about anything. ",
    images: [
      LudotopyMock,
      LudotopyAffinity,
      LudotopyDesign,
      LudotopyFlow,
      LudotopyFont,
      LudotopyIdeation,
      LudotopyMock1,
    ],
  },
  {
    id: 2,
    name: "V-Health",
    description:
      "Webapp designed to provide healthcare institutions with all the tools they need to provide online consultation",
    images: [
      VhealthCompetition,
      VhealthDashboard,
      VhealthFlow,
      VhealthMock,
      VhealthMock1,
      VhealthPersona,
      VhealthSurveys,
      VhealthTest,
    ],
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

export default projects;
