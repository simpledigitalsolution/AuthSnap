import { Link } from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Disclosure as="nav" className="border-b border-gray-200 bg-green-100">
        <>
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  {/* Brand Logo */}
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="AuthSnap"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="AuthSnap"
                  />
                </div>
              </div>
              <Link
                to="/login"
                className="flex rounded-md bg-indigo-600 px-3 py-2 text-sm items-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </Link>
            </div>
          </div>
        </>
      </Disclosure>
      <Outlet />
    </div>
  );
}
