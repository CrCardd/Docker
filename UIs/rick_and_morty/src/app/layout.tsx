// IMPORTES DOS MÓDULOS
import localFont from "next/font/local";
import { Karla } from "next/font/google";
import { Kanit } from "next/font/google";

// IMPORTES INTERNOS
import "./globals.css";
import { Menu } from '@/components/menu';
import { Footer } from "@/components/footer";


const karla = Karla({
  weight: ["200","400","800"],
  style: "normal",
  variable: "--karla",
  subsets: ["latin"]
})

const kanit = Kanit({
  weight: ["500","600","700"],
  style: "normal",
  variable: "--kanit",
  subsets: ["latin"]
})


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${karla.variable} antialiased flex `}
      >

        <Menu op1={""} op2={""} op3={""} op4={""} op5={"alguma "} op6={"Home"}/>
      
        <main className="flex mt-20 justify-center items-center">
        {children}
        </main>
        
          
        

        <Footer var1={'VAR1'} var2={'VAR2'}/>

      </body>
    </html>
  );
}
