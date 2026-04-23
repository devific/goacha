import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-[100svh] w-full">
      <Navbar />
      <main className="flex-1 w-full bg-stone-950">{children}</main>
      <Footer />
    </div>
  );
}
