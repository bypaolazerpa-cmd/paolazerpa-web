import { createBrowserRouter } from "react-router";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ProblemaQuienSoySection } from "./components/ProblemaQuienSoySection";
import { CaminosSection } from "./components/CaminosSection";
import { EnfoqueSection } from "./components/EnfoqueSection";
import { NotasProcesoSection } from "./components/NotasProcesoSection";
import { CTAFinalSection } from "./components/CTAFinalSection";
import { ContactoSection } from "./components/ContactoSection";
import { FooterSection } from "./components/FooterSection";
import { GuiaPage } from "./components/GuiaPage";
import { ProgramaPage } from "./components/ProgramaPage";
import { BlogPage } from "./components/BlogPage";
import { ContactoPage } from "./components/ContactoPage";

function Home() {
  return (
    <div style={{ width: "100%", backgroundColor: "#1A1A2E", overflowX: "hidden" }}>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemaQuienSoySection />
        <CaminosSection />
        <EnfoqueSection />
        <NotasProcesoSection />
        <CTAFinalSection />
        <ContactoSection />
      </main>
      <FooterSection />
    </div>
  );
}

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/guia", Component: GuiaPage },
  { path: "/programa", Component: ProgramaPage },
  { path: "/blog", Component: BlogPage },
  { path: "/contacto", Component: ContactoPage },
]);
