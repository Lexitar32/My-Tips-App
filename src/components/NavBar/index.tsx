import { LinkComp } from "@components/Link";

const navMenu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Contact", path: "/contact" },
];

export const NavBar = () => {
  return (
    <header className="mx-auto max-w-7xl font-mont fixed top-0 left-0 right-0 z-10 flex justify-between flex-wrap p-4 bg-transparent text-white">
      <div className="flex items-center">
        <h3 className="text-xl font-bold">RollCall</h3>
      </div>

      <div className="flex items-center justify-between">
        {navMenu.map((menu) => (
          <div className="p-2">
            <LinkComp linkText={`${menu.name}`} destination={`${menu.path}`} />
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="p-2 mr-6">
          <LinkComp linkText="Sign in" destination="/login" />
        </div>
      </div>
    </header>
  );
};
