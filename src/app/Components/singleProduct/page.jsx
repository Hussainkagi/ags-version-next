import React from 'react'
import { BsCartCheck } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import './singleProduct.scss';
import image from '../../assets/Image.png';
import chip from '../../assets/brand.png';
import noon from '../../assets/noon.png';
import whatsapp from '../../assets/whatsapp.png';
import amazon from '../../assets/amazon.png';
import b3 from '../../assets/b3.png';
import Image from 'next/image';

const singleProduct = () => {
    return (
        <div className='single-product-main-content'>
          <div className='layout'>
            <div className='single-product-page'>
              <div className='left'>
                <Image src={image} alt='battery' />
    
                <div className='image__blocks'>
                 { [1,2,3,4].map(()=>(
                  <div className="like__icon">
                  <Image src={image} alt="" className='image__check' />
                </div>
                 ))}
    
                </div>
                
              </div>
              <div className='right'>
                <div className='offer__title'>
                  <span className='offer__chip'>10% newYear Offer</span>
                  <img src={chip} alt='' />
                </div>
    
                <div className='product__title'>
                  <div className='product__name'>
                    <span className='name'>Luminous</span>
                    <span className='price'>GPTTEX 240 AH</span>
                  </div>
    
                  <div className='like__icon'>
                    <CiHeart size={24} />
                  </div>
                </div>
    
                <div className='chips'>
                  <span className='offer__chip2'>Selling out fast</span>
                  <span className='offer__chip3'>Best in UAE</span>
                </div>
    
                <div className='product__info'>
                  <div className='info__content'>
                    <span className='info__title'>Capacity</span>
                    <span className='info__data'>35 AH</span>
                  </div>
                  <div className='info__content'>
                    <span className='info__title'>Warranty</span>
                    <span className='info__data'>3 yrs</span>
                  </div>
                  <div className='info__content'>
                    <span className='info__title'>Price</span>
                    <span className='info__data'>Wholesale Only</span>
                  </div>
                </div>
    
                <span className='divider' />
    
                <div className='product__title'>
                  <div className='product__name'>
                    <span className='vat__text'>Price inclusive of VAT</span>
                    <span className='price'>36.31 AED</span>
                  </div>
                  <div className='like__icon'>
                    <BsCartCheck size={24} />
                  </div>
                </div>
    
                <div className='brand'>
                  <div className='like__icon'>
                    <Image src={noon} alt='noon' />
                  </div>
                  <div className='like__icon'>
                    <Image src={amazon} alt='noon' />
                  </div>
                  <div className='like__icon'>
                    <Image src={b3} alt='noon' />
                  </div>
                  <div className='like__icon'>
                    <Image src={whatsapp} alt='noon' />
                  </div>
                </div>
                <span className='divider' />
    
    
                <div className="buynow__btn">
                  <button className='btn__purchase'>Buy Now</button>
                </div>
    
                
              </div>
            </div>
          </div>
        </div>
      );
}

export default singleProduct
