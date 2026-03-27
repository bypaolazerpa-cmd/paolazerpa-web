import { createBrowserRouter, useLocation, useOutlet } from "react-router";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ProblemaQuienSoySection } from "./components/ProblemaQuienSoySection";
import { CaminosSection } from "./components/CaminosSection";
import { NotasProcesoSection } from "./components/NotasProcesoSection";
import { ContactoSection } from "./components/ContactoSection";
import { FooterSection } from "./components/FooterSection";
import { GuiaPage } from "./components/GuiaPage";
import { ProgramaPage } from "./components/ProgramaPage";
import { BlogPage } from "./components/BlogPage";
import { BlogNotePage } from "./components/BlogNotePage";
import { ContactoPage } from "./components/ContactoPage";
import { MiHistoriaPage } from "./components/MiHistoriaPage";

function Home() {
  return (
    <div style={{ width: "100%", backgroundColor: "#1A1A2E", overflowX: "hidden" }}>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemaQuienSoySection />
        <CaminosSection />
        <NotasProcesoSection />
        <ContactoSection />
      </main>
      <FooterSection />
    </div>
  );
}

function RootLayout() {
  const outlet = useOutlet();
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition-enter" style={{ minHeight: "100vh" }}>
      {outlet}
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "guia", Component: GuiaPage },
      { path: "programa", Component: ProgramaPage },
      { path: "notas", Component: BlogPage },
      { path: "notas/:slug", Component: BlogNotePage },
      { path: "contacto", Component: ContactoPage },
      { path: "mi-historia", Component: MiHistoriaPage },
    ],
  },
]);
