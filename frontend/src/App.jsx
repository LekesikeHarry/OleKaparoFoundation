import React, { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login&Registration/Login";
import { HeroData, worksData } from "./data";
import OurWorksPage from "./pages/OurWorks/OurWorksPage";
import SingleWorksPage from "./pages/OurWorks/SingleWorksPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Blogs from "./pages/Blog/Blogs";
import Spinner from "./components/animations/Spinner";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/Faq/Faq";
// data query
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Register from "./pages/Login&Registration/Register";

//react-query
const queryClient = new QueryClient();

// lazy load HOMEPAGE

const HomePage = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./pages/Home/Home")), 3000)
    )
);

function App() {
  //1. logged in or not
  //2. if user
  //3. if admin

  //router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <HomePage data={HeroData} />,
        },
        {
          path: "/about",
          element: <About data={HeroData} />,
        },
        {
          path: "/our-work",
          element: <OurWorksPage />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/our-work/:worksId",
          element: <SingleWorksPage />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
