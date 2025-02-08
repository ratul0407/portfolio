import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import ProjectLayout from "../pages/ProjectLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/:id",
    element: <ProjectLayout />,
  },
]);
export default router;
