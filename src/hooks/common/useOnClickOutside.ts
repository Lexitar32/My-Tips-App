import React from "react";

type ClickOutsideProps = {
  open: boolean;
  setOpen: (arg: boolean) => void;
};

export const useOnClickOutside = ({ open, setOpen }: ClickOutsideProps) => {
  const trigger = React.useRef<any>(null);
  const component = React.useRef<any>(null);

  // close on click outside
  React.useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!component.current || !trigger.current) return;
      if (
        !open ||
        component.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return {
    trigger,
    component,
  };
};
