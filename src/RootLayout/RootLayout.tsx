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
            
      <div className="flex-grow">
        <Navbar />
        {children}
        <Footer />
      </div>
      
    </ThemeProvider>
      
  );
}
