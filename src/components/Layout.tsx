/** @format */

import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode | ReactNode[];
}
export default function Layout({ children }: Props) {
  return (
    <main>
      <section className="min-h-screen max-h-full flex">
        <div className="w-[16%]">
          <Sidebar />
        </div>
        <div className="w-[84%]">{children}</div>
      </section>
    </main>
  );
}
