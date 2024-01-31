import React from "react";

import { useState } from "react";

import tw from "tailwind-styled-components";

const CartBar = tw.div`
fixed top-0 right-0 h-full w-80 bg-gray-900 text-white transition duration-700 ease-in-out transform z-50
`;

const Nav = tw.nav`
    bg-blue-800
    top-0 
    left-0 
    right-0 
    w-full 
    h-20 
    pt-5
`;

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onCartIconClick: () => void;
}

const SideBarCart = ({ children, isOpen, onCartIconClick }: Props) => {
  return (
    <div className="relative">
      <div className="w-80">
        <aside className="h-full overflow-y-auto">
          <header className="bg-gray-900 text-white py-4 flex items-center justify-end px-4 h-14">
            <div>
              <button onClick={onCartIconClick}>Close</button>
            </div>
          </header>
          <main className="bg-white p-4 text-black">{children}</main>
        </aside>
      </div>
    </div>
  );
};

export default SideBarCart;
