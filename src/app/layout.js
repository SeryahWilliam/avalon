import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MyFooter from "./components/Footer";
import { Providers } from "./redux/provider";
// import useSyncAuth from "./hooks/useSyncAuth";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avalon",
  description: "Generated by create next app",
};

function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Nav />
          {children}
          <MyFooter />
        </body>
      </html>
    </Providers>
  );
}

export default RootLayout;
