import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/projects/:id",
      },
    ],
  },
]);
export default router;
