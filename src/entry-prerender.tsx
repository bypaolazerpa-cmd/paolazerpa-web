import { renderToString } from "react-dom/server";
import { RouterProvider } from "react-router";
import { blogPosts } from "./app/data/blogPosts";
import { getPageMetadata } from "./app/data/pageMetadata";
import { createPrerenderRouter } from "./app/routes";

export const prerenderRoutes = [
  "/",
  "/portfolio",
  "/guia",
  "/notas",
  "/contacto",
  "/mi-historia",
  "/programa",
  ...blogPosts.map((post) => `/notas/${post.slug}`),
];

export function renderRoute(pathname: string) {
  const router = createPrerenderRouter(pathname);
  return renderToString(<RouterProvider router={router} />);
}

export { getPageMetadata };
