import natoursImg from '../public/assets/projects/natours.jpg';
import forkifyImg from '../public/assets/projects/forkify.jpg';
import marvelImg from '../public/assets/projects/marvel.jpg';
import rsGarageImg from '../public/assets/projects/hero_rs.jpg';
import nasaProjectImg from '../public/assets/projects/nasaProject.jpg';
import reactEcomProjectImg from '../public/assets/projects/reactEcom.jpg';



import { v4 as uuidv4 } from 'uuid';

export const PROJECTS = [
  {
    id: uuidv4(),
    title: 'RS garage',
    backgroundImg: rsGarageImg,
    projectUrl: '/projects/rsGarage',
    link: 'https://www.retsgarage.fr/',
    githubLink: 'https://github.com/NMY0d4/MarvelQuizzForReactTraining',
    description:
      'My first application in real condition, before learning javascript I did a 6 months training via a training center by which I obtained a certificate of training developer/coder (bac+2 in France). During this training I learned the basics of the web and we learned php and the Symphony framework. We had an internship in a company of 2 months during which I built from scratch this site in symphony, I realized the model the design and all the structure from a business card. I deployed the site on ovh via fileZilla and with ssh commands.',
    technologies: [
      'symphony 6',
      'MVC structure',
      'twig (symfony template engine)',
      'authentification with forgotten password',
      'design create from scratch',
      'design with sass and bootstrap',
      'internal quote request system',
      'admin dashboard accessible for the customer',
      'using phpMyadmin',
      'database SQL with MySql',
      'deployment on OVH',
    ],
  },
  {
    id: uuidv4(),
    title: 'Forkify',
    backgroundImg: forkifyImg,
    projectUrl: '/projects/forkify',
    link: 'https://forkify-gmweb.netlify.app/',
    githubLink: 'https://github.com/NMY0d4/forkify-final-train-javascript',
    description:
      'A recipe search application in full Vanilla javascript, built in MVC model, a final application of an in-depth learning of Javascript(63 hours of videos) that helped me to understand the "behind the scene" mechanism of this incredible language. There were many other projects in this learning but I chose to highlight the last one that uses a lot of Javascript(modern) potential, which was really useful for me to enter the React world.',
    technologies: [
      'JavaScript (ES6+)',
      'Deep dive into functions',
      'CRUD with MongoDB and Mongoose',
      'the call stack',
      'hoisting, scoping',
      ' object-oriented programming',
      'the event loop, promises, async/await',
      'error handling',
      'access data from third-party APIs(AJAX calls)',
      'NPM, Parcel (module bundler)',
      ' Babel, and ES6 modules',
    ],
  },
  {
    id: uuidv4(),
    title: 'Natours',
    backgroundImg: natoursImg,
    projectUrl: '/projects/natours',
    link: 'https://gmweb-natours-trainproject.herokuapp.com/',
    githubLink:
      'https://github.com/NMY0d4/Natours-node-express-mongoDB-project',
    description:
      'A node.js application composed of an api allowing authentication and access to nature trips and various activities. This application has a role system with guides who can link with certain trips, this application also contains a rating system by users to rate their trips. There is also a system of localization on a map in real time of the different stages related to the different stays. The Front-End is rendered by the server via pug(template engine).',
    technologies: [
      'Node (with Express)',
      'MongoDB (with Mongoose)',
      'CRUD with MongoDB and Mongoose',
      'data in NoSQL (+ geospatial data)',
      'API+server-side rendered website',
      ' authentication/authorization (+password reset)',
      'Secur: encryption, sanitization, rate limiting...',
      'Server-side rendering with Pug templates',
      'includes filters, sorts, pagination...',
      'Credit card payments with Stripe',
      'Sending emails & uploading files',
    ],
  },
  {
    id: uuidv4(),
    title: 'Nasa-Project',
    backgroundImg: nasaProjectImg,
    projectUrl: '/projects/nasa',
    link: 'http://15.236.209.145:8000/',
    githubLink: 'https://github.com/NMY0d4/nasa-project',
    description:
      'A Node(express) project with view engine, a final project of an in-depth course of node.js with which I learned the operating mechanisms of node with libuv. I started with the basics of Node, then I approached advanced subjects in order to make good decisions on the architecture and the tools for my future NodeJS projects. This project is a continuation of the "natours" project to improve my knowledge of nodeJS. Deployment on the AWS platform with docker and ssh.',
    technologies: [
      'Libuv, threads, processes, event loop',
      ' building out a simple CI pipeline',
      'Asynchronous programming',
      'CommonJS vs ECMAScript (ES6) modules',
      'Working With CSV Files',
      'Model View Controller (MVC) pattern',
      'Serving React Front End (in Production)',
      'Logging Requests with Morgan',
      'Building A Data Access Layer',
      'Testing Node APIs with Jest and Supertest',
      'Using MongoDB',
      'Horizontally Scaling Databases',
      'Mapping API Data to Our Database',
    ],
  },
  {
    id: uuidv4(),
    title: 'Marvel-Quizz',
    backgroundImg: marvelImg,
    projectUrl: '/projects/marvel',
    link: 'https://marvel-quizz-react-training.web.app/',
    githubLink: 'https://github.com/NMY0d4/MarvelQuizzForReactTraining',
    description:
      'My first application in React deployed (with "fireBase"), I obviously coded a lot of small project before this application to understand the mechanism of React and I really enjoyed learning this JS library(a real pleasure), I started with the classes to then use the functions that are now mostly used. I also learned React Redux for the management of states via a store.',
    technologies: [
      'React JS (versions 16, 17, 18)',
      'React components of type Class & Function',
      'React with JavaScript ES6',
      'mastering props in React',
      'States management in a React component',
      'events in a React application',
      'route management in a React application',
      'CSS in a React application & React-Bootstrap ',
      'working with Axios',
      'manage authentication via Firebase in React',
      'Database management via Firebase Firestore',
    ],
  },
  {
    id: uuidv4(),
    title: 'reactEcommerce',
    backgroundImg: reactEcomProjectImg,
    projectUrl: '/projects/reactEcom',
    link: 'https://gmweb-myfirst-ecommerce-reactapp.netlify.app/',
    githubLink: 'https://github.com/NMY0d4/FirstEcommerceWithReact',
    description:
      'Following my React learning, an ecommerce with firebase as backend. A project in which I learned in depth the use of react-redux, a project with which I started learning typescript. This is going to be a full stack app (MERN stack), using Firebase. This application is not finished, I switched to nextJs and I am currently in the process of creating a mock eCommerce NextJs application with dashBoard which will be deployed as a project when it is finished.',
    technologies: [
      'React Router',
      'React Redux, redux Saga',
      'Asynchronous Redux',
      'Firebase',
      'Stripe API, styled-Components',
      'React Design Patterns',
      'Persistance + Session Storage',
      'State Normalization',
      'working with Axios'
    ],
  },
];
