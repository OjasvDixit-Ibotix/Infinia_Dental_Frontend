import React from 'react'
import ProductHeaderComp from '../../components/ProductCataloge/ProductHeaderComp'
import ProductsCardList from '../../components/ProductCataloge/ProductsCardList'
import ProductResourceComp from '../../components/ProductCataloge/ProductResourceComp'

const EmployeeProductPage = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-2 w-full'>
      <ProductHeaderComp/>
      <ProductsCardList/>
      <ProductResourceComp/>
    </div>
  )
}

export default EmployeeProductPage