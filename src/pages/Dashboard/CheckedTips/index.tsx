import Loader from "@components/Loader";
import { useCheckedTips } from "@contexts/CheckedTipsContext";
import { ICheckedTipsProps } from "@interfaces/tips";
import { useFetchCheckedTips } from "@services/tips/useFetchCheckedTips";
import { useModalContext } from "@contexts/ModalContext";
import Energy from "@assets/energy.jpeg";
import { Button } from "@components/ui/Button";
import ShareIcon from "@assets/icons/ShareIcon";
import { ShareTipsModal } from "@components/common/Modal/ShareTipsModal";
import EmptyState from "@components/EmptyState";

const CheckedTips = () => {
  const { state } = useCheckedTips();
  const { setOpenModal } = useModalContext();
  const { isLoading, isError } = useFetchCheckedTips();

  const shareCheckedTips = () => {
    setOpenModal(true);
  };

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
      <div className="flex items-center justify-between">
        <h2 className="pt-5 text-base font-semibold lg:text-lg">
          Checked Tips
        </h2>
        {state?.checkedTips?.checkedTips.length == 0 ? (
          <></>
        ) : (
          <Button
            className="bg-black"
            onClick={shareCheckedTips}
            title={"Share Tips"}
            withIcon={true}
            icon={<ShareIcon size={16} color="white" />}
          />
        )}
      </div>

      {state?.checkedTips?.checkedTips.length == 0 ? (
        <EmptyState />
      ) : (
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-7"
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
              <p className="block pt-5 text-sm font-bold text-gray-900 uppercase pointer-events-none">
                {tip?.category}
              </p>
              <p className="block pt-2 text-sm font-medium text-gray-500 pointer-events-none">
                "{tip?.tip}"
              </p>
            </li>
          ))}
        </ul>
      )}

      <ShareTipsModal shareId={state?.checkedTips?.shareId} />
    </div>
  );
};

export default CheckedTips;
