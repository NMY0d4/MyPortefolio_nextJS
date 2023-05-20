import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { SiUdemy } from 'react-icons/si';

export const socialIconClasses =
  'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300';

export const socialLinks = [
  <a
    href='https://www.linkedin.com/in/gr%C3%A9gory-marini-b71493136/'
    target='_blank'
  >
    <FaLinkedinIn />
  </a>,
  <a href='https://github.com/NMY0d4' target='_blank'>
    <FaGithub />
  </a>,
  <a href='mailto:greg.marini@hotmail.fr'>
    <AiOutlineMail />
  </a>,
  <a href='https://www.udemy.com/user/marini-gregory/' target='_blank'>
    <SiUdemy />
  </a>,
];
