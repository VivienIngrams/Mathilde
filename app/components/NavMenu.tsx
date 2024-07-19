"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuButton, MenuItem, MenuItems, Menu } from "@headlessui/react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
      <Link
        href="/"
        className="hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium"
      >
        Mathilde Cudeville
      </Link>
        <div className="flex items-center">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Menu as="div" className="relative">
                <MenuButton className="hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </MenuButton>
                <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/project/au-cafe"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Au café
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/project/la-passagere"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          La Passagère
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/project/interieur"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Intérieur
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/project/sentiment-oceanique"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Sentiment océanique
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/project/photo-texte"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Photo texte
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/project/en-suspension"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          En suspension
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/project/joel"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          Joël
                        </Link>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
              <Link
                href="/voyages"
                className="hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium"
              >
                Voyages
              </Link>
              <Link
                href="/quotidien"
                className="hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium"
              >
                Quotidien
              </Link>
              <Link
                href="/info"
                className="hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium"
              >
                Info
              </Link>
              <Link
                href="/education"
                className="hover:bg-black/10 px-3 py-2 rounded-md text-sm font-medium"
              >
                Education
              </Link>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            ) : (
              <svg className="block h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Duo_LG"> <path id="Vector" d="M3 15H21M3 9H21" stroke="#78350f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
              
            )}
          </button>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Menu as="div" className="relative">
            <MenuButton className="hover:bg-black/10 block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </MenuButton>
            <MenuItems className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/project/au-cafe"
                      className={`block px-4 py-2 text-base ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Au café
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/project/la-passagere"
                      className={`block px-4 py-2 text-base ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      La Passagère
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/project/interieur"
                      className={`block px-4 py-2 text-base ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Intérieur
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/project/sentiment-oceanique"
                      className={`block px-4 py-2 text-base ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Sentiment océanique
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/project/photo-texte"
                      className={`block px-4 py-2 text-base ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Photo texte
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/project/en-suspension"
                      className={`block px-4 py-2 text-base ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      En suspension
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href="/project/joel"
                      className={`block px-4 py-2 text-base ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Joël
                    </Link>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <Link
            href="/voyages"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Voyages
          </Link>
          <Link
            href="/quotidien"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Quotidien
          </Link>
          <Link
            href="/info"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Info
          </Link>
          <Link
            href="/education"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Education
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
