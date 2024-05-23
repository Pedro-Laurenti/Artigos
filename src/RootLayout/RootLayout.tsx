"use client"
import { ThemeProvider } from "next-themes";
import { Footer , Navbar } from '@/components';

export default function RootLayout({
  children,
}: {
  children: any;
}) {

  return (
    <div className="flex flex-col min-h-screen">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />    
              {children}
          <Footer />
        </ThemeProvider>
    </div>
      
  );
}
