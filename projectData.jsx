import natoursImg from './public/assets/projects/natours.jpg';

export const PROJECTS = [
  {
    title: 'Natours',
    backgroundImg: natoursImg,
    projectUrl: '/projects/natours',
    link: 'https://gmweb-natours-trainproject.herokuapp.com/',
    githubLink: 'https://github.com/NMY0d4/Natours-node-express-mongoDB-project',
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
];
