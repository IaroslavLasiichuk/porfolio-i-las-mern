import React from "react";
import Gradient from "../components/Gradient";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Auth from "../utils/auth";
import data from "../data/data";
import logo from "../assets/favicon.ico";

const { navigation } = data;

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="bg-white">
      <header className="fixed-nav absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                title="Iaroslav Lasiichuk"
                className="h-12 w-auto"
                src={logo}
                alt="Logo Iaroslav Lasiichuk"
                width="120"
                height="auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.href}
                key={item.name}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            {Auth.loggedIn() && Auth.isAdmin() ? (
              <Link
                className="text-sm font-semibold leading-6 text-gray-900"
                to="/admin"
              >
                Admin Panel
              </Link>
            ) : null}
            {Auth.loggedIn() ? (
              <Link
                className="text-sm font-semibold leading-6 text-gray-900"
                to="/dashboard"
              >
                Dashboard
              </Link>
            ) : null}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {Auth.loggedIn() ? (
              <>
                <button
                  onClick={Auth.logout}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log out <span aria-hidden="true">&larr;</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-12 w-auto" src={logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Gradient />
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {Auth.loggedIn() && Auth.isAdmin() ? (
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      to="/admin"
                    >
                      Admin Panel
                    </Link>
                  ) : null}
                  {Auth.loggedIn() ? (
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  ) : null}
                </div>
                <div className="py-6">
                  {Auth.loggedIn() ? (
                    <>
                      <button
                        onClick={Auth.logout}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log out <span aria-hidden="true">&rarr;</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in<span aria-hidden="true">&larr;</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
