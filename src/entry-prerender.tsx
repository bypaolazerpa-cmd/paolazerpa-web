import { renderToString } from "react-dom/server";
import { RouterProvider } from "react-router";
import { blogPosts } from "./app/data/blogPosts";
import { createPrerenderRouter } from "./app/routes";

export const prerenderRoutes = [
  "/",
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
