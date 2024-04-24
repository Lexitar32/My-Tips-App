import * as React from "react";

type ClickEscapeKeyProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export const useEscapeKey = ({
  sidebarOpen,
  setSidebarOpen,
}: ClickEscapeKeyProps) => {
  // close if the esc key is pressed
  React.useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
};
