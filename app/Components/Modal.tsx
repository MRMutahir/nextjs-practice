// Modal.tsx
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface Issue {
  id?: string;
  title: string;
  status: string;
  createdAt: string;
  description: string;
}

interface ModalProps {
  singledata?: Issue | null;
  closeModalFoo: () => void;
}

export default function Modal({ singledata, closeModalFoo }: ModalProps) {
  const issue = singledata;
  const [open, setOpen] = useState<boolean>(true);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  const closeBothModal = () => {
    closeModalFoo();
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => (setOpen(false), closeModalFoo())}
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
                <div className="flex  flex-col justify-between">
                  <div className="ml-4">
                    <Dialog.Title className="text-base font-semibold text-gray-900">
                      {issue?.title}
                    </Dialog.Title>
                  </div>
                  <div className="ml-4">
                    <Dialog.Description className="mt-2 text-sm text-gray-500">
                      {issue?.description}
                    </Dialog.Description>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="ml-3 inline-flex justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={closeBothModal}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
