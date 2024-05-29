import React from "react";
import { AnimatedParticles, ContentsTypeCard, MyInfoCard } from "@/components/index";
import styles from "./style.module.scss"

const HeroSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center overflow-hidden w-full h-[150vh] md:h-screen mb-10 dark:bg-slate-800 bg-slate-200">
        {/* Remova a div que envolve AnimatedParticles */}
        <AnimatedParticles className="absolute top-0 left-0 w-full h-full z-0" />
      
        <div className="absolute container z-[2] px-3">
          <div className="flex flex-wrap items-start md:flex-nowrap justify-center">
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
              <div
                className={`dark:hidden select-none flex flex-col md:items-center justify-between bg-gradient-to-t text-black rounded-3xl ${styles.shadowWHITE}`}>
                <MyInfoCard />
              </div>
              <div
                className={`hidden dark:flex select-none flex-col md:items-center justify-between rounded-3xl ${styles.shadowDARK}`}>
                <MyInfoCard />
              </div>
              <div className="flex flex-col md:flex-col md:items-center mt-20 md:mt-0 md:w-1/2">
                <h1 className='mb-5 px-3 text-3xl font-bold text-center cursor-pointer'>
                  <strong className="text-appGray-400 dark:text-appGray-100 select-none">Artigos </strong>
                  <strong className="text-appBlue-100 dark:text-appBlue-50 select-none">Therapies Love Kids</strong>
                </h1>
                <div className="flex justify-center mt-5 flex-wrap select-none">
                  <ContentsTypeCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;