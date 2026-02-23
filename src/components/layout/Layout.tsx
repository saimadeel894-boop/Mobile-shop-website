import { ReactNode } from "react";
import AnnouncementBar from "./AnnouncementBar";
import ContactBar from "./ContactBar";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomNav from "./MobileBottomNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <ContactBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBottomNav />
      {/* Spacer for mobile bottom nav */}
      <div className="md:hidden h-14" />
    </div>
  );
};

export default Layout;
