import React from "react";
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login&Registration/Login";
import { HeroData, worksData } from "./data";
import OurWorksPage from "./pages/OurWorks/OurWorksPage";
import SingleWorksPage from "./pages/OurWorks/SingleWorksPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home data={HeroData} />,
        },
        {
          path: "/about",
          element: <About data={HeroData} />,
        },
        {
          path: "/our-work",
          element: <OurWorksPage data={HeroData} worksData={worksData} />,
        },
        {
          path: "/our-work/:worksId",
          element: <SingleWorksPage data={worksData} />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
