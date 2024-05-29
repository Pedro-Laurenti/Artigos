"use client"
import styles from './Grid.module.scss';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Grid() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollContainerRef = useRef(null);
  const colors = ['#fc3e38', '#ffd54d', '#46d0db', '#47c964'];

  const elements = [
    { title: 'Protocolo PediaSuit', imageSrc: '/img/13-fig-oferecemos.png' },
    { title: 'Protocolo Bobath', imageSrc: '/img/7-1-fig-oferecemos.png' },
    { title: 'Fonoaudiologia', imageSrc: '/img/10-fig-oferecemos.png' },
    { title: 'Musicoterapia', imageSrc: '/img/6-fig-oferecemos.png' },
    { title: 'Psicomotricidade', imageSrc: '/img/9-fig-oferecemos.png' },
    { title: 'Terapia Ocupacional', imageSrc: '/img/12-fig-oferecemos.png' },
    { title: 'Neuropsicopedagogia', imageSrc: '/img/8-1-fig-oferecemos.png' },
    { title: 'Psicologia Infantil', imageSrc: '/img/11-fig-oferecemos.png' },
    { title: 'Psicoterapia ABA', imageSrc: '/img/5-fig-oferecemos.png' }
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth / 2; // Adjust this value to control the scroll amount
      const newScrollPosition = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust breakpoint as needed
    };
    handleResize(); // Initialize the state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.parte3}>
      <div className={`${styles.parte3back1} bg-appBlue-100 dark:bg-slate-700`}></div>
      <div className={styles.parte3back2}></div>
      <div className={styles.parte3wrapper}>
        <div className={styles.wrapperwrapper}>
          <div className={styles.wrapperCellsPt3} ref={scrollContainerRef}>
            {elements.map((element, index) => (
              <div key={index} className={`${styles.cellPt3} bg-slate-50 dark:bg-slate-800`}>
                <div
                  className={styles.ImgDad1}
                  style={{
                    borderColor: colors[(currentColorIndex + index) % colors.length],
                    border: `2px solid ${colors[(currentColorIndex + index) % colors.length]}`
                  }}
                >
                  <div className={styles.WrapperImgPt3}>
                    <Image
                      className={styles.imges}
                      src={element.imageSrc}
                      width={300}
                      height={300}
                      alt="a"
                      quality={80}
                      sizes="30vw"
                      draggable="false"
                    />
                  </div>
                </div>
                <h3 draggable={false} style={{ color: colors[(currentColorIndex + index) % colors.length] }}>{element.title}</h3>
              </div>
            ))}
          </div>
          {isDesktop && (
        <div className={styles.scrollButtons}>
          <button onClick={() => handleScroll('left')}><FaArrowLeft /></button>
          <button onClick={() => handleScroll('right')}><FaArrowRight /></button>
        </div>
      )}
        </div>
        
      </div>

    </div>
  );
}