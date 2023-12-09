import * as React from "react";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meetings">Meetings</NavLink>
      </nav>
    </>
  );
};
