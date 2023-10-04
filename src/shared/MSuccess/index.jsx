import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

export const MSuccess = ({ message, isOpenM, closeModal }) => {
  let [isOpen, setIsOpen] = useState(isOpenM);

  useEffect(() => {
    setIsOpen(isOpenM);
    if (isOpenM) {
      const timer = setTimeout(() => {
        closeModal(); 
      }, 1500);
      return () => clearTimeout(timer); 
    }
  }, [isOpenM, closeModal]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className=" relative z-10"
        open={isOpen}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {}
          <div className="fixed inset-0 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" min-w-max transform overflow-hidden rounded-2xl bg-green-500	py-6 px-10 align-middle shadow-xl transition-all mb-[30rem]  ml-[60rem]">
                <div
                  as="h3"
                  className="text-lg font-medium leading-6 text-white text-center"
                >
                  {message}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
