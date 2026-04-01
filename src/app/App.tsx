import "../styles/fonts.css";
import { RouterProvider } from "react-router";
import { createBrowserAppRouter } from "./routes";

const router = createBrowserAppRouter();

export default function App() {
  return <RouterProvider router={router} />;
}
