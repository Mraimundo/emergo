"use client";

import { ReactNode } from "react";
import { CloseIcon } from "@/icons/CloseIcon";

export function Modal({
  children,
  handleClose,
}: {
  children: ReactNode;
  handleClose: () => void;
}) {
  return (
    <div className="w-full h-full absolute top-0 left-0 backdrop-filter backdrop-brightness-50 flex items-center justify-center ">
      <div className="relative bg-white rounded-lg shadow-md px-8 py-6 min-w-64 flex flex-col">
        <div className="flex items-center justify-between w-full">
          <button
            className="absolute top-3 right-5 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
            onClick={handleClose}
          >
            <CloseIcon className="w-6 h-6 text-primary group-hover:text-third transition-all" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
