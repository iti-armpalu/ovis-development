import { Nixie_One, Raleway, PT_Sans } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const nixieOne = Nixie_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nixieOne',
})

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-raleway',
})

const ptSans = PT_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ptSans',
})

import "./globals.css";
import Header from "./components/header";
import Footer from './components/footer';

export const metadata = {
  title: "Ovis",
  description: "Specialized investment firm",
  icons: {
    icon: '/images/ovis-favicon.ico',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nixieOne.variable} ${raleway.variable} ${ptSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
