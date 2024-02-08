import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Explore from "../pages/explore/Explore";
import Notifications from "../pages/notifications/Notifications";
import Error from "../pages/Error/Error";
import MainLayout from "../layouts/main/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Notifications />,
      },
      {
        path: "lists",
        element: <Notifications />,
      },
      {
        path: "bookmarks",
        element: <Notifications />,
      },
      {
        path: "premium",
        element: <Notifications />,
      },
      {
        path: "profile",
        element: <Notifications />,
      },
      {
        path: "more",
        element: <Notifications />,
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default routes;
