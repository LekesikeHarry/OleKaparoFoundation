import React, { useEffect, useState } from "react";
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

function App() {
  // const [posts, setPosts] = useState({});
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const res = await axios.get("http://localhost:4000/api/posts/");
  //     setPosts(res.data);
  //   };
  //   getPosts();
  // }, []);

  // console.log(posts);
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
          element: <OurWorksPage worksData={worksData} />,
        },
        {
          path: "/blogs",
          element: <Blogs worksData={worksData} />,
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
