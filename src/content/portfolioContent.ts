import projectQuizMaker from "../assets/project-quizmaker.png";
import projectNomDotCom from "../assets/project-nomdotcom.png";
import projectNhlApi from "../assets/project-nhlschedule.png";

const portfolioContent = [
  // NHL Api
  {
    title: "NHL Schedule",
    date: "September 2023",
    description: "View the NHL game schedule and scores",
    deployedUrl: "https://markerpathis.github.io/nhl-api/",
    githubUrl: "https://github.com/markerpathis/nhl-api",
    image: projectNhlApi,
  },
  // Nom Dot Com
  {
    title: "Nom Dot Com",
    date: "May 2023",
    description: "A recipe app. Save, edit, and search for recipes",
    deployedUrl: "https://nomdotcom.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/nom-dot-com",
    image: projectNomDotCom,
  },
  // Project 3
  {
    title: "Quiz Maker",
    date: "March 2023",
    description: "Group Project. Create quizzes and assign them to other users.",
    deployedUrl: "http://quizmaker-app.herokuapp.com/",
    githubUrl: "https://github.com/TheBluWiz/quizmaker",
    image: projectQuizMaker,
  },
];

export default portfolioContent;
