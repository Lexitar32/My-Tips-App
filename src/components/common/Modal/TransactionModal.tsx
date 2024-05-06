import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CancelIcon } from "@assets/icons/CancelIcon";
import { Button } from "@components/ui/Button";
import { useModalContext } from "@contexts/ModalContext";

export const TransactionModal: React.FC = () => {
  const { openModal, setOpenModal } = useModalContext();

  return (
    <Transition
      show={openModal}
      enter="transition duration-300 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Fragment}
    >
      <div className="fixed inset-0 overflow-y-auto z-999999 font-mont">
        <div className="flex items-center justify-center min-h-screen p-6">
          <div className="fixed inset-0 opacity-85 bg-boxdark"></div>

          <div className="relative overflow-hidden translate-y-[-50px] transition-all duration-300 ease-in-out bg-white rounded-lg shadow-xl min-w-96">
            <div className="flex items-center justify-between px-4 py-3">
              <h2 className="text-lg font-semibold">New transaction</h2>
              <CancelIcon setOpen={setOpenModal} />
            </div>
            <div className="p-4">
              <p className="text-sm">
                Record your income or expenses with ease &#8208; add a new
                transaction now!
              </p>

              <div className="flex justify-end mt-5">
                <Button
                  title={"Add transaction"}
                  withIcon={false}
                  variant="contained"
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
