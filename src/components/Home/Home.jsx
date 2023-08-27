import { Grid } from "@mui/material";
import React from "react";
import DashboardCard from "./DashboardCard";

const Home = ({ setActive }) => {
  const dashboardList = [
    {
      id: "2",
      title: "Fix Menus",
      desc: "Pickles, Snacks & Sweets",
      link: "fix-menus/",
    },
    {
      id: "3",
      title: "Daily Menus",
      desc: "Daily Menus (Tiffin, Catering)",
      link: "daily-menus/",
    },
    {
      id: "4",
      title: "Festive Menus",
      desc: "Festive Menus",
      link: "festive-menus/",
    },
    {
      id: "5",
      title: "Contact Us",
      desc: "Connect with us to order!",
      link: "contact-us/",
    },
  ];

  return (
    <div>
      <Grid
        container
        gap={2}
        style={{
          padding: "1rem .5rem",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        {dashboardList.map((card) => (
          <Grid item xs={12} md={5}>
            <DashboardCard data={card} setActive={setActive} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
