import {
  createBrowserRouter,
  createMemoryRouter,
  useLocation,
  useOutlet,
  type RouteObject,
} from "react-router";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ProblemaQuienSoySection } from "./components/ProblemaQuienSoySection";
import { CaminosSection } from "./components/CaminosSection";
import { FooterSection } from "./components/FooterSection";
import { HomeApproachSection } from "./components/HomeApproachSection";
import { HomeMethodSection } from "./components/HomeMethodSection";
import { HomeStartSection } from "./components/HomeStartSection";
import { HomeProjectsSection } from "./components/HomeProjectsSection";
import { GuiaPage } from "./components/GuiaPage";
import { ProgramaPage } from "./components/ProgramaPage";
import { BlogPage } from "./components/BlogPage";
import { BlogNotePage } from "./components/BlogNotePage";
import { ContactoPage } from "./components/ContactoPage";
import { MiHistoriaPage } from "./components/MiHistoriaPage";
import { PortfolioPage } from "./components/PortfolioPage";
import { CaseStudyRoute } from "./components/CaseStudyPage";

function Home() {
  return (
    <div className="pz-page" style={{ width: "100%", overflowX: "hidden" }}>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemaQuienSoySection />
        <HomeApproachSection />
        <CaminosSection />
        <HomeMethodSection />
        <HomeStartSection />
        <HomeProjectsSection />
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

export const routeConfig: RouteObject[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: PortfolioPage },
      { path: "portfolio/nodux", element: <CaseStudyRoute slug="nodux" /> },
      { path: "portfolio/gestock", element: <CaseStudyRoute slug="gestock" /> },
      { path: "portfolio/operacion-de-tienda", element: <CaseStudyRoute slug="operacion-de-tienda" /> },
      { path: "portfolio/cosmic-studio", element: <CaseStudyRoute slug="cosmic-studio" /> },
      { path: "guia", Component: GuiaPage },
      { path: "programa", Component: ProgramaPage },
      { path: "notas", Component: BlogPage },
      { path: "notas/:slug", Component: BlogNotePage },
      { path: "contacto", Component: ContactoPage },
      { path: "mi-historia", Component: MiHistoriaPage },
    ],
  },
];

export function createBrowserAppRouter() {
  return createBrowserRouter(routeConfig);
}

export function createPrerenderRouter(pathname: string) {
  return createMemoryRouter(routeConfig, {
    initialEntries: [pathname],
  });
}
