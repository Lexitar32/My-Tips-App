import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CancelIcon } from "@assets/icons/CancelIcon";
import { useModalContext } from "@contexts/ModalContext";
import { ClipboardIcon } from "@assets/icons/ClipboardIcon";
import toast from "react-hot-toast";

interface Props {
  shareId: string | undefined;
}

export const ShareTipsModal: React.FC<Props> = ({ shareId }) => {
  const { openModal, setOpenModal } = useModalContext();

  const getLink = () => {
    const { protocol, host } = window.location;
    return `${protocol}//${host}/shareTips/${shareId}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getLink());
      toast.success("Link copied to clipboard!", {
        duration: 4000,
        position: "top-center",
      });
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-95 z-9999 ${
          openModal ? "" : "hidden"
        }`}
      ></div>

      {/* Modal Content */}
      <Transition
        show={openModal}
        enter="transform transition-transform duration-300 ease-in-out"
        enterFrom="scale-0"
        enterTo="scale-100"
        leave="transform transition-transform duration-300 ease-in-out"
        leaveFrom="scale-100"
        leaveTo="scale-0"
        as={Fragment}
      >
        <div className="fixed inset-0 overflow-y-auto z-999999 font-mont">
          <div className="flex items-center justify-center min-h-screen p-6">
            <div className="relative overflow-hidden bg-white rounded-lg shadow-xl min-w-96">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3">
                <h2 className="text-lg font-semibold">Share Checked Tips</h2>
                <CancelIcon setOpen={setOpenModal} />
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-700">
                  Share this link with others:
                </p>
                <div className="flex items-center mt-2 space-x-2">
                  <a
                    href={getLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {getLink()}
                  </a>

                  <button
                    onClick={copyToClipboard}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    title="Copy to clipboard"
                  >
                    <ClipboardIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};
