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
      <nav className={`${classes.navbar} ${ isTransparent ? "h-auto" : "h-auto bg-appGray-100 dark:bg-appBlue-400 " }`}>
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

          <div
            className={`block md:hidden transform transition-transform duration-300 w-full 
            ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-2xl fill-appBlue-100" />
          </div>

          <div className="flex flex-row justify-end w-full h-full gap-10">
            <Link href="/">
              <h3 className={`text-appGray-300 hover:text-appBlue-100 dark:text-appGray-100 dark:hover:text-appBlue-50 text-2xl`}>Início</h3>
            </Link>
            <Link href="/sobre">
              <h3 className={`text-appGray-300 hover:text-appBlue-100 dark:text-appGray-100 dark:hover:text-appBlue-50 text-2xl`}>Sobre</h3>
            </Link>
            <Link href="/series">
              <h3 className={`text-appGray-300 hover:text-appBlue-100 dark:text-appGray-100 dark:hover:text-appBlue-50 text-2xl`}>Séries</h3>
            </Link>
          </div>

        </div>

        <div className='w-full h-1.5 flex'>
            <div className='w-full hover:w-[150%] bg-appRed-100 duration-75'></div>
            <div className='w-full hover:w-[150%] bg-appYellow-100 duration-75'></div>
            <div className='w-full hover:w-[150%] bg-appGreen-100 duration-75'></div>
            <div className='w-full hover:w-[150%] bg-appBlue-100 duration-75'></div>
          </div>  
      </nav>


      {/* {showSearch && <Search closeSearch={() => setShowSearch(false)} />} */}
    </>
  );
};

export default Navbar;