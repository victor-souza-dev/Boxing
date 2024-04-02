import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import { Root } from "../pages/home";

const router = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Root.Home /> },
    ],
  },
];

const Router = () => (
  <RouterProvider
    router={createBrowserRouter(router, {
      basename: import.meta.env.PUBLIC_URL,
    })}
  />
);

export default Router;
