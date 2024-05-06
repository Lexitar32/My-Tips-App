import * as React from "react";
import { MenuContextType } from "@interfaces/menu";

const MenuContext = React.createContext<MenuContextType | null>(null);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <MenuContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = (): MenuContextType => {
  const context = React.useContext(MenuContext);
  if (!context)
    throw new Error("Menu context can only be used within Menu provider");
  return context;
};
