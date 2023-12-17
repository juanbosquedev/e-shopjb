import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NavBar } from "./component/NavBar";
import { Footer } from "./component/footer/Footer";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E-Shop JB",
  description: "E-commerceApp by Juan Bosque",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} test-slate-700`}>
        <div className="flex flex-col min-h-screen">
          <NavBar></NavBar>
          <main className="flex-grow ">{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
