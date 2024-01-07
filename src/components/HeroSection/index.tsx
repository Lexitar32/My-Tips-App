import { LinkComp } from "@components/Link";

export const HeroSection = () => {
  return (
    <section
      className="font-mont flex items-center justify-center text-center flex-wrap h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('../../src/assets/attendance-bg.png')" }}
    >
      <div className="mx-auto max-w-[65%] p-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
          Streamline Your Attendance Management with RollCall
        </h2>
        <p className="text-lg mb-8 text-white">
          RollCall isn't just an app; it's a revolution in attendance
          management. Embrace the simplicity, enhance your efficiency, and
          transform the way you mark attendance with RollCall.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 text-white h-12 w-full sm:w-auto min-w-120 px-4 inline-flex items-center justify-center shadow-sm rounded-md">
          <LinkComp linkText="Join as admin" destination="/login" />
        </button>
      </div>
    </section>
  );
};
