import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";

// importacion del bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Agrega el componente Outlet para renderizar las rutas hijas */}
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "post/:id",
      //   element: <Single />,
      // },
      // {
      //   path: "/write",
      //   element: <Write />,
      // },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
