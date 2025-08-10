import React from 'react'
import ProductsCardListWrap from './wrapper/ProductsCardListWrap'
import image from '../../assets/svgs/WelcomePage/demoImage.svg'
const ProductsCardList = () => {
  return (
    <>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' >
   <ProductsCardListWrap   name={'Implant'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'5'}
   />
    <ProductsCardListWrap name={'Crown & Bridge'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'5'}
   />
    <ProductsCardListWrap name={'Premium Line'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'5'}
   />
    <ProductsCardListWrap name={'Surgical Guide (guides)'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'5'}
   />
    <ProductsCardListWrap name={'AOX (workflow/ addons)'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'5'}
   />
    <ProductsCardListWrap name={'Removable (Denture)'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'5'}
   />
    <ProductsCardListWrap name={'Removable (Denture)'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'5'}
   />
    <ProductsCardListWrap name={'Removable (Denture)'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'5'}
   />
   </div>
    </>

   
  )
}

export default ProductsCardList