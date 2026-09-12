import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "../src/components/login.jsx";
import Birthday from "../src/components/birthday.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Birthday />,
  },
  {
    path: "*",
    element: <Birthday />,
  },
  {
    path: "/birthday",
    element: <Birthday />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
