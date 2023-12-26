import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Modal({ issue }) {
  const singleData = issue;
  console.log(issue, ">>>>>>>>>>>>>>>>>>description");
  // console.log(title,">>>>>>>>>>>>>>>>>>description")
  const [open, setOpen] = useState<boolean>(true);

  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setOpen(false)}
      >
        <div className="flex items-center justify-center">
          <Dialog.Panel
            as="div"
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-10 flex items-center justify-center">
              <Dialog.Panel
                as="div"
                className="bg-white p-4 rounded-lg shadow-xl w-80"
              >
                <div className="flex items-start">
                  {/* <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 rounded-full bg-red-100">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div> */}
                  <div className="ml-4">
                    <Dialog.Title className="text-base font-semibold text-gray-900">
                      {singleData.title}
                    </Dialog.Title>
                    <p className="mt-2 text-sm text-gray-500">
                      {singleData.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  {/* <button
                    type="button"
                    className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button> */}
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
