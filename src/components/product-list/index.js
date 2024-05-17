'use client'

import { useRouter } from "next/navigation"

export default function ProductList({allProducts}) {

    const products = 
        <ul>
            {
                allProducts.map((productItem) => (
                    <li onClick={() => router.push(`/products/${productItem.id}`)} key={productItem.id}>{productItem.title}</li>
                ))
            }
        </ul>
   

    const noProducts = <h3>No Products</h3>
  
   
    
    const router = useRouter();
 
    return <>
        { allProducts && allProducts.length ? <>{products}</> : <>{noProducts}</>}
    </>
}