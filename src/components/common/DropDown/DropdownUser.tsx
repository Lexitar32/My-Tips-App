import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserOne from "@assets/user/user-new.jpeg";
import { useEscapeKey } from "@hooks/useEscapeKey";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { getUserDailyTips, useDailyTips } from "@contexts/DailyTipsContext";
import { LogoutIcon } from "@assets/icons/Logout";
import { useAuth } from "@contexts/AuthContext";

export const DropdownUser = () => {
  const navigate = useNavigate();
  const { state } = useDailyTips();
  const { dispatch } = useAuth();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const userMilestone = getUserDailyTips(state.dailyTips);

  // Close sidebar by pressing escape key
  useEscapeKey({ open: dropdownOpen, setOpen: setDropdownOpen });
  // Close sidebar by clicking outside of the sidebar menu
  const { trigger, component: dropdown } = useOnClickOutside({
    open: dropdownOpen,
    setOpen: setDropdownOpen,
  });

  // Log out user
  const handleLogout = () => {
    dispatch({
      type: "LOG_OUT_USER",
      payload: userDetails,
    });

    localStorage.removeItem("userDetails");
    localStorage.removeItem("accessToken");

    navigate("/");
  };

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
          <span className="block text-xs">{userMilestone?.milestone}</span>
        </span>

        <img className="w-12 h-12 rounded-full" src={UserOne} alt="User" />

        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button
          onClick={handleLogout}
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out lg:text-base"
        >
          <LogoutIcon />
          Log Out
        </button>
      </div>
    </div>
  );
};
