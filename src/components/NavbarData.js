import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const navbarData = [
  {
    title: "HOME",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    cName: "navbar--item",
  },
  {
    title: "EXERCISES",
    path: "Exercises",
    icon: <BiIcons.BiBody />,
    cName: "navbar--item",
  },
  {
    title: "WORKOUTS",
    path: "Workouts",
    icon: <FaIcons.FaDumbbell />,
    cName: "navbar--item",
  },
  {
    title: "FAVOURITES",
    path: "Favourites",
    icon: <FaIcons.FaBookOpen />,
    cName: "navbar--item",
  },
];
