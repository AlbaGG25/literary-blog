import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ['latin'], weight: ['400','500', '600', '700'] });


export const metadata = {
  title: "Literary blog",
  description: "A blog about literature",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/books.svg" />
      </head>
      <body
        className={`${outfit.variable} ${outfit.fontFamily}`}
      >
        {children}
      </body>
    </html>
  );
}
