import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import gmLogo from '../../public/assets/mesLogos/gmLogo.png';
import theme from '../../tailwind.config.js';
import { v4 as uuidv4 } from 'uuid';
import { socialIconClasses, socialLinks } from '../ui/socialIcons';
import { useRouter } from 'next/router';
import { navLinks } from '../ui/utilClasses';
import { useSession, signOut } from 'next-auth/react';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import Notification from '../ui/Notification';
import NotificationContext from '../../store/notification-context';

function NavBar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('nbgColor');
  const [linkColor, setLinkColor] = useState('navLinkColor');
  const [positionRelative, setPositionRelative] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  const { nbgColor, navLinkColor } = theme.theme.extend.colors;

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (router.asPath.startsWith('/projects/')) {
      setNavBg('transparent');
      setLinkColor(nbgColor);
      setPositionRelative(true);
    } else {
      setPositionRelative(false);
      setNavBg('nbgColor');
      setLinkColor(navLinkColor);
    }
  }, [router]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && nav) {
        setNav(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [nav]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={`${
        positionRelative ? 'relative' : 'fixed'
      } w-screen h-auto bg-${navBg} ${
        shadow ? 'shadow-xl' : ''
      } z-[100] ease-in-out duration-300`}
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src={gmLogo} alt='/' width='60' height='50' />
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className={`relative hidden md:flex`}
          >
            {session && (
              <li onClick={signOut} className='b-icon-size hover:text-primary'>
                <BsFillPersonCheckFill />
              </li>
            )}
            {navLinks.map(({ to, children }) => (
              <Link key={uuidv4()} href={to}>
                <li
                  className={`ml-10 text-sm uppercase hover:border-b hover:border-primary`}
                >
                  {children}
                </li>
              </Link>
            ))}
          </ul>
          <div
            onClick={handleNav}
            style={{ color: `${linkColor}` }}
            className='md:hidden'
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      {/* Menu gauche petit écran */}
      <div
        className={
          nav
            ? 'md:hidden fixed z-50 left-0 top-0 w-full h-full bg-black/70'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-full overflow-scroll bg-nbgColor p-6 ease-in duration-500'
              : 'fixed left-[-140%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={gmLogo} width='55' height='45' alt='/' />
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
          <div className='py-2 flex flex-col'>
            <ul className='uppercase'>
              {navLinks.map(({ to, children }) => (
                <Link key={uuidv4()} href={to}>
                  <li
                    onClick={() => setNav(false)}
                    className='py-4 text-sm hover:text-primary'
                  >
                    {children}
                  </li>
                </Link>
              ))}
              {session && (
                <li
                  onClick={signOut}
                  className='b-icon-size hover:text-primary'
                >
                  <BsFillPersonCheckFill />
                </li>
              )}
              <div className='mt-40'>
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
            </ul>
          </div>
        </div>
      </div>
      {/* Fin du menu petit écran */}
    </div>
  );
}

export default NavBar;
