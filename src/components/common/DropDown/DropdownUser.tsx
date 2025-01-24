import * as React from "react";
import { Link } from "react-router-dom";
import UserOne from "@assets/user/user-one.png";
import { useEscapeKey } from "@hooks/useEscapeKey";
import { useOnClickOutside } from "@hooks/useOnClickOutside";

export const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");

  // Close sidebar by pressing escape key
  useEscapeKey({ open: dropdownOpen, setOpen: setDropdownOpen });
  // Close sidebar by clicking outside of the sidebar menu
  const { trigger, component: dropdown } = useOnClickOutside({
    open: dropdownOpen,
    setOpen: setDropdownOpen,
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="block text-right">
          <span className="block text-sm font-medium text-black dark:text-white">
            {userDetails?.fullName}
          </span>
          <span className="block text-xs">{userDetails?.milestone}</span>
        </span>

        <img className="w-12 h-12 rounded-full" src={UserOne} alt="User" />
      </Link>
    </div>
  );
};
