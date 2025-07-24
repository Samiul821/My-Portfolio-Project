import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomCursor from "./Pages/Shared/CustomCursor.jsx";

Aos.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomCursor />
    <RouterProvider router={router} />
  </StrictMode>
);
