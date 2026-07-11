import { Footer, Navbar } from "@meadowbrook/ui-core";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar
        logo="Client Name"
        links={[
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <main>{children}</main>
      <Footer copyright={`© ${new Date().getFullYear()} Client Name. All rights reserved.`} />
    </>
  );
}
