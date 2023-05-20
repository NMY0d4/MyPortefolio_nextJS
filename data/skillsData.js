import htmlImg from '../public/assets/skills/html.png';
import cssImg from '../public/assets/skills/css.png';
import javascriptImg from '../public/assets/skills/javascript.png';
import mongodbImg from '../public/assets/skills/mongo.png';
import reactImg from '../public/assets/skills/react.png';
import tailwindImg from '../public/assets/skills/tailwind.png';
import nextJsImg from '../public/assets/skills/nextjs.png';
import nodeJsImg from '../public/assets/skills/node.png';
import gitHubJsImg from '../public/assets/skills/github1.png';
import dockerImg from '../public/assets/skills/docker.png';

import { v4 as uuidv4 } from 'uuid';

export const SKILLS = [
  { id: uuidv4(), title: 'HTML5', img: htmlImg },
  { id: uuidv4(), title: 'CSS3', img: cssImg },
  { id: uuidv4(), title: 'Javascript', img: javascriptImg },
  { id: uuidv4(), title: 'MongoDB', img: mongodbImg },
  { id: uuidv4(), title: 'React', img: reactImg },
  { id: uuidv4(), title: 'Tailwind', img: tailwindImg },
  { id: uuidv4(), title: 'Next.js', img: nextJsImg },
  { id: uuidv4(), title: 'Node.js', img: nodeJsImg },
  { id: uuidv4(), title: 'GitHub', img: gitHubJsImg },
  { id: uuidv4(), title: 'Docker', img: dockerImg },

];
