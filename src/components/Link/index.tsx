import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

interface ILink {
  destination: string;
  linkText: string;
}

export const LinkComp = ({ destination, linkText }: ILink) => {
  return (
    <Link
      as={NavLink}
      to={`${destination}`}
      p="2"
      _hover={{
        textDecoration: "none",
      }}
      fontSize="17px"
    >
      {linkText}
    </Link>
  );
};
