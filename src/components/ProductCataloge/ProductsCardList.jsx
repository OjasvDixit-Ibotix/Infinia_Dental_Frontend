import React from 'react'
import ProductsCardListWrap from './wrapper/ProductsCardListWrap'
import image from '../../assets/svgs/WelcomePage/demoImage.svg'
import { ImplantData } from './Data/ImplantData'
import { CrownBridgeData } from './Data/CrownBridgeData'
import { PremiumLineData } from './Data/PremiumLineData'
import { SurgicalData } from './Data/SurgicalData'
import { AllOnXData } from './Data/AllOnXData'
import { DentureData } from './Data/DentureData'
import { ChairSidesData } from './Data/ChairSidesData'
import { ClearAlignerData } from './Data/ClearAlignerData'
const ProductsCardList = () => {
  return (
    <>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' >
   <ProductsCardListWrap  data={ImplantData}   name={'Implant'} image={image} desc={'High-strength zirconia crown with excellent aesthetics and biocompatibility.'} 
     price={'3,200'} noOf={'3'}
   />
    <ProductsCardListWrap data={CrownBridgeData} name={'Crown & Bridge'} image={image} desc={'Three-unit porcelain bridge with metal substructure for durability.'} 
     price={'3,200'} noOf={'5'}
   />
    <ProductsCardListWrap data={PremiumLineData} name={'Premium Line'} image={image} desc={'Complete upper and lower denture set with natural- looking teeth.'} 
     price={'3,200'} noOf={'7'}
   />
    <ProductsCardListWrap data={SurgicalData} name={'Surgical Guide (guides)'} image={image} desc={'Grade 4 titanium dental implant with superior osseointegration.'} 
     price={'3,200'} noOf={'2'}
   />
    <ProductsCardListWrap data={AllOnXData} name={'AOX (workflow/ addons)'} image={image} desc={'Custom clear aligners for orthodontic treatment with digital planning.'} 
     price={'3,200'} noOf={'10'}
   />
    <ProductsCardListWrap data={DentureData} name={'Removable (Denture)'} image={image} desc={'Precision ceramic inlay for posterior tooth restoration.'} 
     price={'3,200'} noOf={'4'}
   />
    <ProductsCardListWrap data = {ChairSidesData} name={'Chairsides'} image={image} desc={'Grade 4 titanium dental implant with superior osseointegration.'} 
     price={'3,200'} noOf={'2'}
   />
    <ProductsCardListWrap  name={'Clear Aligner'} image={image} desc={'Custom clear aligners for orthodontic treatment with digital planning.'} 
     price={'3,200'} noOf={'10'}
   />
   </div>
    </>

   
  )
}

export default ProductsCardList