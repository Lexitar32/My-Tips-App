import { useParams } from "react-router-dom";
import Header from "@components/common/NavBar/Dashboard";
import { useState } from "react";
import Energy from "@assets/energy.jpeg";
import { ICheckedTipsProps } from "@interfaces/tips";
import { useSharedTips } from "@services/tips/useSharedTips";
import Loader from "@components/Loader";
import { DailyTipsProvider } from "@contexts/DailyTipsContext";
import { AuthProvider } from "@contexts/AuthContext";
import { CheckedTipsProvider } from "@contexts/CheckedTipsContext";

const ShareTips = () => {
  const { id } = useParams<{ id: string }>();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data, isLoading, isError } = useSharedTips(`${id}`);

  if (isLoading) {
    return (
      <div className="w-full h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p className="text-lg text-red-500">Error loading shared tips</p>;
  }

  return (
    <AuthProvider>
      <DailyTipsProvider>
        <CheckedTipsProvider>
          <div className="bg-gray-2 dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex h-screen">
              <div className="relative flex flex-col flex-1 overflow-y-auto">
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />

                <main>
                  <div className="min-h-screen mx-auto max-w-screen-2xl 2xl:p-10">
                    <div className="p-4 font-mont md:p-6">
                      <h2 className="pt-5 text-base font-semibold lg:text-lg">
                        Checked Tips
                      </h2>

                      <ul
                        role="list"
                        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-7"
                      >
                        {data?.data?.checkedTips?.map(
                          (tip: ICheckedTipsProps) => (
                            <li key={tip?.id} className="relative">
                              <div className="overflow-hidden bg-gray-100 rounded-lg group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img
                                  alt=""
                                  src={
                                    tip?.picture.includes("cdn")
                                      ? Energy
                                      : tip?.picture
                                  }
                                  className="pointer-events-none aspect-[10/7] object-cover group-hover:opacity-75"
                                />
                                <button
                                  type="button"
                                  className="absolute inset-0 focus:outline-none"
                                >
                                  <span className="sr-only">
                                    View details for tip
                                  </span>
                                </button>
                              </div>
                              <p className="block pt-5 text-sm font-bold text-gray-900 uppercase pointer-events-none">
                                {tip?.category}
                              </p>
                              <p className="block pt-2 text-sm font-medium text-gray-500 pointer-events-none">
                                "{tip?.tip}"
                              </p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </CheckedTipsProvider>
      </DailyTipsProvider>
    </AuthProvider>
  );
};

export default ShareTips;
