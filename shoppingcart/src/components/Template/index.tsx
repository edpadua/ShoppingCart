'use client'

import React from 'react'

import Navbar from '../Navbar';

import Footer from '../Footer';

import SideBarCart from './../../SidebarCart/index';

import { useEffect, useState } from "react";

import Cart from '../Cart';

import { useProductsStore } from '@/store/useProductStore';

import ProductList from '../ProductList';
import CartSideBar from '../CartSideBar';

function Template() {

    const [isBarOpen, setIBarOpen] = useState(false);

    const { products, isLoading, error, fetchData } = useProductsStore();

    useEffect(() => {
		fetchData()
	}, [fetchData])

    const handleCartIconClick = () => {
      setIBarOpen(!isBarOpen)
     }
    

  return (
    <>
        <Navbar onCartIconClick={handleCartIconClick} />
        <CartSideBar isOpen={isBarOpen} onCartIconClick={handleCartIconClick}>
            <Cart/>
        </CartSideBar>
      
        <main className='px-16 min-h-screen pb-16'>
				{isLoading ? <div className='text-center text-lg'>Loading...</div> : <ProductList products={products} />}
		    </main>
        <Footer/>
    </>
  )
}

export default Template
