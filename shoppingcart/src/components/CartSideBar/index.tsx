import React from "react";

import tw from "tailwind-styled-components";




const CartBar = tw.div`
    bg-blue-800
    top-0 
    left-0 
    right-0 
    w-80 
    h-20 
    pt-6
`;

const NavContainer = tw.div`
    px-16 
    flex

`;

interface Props {
	isOpen: boolean
	children: React.ReactNode
	onCartIconClick: () => void
}

function CartSideBar({ children, isOpen, onCartIconClick }: Props) {
  
  return (
    <div className='relative'>
			<div
				className={`fixed top-0 right-0 h-full w-80 bg-white transition duration-700 ease-in-out transform z-50 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ boxShadow: `${isOpen ? "rgba(0, 0, 0, 0.2) 0px 30px 30px" : ""}` }}
			>
				<aside className='h-full overflow-y-auto'>
					<header className='bg-white py-4 flex font-bold items-center justify-end px-4 h-14'>
						<div>
							<button onClick={onCartIconClick}>Close</button>
						</div>
					</header>
					<main className='bg-white p-4 text-black font-bold'>{children}</main>
				</aside>
			</div>
		</div>
  );
}

export default CartSideBar;
