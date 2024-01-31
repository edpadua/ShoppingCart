import React from "react";

import tw from "tailwind-styled-components";

import { FiShoppingCart } from "react-icons/fi";

import { useCartStore } from "@/store/useCartStore";
import useFromStore from "@/app/Hooks/useFromStore";

const Nav = tw.nav`
    bg-blue-800
    top-0 
    left-0 
    right-0 
    w-full 
    h-20 
    pt-6
`;

const NavContainer = tw.div`
    px-16 
    flex

`;

interface Props {
  onCartIconClick: () => void;
}

function Navbar({ onCartIconClick }: Props) {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  return (
    <Nav>
      <NavContainer className="px-16 flex justify-between">
        <span className="text-lg text-white font-bold">Store</span>
        <div className="relative pt-2">
          <button
            type="button"
            title="Mini Cart"
            className="text-white text-xl flex items-center"
            onClick={onCartIconClick}>
            <FiShoppingCart />
            <div className="text-white rounded-full bg-blue-700 w-5 h-5 text-sm -ml-1">
              {cart?.length}
            </div>
          </button>
        </div>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
