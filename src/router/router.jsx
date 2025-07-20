import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
