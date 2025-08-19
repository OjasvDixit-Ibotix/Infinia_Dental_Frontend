import React from 'react'
import EmpPromotionCardWrap from './EmpPromotionCardWrap'
import image from '../../assets/images/promotionimage.svg'

const EmpPromotionCardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <EmpPromotionCardWrap image={image} name='Zirconia Crown Special' desc='Premium quality zirconia crowns at discounted rates' />
      <EmpPromotionCardWrap image={image} name='Crown Special' desc='Premium quality zirconia crowns at discounted rates' />
      <EmpPromotionCardWrap image={image} name='Zirconia Crown Special enfuwe' desc='Premium quality zirconia crowns at discounted rates' />
      <EmpPromotionCardWrap image={image} name='Zirconia Crown Special' desc='Premium quality zirconia crowns at discounted rates' />
      <EmpPromotionCardWrap image={image} name='Zirconia Crown Special' desc='Premium quality zirconia crowns at discounted rates' />
      <EmpPromotionCardWrap image={image} name='Zirconia Crown Special' desc='Premium quality zirconia crowns at discounted rates' />
    </div>
  )
}

export default EmpPromotionCardSection
