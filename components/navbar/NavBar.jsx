import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import gmLogo from '../../public/assets/mesLogos/gmLogo.png';

import { v4 as uuidv4 } from 'uuid';
import { socialIconClasses, socialLinks } from '../ui/socialIcons';

function NavBar() {
  const [nav, setNav] = useState(false);

  const navLinks = [
    {
      to: '/',
      children: 'Home',
    },
    {
      to: '/',
      children: 'About',
    },
    {
      to: '/contact',
      children: 'Projects',
    },
    {
      to: '/',
      children: 'Skills',
    },
    {
      to: '/',
      children: 'Contact',
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && nav) {
        setNav(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [nav]);

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src={gmLogo} alt='/' width='60' height='60' />
        <div>
          <ul className='hidden md:flex'>
            {navLinks.map(({ to, children }) => (
              <Link key={uuidv4()} href={to}>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  {children}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* Menu gauche petit écran */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={gmLogo} width='50' height='50' alt='/' />
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4 text-center'>
              <p className='w-[85%] md:[90%] py-4'>
                I'm ready to build incredible things with YOU...
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {navLinks.map(({ to, children }) => (
                <Link key={uuidv4()} href={to}>
                  <li className='py-4 text-sm'>{children}</li>
                </Link>
              ))}
            </ul>

            <div className='pt-40'>
              <p className='uppercase tracking-widest text-primary'>
                Let's connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                {socialLinks.map((icon) => (
                  <div
                    key={uuidv4()}
                    className={`${socialIconClasses} .m-icon-size`}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin du menu petit écran */}
    </div>
  );
}

export default NavBar;
