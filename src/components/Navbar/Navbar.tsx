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

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);

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
      <nav
        className={combineClasses(
          classes.navbar,
          "bg-white dark:bg-slate-900 dark:text-white text-black"
        )}
      >
        <div
          className={combineClasses(
            classes.navbar__container,
            "container flex items-center justify-between",
            "px-2"
          )}
        >
          <div className="flex items-center">
            <Link href="/" className="text-[22px] font-semibold">
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
            </Link>
          </div>

          <div className="flex items-start">
            <button
              name="theme-switch"
              aria-label="theme button"
              className={combineClasses(
                classes.theme_switch,
                "pl-3 dark:text-white text-black"
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
        </div>{" "}
      </nav>

      {/* {showSearch && <Search closeSearch={() => setShowSearch(false)} />} */}
    </>
  );
};

export default Navbar;