import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../Layout/Rootlayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage";
import LoadingPage from "../Pages/Shared/LoadingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/skills.json"),
        hydrateFallbackElement: <LoadingPage />, // Optional: Add a loading spinner while fetching
      },
    ],
  },
]);
