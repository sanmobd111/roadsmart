import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/headers";

const inter = Inter({ subsets: ["latin"] });

import StoreProvider from "@/store/StoreProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Next App",
  description: "Hello Javascript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <StoreProvider>

          {/* <div className="px-6 lg:p-0"> */}

          <Header />
          <main>{children}</main>
          <Footer></Footer>
          {/* </div> */}

          <Toaster />

        </StoreProvider>
      </body>
    </html>
  );
}
