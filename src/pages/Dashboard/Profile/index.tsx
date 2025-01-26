import Loader from "@components/Loader";
import { ProgressBar } from "@components/ProgressBar";
import { useFetchDailyTips } from "@services/tips/useFetchDayTips";

const ProfilePage = () => {
  const { isLoading, isError } = useFetchDailyTips("energy");
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");

  // Default to Beginner if no milestone is provided
  const userMilestone = userDetails?.milestone || "Beginner";

  if (isLoading) {
    return (
      <div className="w-full h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p className="text-lg text-red-500">Error loading profile</p>;
  }

  return (
    <div className="p-4 md:p-6 font-mont">
      <h2 className="pb-5 mt-5 text-base font-semibold lg:text-lg md:hidden">
        My Profile
      </h2>

      <div className="flex flex-col items-center">
        <h2 className="hidden pb-5 text-base font-semibold md:block lg:text-lg">
          My Profile
        </h2>
        <div className="w-full lg:w-[500px] p-5 bg-white rounded-lg">
          <span className="inline-block overflow-hidden bg-gray-100 rounded-full size-6">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-gray-300 size-full"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <div>
            <h3 className="mt-6 font-semibold tracking-tight text-gray-900 text-base/7">
              Full Name
            </h3>
            <p className="text-gray-600 text-sm/6">{userDetails?.fullName}</p>
          </div>
          <div>
            <h3 className="mt-6 font-semibold tracking-tight text-gray-900 text-base/7">
              Email
            </h3>
            <p className="text-gray-600 text-sm/6">{userDetails?.email}</p>
          </div>
          <div>
            <h3 className="pb-5 mt-6 font-semibold tracking-tight text-gray-900 text-base/7">
              Milestone
            </h3>
            <ProgressBar milestone={userMilestone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
