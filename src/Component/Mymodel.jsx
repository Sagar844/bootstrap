import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { hanlesui } from "../App";

export default function MyModal() {
  const { isOpen, setIsOpen } = useContext(hanlesui);
  return (
    <>
      <div className="flex items-center justify-center "></div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
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
            <div className="fixed inset-0  backdrop-blur-sm bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 "
                    
                  >
                    v5 releases
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500"></p>
                  </div>

                  <div className="mt-4">
                    <button className="bg-indigo-800 px-20  rounded-lg">
                      v5.2.3
                    </button>
                    <button>v5.1.3</button>
                    <button>v5.0.3</button>

                    <h1>Previous releases</h1>
                    <button>v5.2.3</button>
                    <button>v5.2.3</button>
                    <button>v5.2.3</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
