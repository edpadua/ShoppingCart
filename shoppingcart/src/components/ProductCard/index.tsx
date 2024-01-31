import { useCartStore } from "@/store/useCartStore";

import Image from "next/image"

import { Product } from "@/app/@types/types";

interface Props{
    product: Product
}


export default function ProductCard({ product }: Props) {
	const addToCart = useCartStore(state => state.addToCart)

	return (
		<div className='bg-white rounded-md shadow-md overflow-hidden hover:shadow-xl flex flex-col justify-between p-4 '>
			<Image
				src={product.images[0]}
				alt={product.title}
				width={100}
				height={100}
				className='object-contain w-full h-40'
			/>
			<div className='flex-1 flex flex-col justify-between'>
				<h2 className='text-lg font-semibold py-4'>{product.title}</h2>
				<p className='text-gray-600 flex-1'>{product.description}</p>
				<div className='mt-4 flex items-center justify-between'>
					<span className='text-gray-800 font-semibold'>${product.price.toFixed(2)}</span>
					<button
						type='button'
						className='ml-2 bg-blue-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600'
						onClick={() => addToCart(product)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}