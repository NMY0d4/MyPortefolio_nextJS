import natoursImg from './public/assets/projects/natours.jpg';

export const PROJECTS = [
  {
    title: 'Natours',
    backgroundImg: natoursImg,
    projectUrl: '/projects/natours',
    link: 'https://gmweb-natours-trainproject.herokuapp.com/',
    description:
      'A node.js application composed of an api allowing authentication and access to nature trips and various activities. This application has a role system with guides who can link with certain trips, this application also contains a rating system by users to rate their trips. There is also a system of localization on a map in real time of the different stages related to the different stays. The Front-End is rendered by the server via pug(template engine).',
    technologies: [
      'Node (with Express)',
      'MongoDB (with Mongoose)',
      'CRUD operations with MongoDB and Mongoose',
      'work with data in NoSQL (including geospatial data)',
      'API and server-side rendered website',
      ' authentication and authorization (including password reset)',
      'Security: encryption, sanitization, rate limiting, etc.',
      'Server-side rendering with Pug templates',
      'includes filters, sorts, pagination, and much more',
      'Credit card payments with Stripe',
      'Sending emails & uploading files',
    ],
  },
];
