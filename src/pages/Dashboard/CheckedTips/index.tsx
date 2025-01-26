import Loader from "@components/Loader";
import { useCheckedTips } from "@contexts/CheckedTipsContext";
import { ICheckedTipsProps } from "@interfaces/tips";
import { useFetchCheckedTips } from "@services/tips/useFetchCheckedTips";
import Energy from "@assets/energy.jpeg";

const CheckedTips = () => {
  const { state } = useCheckedTips();
  const { isLoading, isError } = useFetchCheckedTips();

  if (isLoading) {
    return (
      <div className="w-full h-screen">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p className="text-lg text-red-500">Error loading checked tips</p>;
  }

  return (
    <div className="p-4 font-mont md:p-6">
      <h2 className="text-base font-semibold">Checked Tips</h2>

      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-7"
      >
        {state?.checkedTips?.checkedTips?.map((tip: ICheckedTipsProps) => (
          <li key={tip?.id} className="relative">
            <div className="overflow-hidden bg-gray-100 rounded-lg group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                alt=""
                src={tip?.picture.includes("cdn") ? Energy : tip?.picture}
                className="pointer-events-none aspect-[10/7] object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for tip</span>
              </button>
            </div>
            <p className="block pt-5 text-sm font-medium text-gray-500 pointer-events-none">
              {tip?.tip}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckedTips;
