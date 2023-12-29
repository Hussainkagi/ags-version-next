'use client'
import React from 'react'
import image from '../../../assets/Image.png'
import './Product.scss';
import Image from 'next/image';
import {  useRouter } from 'next/navigation';

import Link from 'next/link';

const Product = () => {
  const router = useRouter();
  return (
    <div className='product-card' onClick={()=>router.push('/Components/singleProduct')}>
        <Link href={'/Components/singleProduct'}>
      <div className='thumbnail'>
       <Image src={image}/>
      </div>
        </Link>
      <div className='prod-details'>
        <span className='name'>{"Aluminous Batteries"}</span>
        <span className='price'>{'36.31 AED'}</span>
      </div>
    </div>
 
  )
}

export default Product
