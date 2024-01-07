import { LinkComp } from "@components/Link";

export const NavBar = () => {
  return (
    <header className="mx-auto max-w-7xl font-mont fixed top-0 left-0 right-0 z-10 flex justify-between flex-wrap p-4 bg-transparent text-white">
      <div className="flex items-center">
        <h3 className="text-xl font-bold">RollCall</h3>
      </div>

      <div className="flex items-center justify-between">
        <div className="p-2">
          <LinkComp linkText="Home" destination="/" />
        </div>
        <div className="p-2">
          <LinkComp linkText="About" destination="/about" />
        </div>
        <div className="p-2">
          <LinkComp linkText="Features" destination="/features" />
        </div>
        <div className="p-2">
          <LinkComp linkText="Testimonials" destination="/testimonials" />
        </div>
        <div className="p-2">
          <LinkComp linkText="Contact" destination="/contact" />
        </div>
      </div>

      <div className="flex">
        <div className="p-2 mr-6">
          <LinkComp linkText="Sign in" destination="/login" />
        </div>
      </div>
    </header>
  );
};
