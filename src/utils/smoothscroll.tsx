import React, { useEffect, useRef, ReactNode } from 'react';
import Scrollbar from 'smooth-scrollbar';

interface SmoothScrollbarProps {
  children: ReactNode;
}

const SmoothScrollbar: React.FC<SmoothScrollbarProps> = ({ children }) => {
  const scrollbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollbarRef.current) {
      const options = {
        damping: 0.1, // Ajuste o valor para controlar a suavidade do scroll (entre 0 e 1)
      };

      const scrollbar = Scrollbar.init(scrollbarRef.current, options);

      return () => {
        if (scrollbar) scrollbar.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollbarRef} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScrollbar;