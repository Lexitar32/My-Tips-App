import React from "react";

interface Props {
  openModal: boolean;
}

export const TransactionModal = ({ openModal }: Props) => {
  return (
    <div>
      {openModal && (
        <div className="fixed inset-0 overflow-y-auto z-999999">
          <div className="flex items-center justify-center min-h-screen p-6">
            <div className="fixed inset-0 bg-black opacity-50"></div>

            {/* Modal content */}
            <div className="relative overflow-hidden bg-white rounded-lg shadow-xl w-96">
              {/* Modal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                <h2 className="text-lg font-semibold">Modal Title</h2>
                {/* Close button */}
                <button className="text-gray-600 hover:text-gray-700 focus:outline-none">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.35 14.35a7.91 7.91 0 0 1-8.7 1.4 7.96 7.96 0 0 1-1.4-1.4 7.96 7.96 0 0 1-1.4-8.7 7.91 7.91 0 0 1 1.4-1.4 7.96 7.96 0 0 1 8.7-1.4 7.91 7.91 0 0 1 1.4 1.4 7.96 7.96 0 0 1 1.4 8.7zm3.54-3.54a10 10 0 0 0-14.14-14.14l14.14 14.14z" />
                  </svg>
                </button>
              </div>
              {/* Modal content */}
              <div className="p-4">
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  felis lorem, sagittis vitae posuere ac, feugiat id odio. Fusce
                  vel arcu ut magna lacinia mollis vel in dolor.
                </p>
                {/* Modal actions */}
                <div className="flex justify-end mt-4">
                  <button className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
                    Action 1
                  </button>
                  <button className="px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded hover:bg-gray-400">
                    Action 2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
