import React from "react";

type ClickOutsideProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

export const useOnClickOutside = ({
  sidebarOpen,
  setSidebarOpen,
}: ClickOutsideProps) => {
  const trigger = React.useRef<any>(null);
  const sidebar = React.useRef<any>(null);

  // close on click outside
  React.useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return {
    trigger,
    sidebar,
  };
};
