import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

export const socialIconClasses =
  'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300';

export const socialLinks = [
  <a href='/'>
    <FaLinkedinIn />
  </a>,
  <a href='https://github.com/NMY0d4' target='_blank'>
    <FaGithub />
  </a>,
  <a href='mailto:greg.marini@hotmail.fr'>
    <AiOutlineMail />
  </a>,
  <a href='/#about'>
    <BsFillPersonFill />
  </a>,
];
