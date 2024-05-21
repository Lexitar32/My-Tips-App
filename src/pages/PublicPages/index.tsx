import * as React from "react";

const Public = () => {
  return (
    <div className="relative min-h-screen bg-white font-mont">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-10 lg:px-8">
        <div className="px-6 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              My Budget App
            </h1>
            <p className="mt-6 leading-8 text-gray-600 text-md">
              Manage your finances effortlessly with our intuitive budget app.
              Track spending, set savings goals, and gain insights with
              real-time analytics. Simplify budgeting and take control of your
              financial future today.
            </p>
            <div className="flex items-center mt-10 gap-x-6">
              <a
                href="/dashboard"
                className="rounded-md bg-boxdark px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go to Dashboard
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt="Landing page image"
          />
        </div>
      </div>
    </div>
  );
};

export default Public;
