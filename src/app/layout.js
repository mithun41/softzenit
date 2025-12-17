import BootstrapInit from "@/helper/BootstrapInit";
import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";

import NavBar from "@/components/NavBar";
import FooterOne from "@/components/FooterOne";
import NavbarFour from "@/components/NavbarFour";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata = {
  title: "Service || AgileTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, IT services, IT solutions, network solution, startup, technology, technology company, technology service template.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BootstrapInit />
      <body
        suppressHydrationWarning={true}
        className="flex flex-col min-h-screen"
      >
        {/* Navbar will appear on every page */}
        <NavbarFour />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer will appear on every page */}
        <FooterOne />
        <MobileBottomNav />
      </body>
    </html>
  );
}
