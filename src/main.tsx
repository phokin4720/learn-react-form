import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FormData from "./components/FormData.tsx";
import Display from "./components/Display.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormData />,
  },
  {
    path: "FormData",
    element: <FormData />,
  },
  {
    path: "Display",
    element: <Display />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
