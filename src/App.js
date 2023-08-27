import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import FixMenus from "./components/FixMenus/FixMenus";
// import daily-menus from "./components/daily-menus/daily-menus";

import Root from "./routes/root";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import DailyMenus from "./components/DailyMenus /DailyMenus";
import FestiveMenus from "./components/FestiveMenus /FestiveMenus";

function App({ setActive }) {
  const router = createBrowserRouter([
    {
      path: "/good-home-pickles",
      element: <Root />,
      children: [
        {
          path: "/good-home-pickles/",
          element: <Home />,
        },
        {
          path: "/good-home-pickles/fix-menus/",
          element: <FixMenus />,
        },
        {
          path: "/good-home-pickles/daily-menus/",
          element: <DailyMenus />,
        },
        {
          path: "/good-home-pickles/festive-menus/",
          element: <FestiveMenus />,
        },
        {
          path: "/good-home-pickles/contact-us/",
          element: <GeneralInfo />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
