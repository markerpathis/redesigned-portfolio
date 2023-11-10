import projectImageDND from "../assets/project-newdnd.png";
import projectImageMovie from "../assets/project-moviemoodboard.png";
import projectJATE from "../assets/project-jate.png";
import projectCodeOnion from "../assets/project-codeonion.png";
import projectNoteTaker from "../assets/project-notetaker.png";
import projectScheduler from "../assets/project-scheduler.png";
import projectQuizMaker from "../assets/project-quizmaker.png";
import projectEmployeeDirectory from "../assets/project-employeedirectory.png";
import projectNomDotCom from "../assets/project-nomdotcom.png";
import projectNhlApi from "../assets/project-nhlschedule.png";

const portfolioContent = [
  // NHL Api
  {
    title: "NHL Schedule",
    date: "September 2023",
    description: "This React app allows users to view the NHL game schedule and scores",
    deployedUrl: "https://markerpathis.github.io/nhl-api/",
    githubUrl: "https://github.com/markerpathis/nhl-api",
    image: projectNhlApi,
  },
  // Nom Dot Com
  {
    title: "Nom Dot Com",
    date: "May 2023",
    description: "This React app allows users to save, edit, and search for recipes",
    deployedUrl: "https://nomdotcom.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/nom-dot-com",
    image: projectNomDotCom,
  },
  // Employeee Directory
  {
    title: "React Employee Directory",
    date: "April 2023",
    description: "This React app is a mock employee directory, which allows the user to view employee information, such as their contact details, dob, and photo.",
    deployedUrl: "https://markerpathis.github.io/react-employee-directory/",
    githubUrl: "https://github.com/markerpathis/react-employee-directory",
    image: projectEmployeeDirectory,
  },
  // Project 3
  {
    title: "Group Project 3 (Quiz Maker)",
    date: "March 2023",
    description: "Create multi-question quizzes and assign them to other users. Please note that you need to create an account to create a quiz.",
    deployedUrl: "http://quizmaker-app.herokuapp.com/",
    githubUrl: "https://github.com/TheBluWiz/quizmaker",
    image: projectQuizMaker,
  },
  // Project 2
  {
    title: "Group Project 2 (New DND)",
    date: "January 2023",
    description: "Dungeon crawler game, which is deployed on Heroku. Please note that you need to create an account to play the game.",
    deployedUrl: "https://new-dnd7.herokuapp.com/",
    githubUrl: "https://github.com/deafboi6/newDND",
    image: projectImageDND,
  },
  // Project 1
  {
    title: "Group Project 1 (Movie Moodboard)",
    date: "November 2022",
    description: "Users can search for movies or TV shows based on genre, using the TMDB and OMDB APIs.",
    deployedUrl: "https://abbeydoyle.github.io/movie-moodboard/",
    githubUrl: "https://github.com/abbeydoyle/movie-moodboard",
    image: projectImageMovie,
  },
  // PWA Text Editor
  {
    title: "PWA: Text Editor",
    date: "February 2023",
    description: "Progressive web app text editor that runs in the browser, features data persistence, and is able to be installed.",
    deployedUrl: "https://pwa-text-editor-markerpathis.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/progressive-webapp-text-editor",
    image: projectJATE,
  },
  // MVC Tech Blog
  {
    title: "MVC Tech Blog (Code Onion)",
    date: "January 2023",
    description:
      "CMS-style blog site where users can create accounts, write blog posts for all users to see, and add comments to other blog post. Users can edit or delete their previous posts via their dashboard.",
    deployedUrl: "https://code-onion.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/mvc-tech-blog",
    image: projectCodeOnion,
  },
  // Express JS Note Taker
  {
    title: "Express JS Note Taker",
    date: "December 2022",
    description: "Users can write and save notes. This application uses an Express.js back-end and saves and retrieves data from a JSON file.",
    deployedUrl: "https://note-taker-markerpathis.herokuapp.com/",
    githubUrl: "https://github.com/markerpathis/express-js-note-taker",
    image: projectNoteTaker,
  },
  // Work Day Scheduler
  {
    title: "Work Day Scheduler",
    date: "October 2022",
    description: "Users can save events or tasks for each hour of the day to local storage. The textareas have different background colors depending on the current time vs each time block.",
    deployedUrl: "https://markerpathis.github.io/work-day-scheduler/",
    githubUrl: "https://github.com/markerpathis/work-day-scheduler",
    image: projectScheduler,
  },
];

export default portfolioContent;
