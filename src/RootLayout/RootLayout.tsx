"use client"
import { ThemeProvider } from "next-themes";
import { Footer , Navbar } from '@/components';
import SmoothScrollbar from "@/utils/smoothscroll";

export default function RootLayout({
  children,
}: {
  children: any;
}) {

  return (
    <div className="flex flex-col min-h-screen">
      <SmoothScrollbar>

      
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />    
              {children}
          <Footer />
        </ThemeProvider>
      </SmoothScrollbar>
    </div>
      
  );
}
