import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import ProjectLayout from "../layouts/ProjectLayout";

const router = createBrowserRouter([
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
