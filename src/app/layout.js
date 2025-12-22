import BootstrapInit from "@/helper/BootstrapInit";
import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";
import FooterOne from "@/components/FooterOne";
import NavbarFour from "@/components/NavbarFour";
import MobileBottomNav from "@/components/MobileBottomNav";
import ChatBot from "./chatbot/page";
export const metadata = {
  title: "Softzen IT",
  description: "Agiletech provide you to build...",
  icons: {
    icon: "/favicon.ico", // ফাইলটি src/app অথবা public ফোল্ডারে থাকলে
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="flex flex-col min-h-screen"
      >
        {/* Bootstrap initialization should be inside body */}
        <BootstrapInit />

        {/* Navbar will appear on every page */}
        <NavbarFour />
        <ChatBot />
        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer will appear on every page */}
        <FooterOne />
        <MobileBottomNav />
      </body>
    </html>
  );
}
