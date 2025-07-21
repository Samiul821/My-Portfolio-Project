import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import CustomCursor from "./Pages/Shared/CustomCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomCursor />
    <RouterProvider router={router} />
  </StrictMode>
);
