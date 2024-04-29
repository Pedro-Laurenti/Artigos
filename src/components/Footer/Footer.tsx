import { CURRENT_YEAR } from "@/utils/utils";
import Link from "next/link";
import { footerLinks } from "@/data";
import "./Footer.module.scss"
import classes from "./Footer.module.scss";
import config from '../../../package.json';
import Image from "next/image";

import LogoDark from "@publ/logo-dark.svg";
import LogoWhite from "@publ/logo-white.svg";

const Footer = () => {
  const { legal, quick, socialMedia } = footerLinks;
  return (
    <div className="mt-auto">
      <footer className="bg-appGray-100 dark:bg-appGray-400 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* About Us */}
            <div className="flex flex-col text-appBlue-200 dark:text-appGray-100 md:col-span-2">
              <div className="text-lg font-semibold mb-2">
                <Image
                  src={LogoDark}
                  alt="Therapies Love Kids Logo"
                  style={{ width: '100px', height: '50px', }}
                  className="block dark:hidden mb-4"
                />
                <Image
                  src={LogoWhite}
                  alt="Therapies Love Kids Logo"
                  style={{ width: '100px', height: '50px' }}
                  className="hidden dark:block mb-4"
                />
              </div>
              <div className="flex mt-2 md:mt-0">
                <div className="flex justify-between w-1/3">
                  {socialMedia.map((item, index) => {
                    return (
                      <a 
                      aria-label={`${item.url}`}
                      href={item.url} 
                      rel="noreferrer"
                      target="_blank"
                      className={classes.social_media_icons} key={index}>
                        {item.icons}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Páginas */}
            <div className="flex flex-col text-appBlue-200 dark:text-appGray-100 ">
              <div className="text-lg font-semibold mb-4">
                <h6>Páginas</h6>
              </div>
              {quick.map((quickLink, index) => {
                return (
                  <div className="mb-2" key={index}>
                    <Link
                      href={quickLink.url}
                      className="footer-links text-sm"
                    >
                      {quickLink.name}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Our Services */}
            <div className="flex flex-col text-appBlue-200 dark:text-appGray-100 ">
              <div className="font-semibold mb-4">
                <h6>Institucional</h6>
              </div>
              {legal.map((legal, index) => {
                return (
                  <div className="mb-2" key={index}>
                    <Link
                      href={legal.url}
                      className="footer-links text-sm"
                    >
                      {legal.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Bottom */}
      </footer>
      <CopyRightFooter />
    </div>
  );
};

const CopyRightFooter = () => {
  return (
    <>
      <section className="bg-appGray-300 dark:bg-slate-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="text-center md:text-left">
              <p className="text-sm">
                &copy; {CURRENT_YEAR} Therapies Love Kids. Todos os direitos reservados.
              </p>
            </div>

            {/* Column 2 *
            <div className="text-center">
              <p className="text-sm">
                <span className="block">{""}</span>
              </p>
            </div>
            /}

            {/* Column 3 */}
            <div className="text-center md:text-right">
              <p className="text-sm">v. {config.version}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
