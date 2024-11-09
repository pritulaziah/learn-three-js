import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "@constants/route";
import Root from "@routes/Root";
import RagingSea from "@routes/RagingSea";
import "./index.css";

const router = createBrowserRouter([
  {
    path: Routes.Main,
    element: <Root />,
  },
  {
    path: Routes.RagingSea,
    element: <RagingSea />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
