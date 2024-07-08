import { ReactNode } from "react";

import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import { ModalProvider } from "@/contexts/modal-context";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 relative">
        <Header />
        <Navbar />
        {children}
      </div>
    </ModalProvider>
  );
}
