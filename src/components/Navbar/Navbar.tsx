"use client";
import { useEffect, useState } from "react";
import {
  addBodyNoScroll,
  combineClasses,
  removeBodyNoScroll,
} from "@/utils/utils";

import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Image from "next/image";
import LogoDark from "@publ/logo-dark.svg";
import LogoWhite from "@publ/logo-white.svg";
import favIcon from "@publ/images/1-1-favicon.svg"
import { FaBars } from "react-icons/fa";


const navigationLinks = [
  { title: 'Início', href: '/' },
  { title: 'Sobre', href: '/sobre' },
  { title: 'Séries', href: '/series' },
  // Add more links as needed
];

const Navbar = () => {

  // header animation scroll

  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dark mode switch

  const { theme, setTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setShowSearch(false);
  }, [theme]);

  useEffect(() => {
    showSearch ? addBodyNoScroll() : removeBodyNoScroll();
  }, [showSearch]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className={`${classes.navbar} ${ isTransparent ? "h-auto bg-appGray-100 dark:bg-appBlue-400" : "h-auto bg-appGray-100 dark:bg-appBlue-400 " }`}>
        <div className={combineClasses(classes.navbar__container,"container flex items-center justify-between py-1.5","px-2")}>
          <div className="flex items-center">
            <Link href="/" className="text-[22px] font-semibold">
              {isTransparent ? (
                <>
                  <Image
                    src={LogoDark}
                    alt="Therapies Love Kids Logo"
                    style={{ width: '100px', height: '50px' }}
                    className="block dark:hidden"
                  />
                  <Image
                    src={LogoWhite}
                    alt="Therapies Love Kids Logo"
                    style={{ width: '100px', height: '50px' }}
                    className="hidden dark:block"
                  />
                </>
              ) : (
                <Image
                  src={favIcon}
                  alt="Therapies Love Kids Logo"
                  style={{ width: '100%', height: '30px' }}
                />
              )}
            </Link>
          </div>
          <div className="md:hidden flex flex-row justify-end w-full h-full">
            <div className={`transform transition-transform duration-300
              ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
              <FaBars className="text-2xl fill-appBlue-100" />
            </div>
          </div>

          <div className="hidden md:flex flex-row justify-end w-full h-full gap-10">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <h3 className={`text-appGray-300 hover:text-appBlue-100 dark:text-appGray-100 dark:hover:text-appBlue-50 text-2xl`}>
                  {link.title}
                </h3>
              </Link>
            ))}
            <button
              name="theme-switch"
              aria-label="theme button"
              className={combineClasses(
                classes.theme_switch,
                "dark:text-appGray-100 dark:hover:text-appBlue-50 text-appGray-300 hover:text-appBlue-100 text-center text"
              )}
              onClick={changeTheme}
            >
              {theme && theme === "dark" ? (
                <BsFillSunFill className="text-2xl" />
              ) : (
                <BsFillMoonFill className="text-md " />
              )}
            </button>
          </div>

        </div>
        <div className='w-full h-1.5 flex'>
          <div className='w-full hover:w-[150%] bg-appRed-100 duration-75'></div>
          <div className='w-full hover:w-[150%] bg-appYellow-100 duration-75'></div>
          <div className='w-full hover:w-[150%] bg-appGreen-100 duration-75'></div>
          <div className='w-full hover:w-[150%] bg-appBlue-100 duration-75'></div>
        </div>  
      </nav>


      {isMenuOpen && (
        <div className="fixed z-[5] flex flex-col items-end w-full h-screen gap-10 bg-black/50">
          <div className="pt-20 bg-appGray-100 h-full relative">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <h3 className={`w-full py-5 px-40 hover:bg-appGray-300 text-appGray-300 hover:text-appBlue-100 dark:text-appGray-100 dark:hover:text-appBlue-50 text-2xl`}>
                  {link.title}
                </h3>
              </Link>
            ))}
            <button
              name="theme-switch"
              aria-label="theme button"
              className={combineClasses(
                classes.theme_switch,
                "absolute bottom-0 right-0 px-10 py-10 dark:text-appGray-100 dark:hover:text-appBlue-50 text-appGray-300 hover:text-appBlue-100"
              )}
              onClick={changeTheme}
            >
              {theme && theme === "dark" ? (
                <BsFillSunFill className="text-2xl" />
              ) : (
                <BsFillMoonFill className="text-md " />
              )}
            </button>
          </div>
        </div>
      )}



      {/* {showSearch && <Search closeSearch={() => setShowSearch(false)} />} */}
    </>
  );
};

export default Navbar;