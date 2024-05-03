"use client"
import { ThemeProvider } from "next-themes";
import { Footer , Navbar } from '@/components';

export default function RootLayout({
  children,
}: {
  children: any;
}) {

  return (
   
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />    
        <div className="flex-grow min-h-screen">
          {children}
        </div>
      <Footer />
    </ThemeProvider>
      
  );
}
