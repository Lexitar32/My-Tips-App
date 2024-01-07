import React from "react";
import { NavLink } from "react-router-dom";

interface ILink {
  destination: string;
  linkText: string;
}

export const LinkComp = ({ destination, linkText }: ILink) => {
  return (
    <NavLink to={destination} className="px-2 hover:no-underline text-base">
      {linkText}
    </NavLink>
  );
};
