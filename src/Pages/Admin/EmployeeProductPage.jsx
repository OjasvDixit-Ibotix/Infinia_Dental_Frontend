import React from 'react'
import ProductHeaderComp from '../../components/ProductCataloge/ProductHeaderComp'
import ProductsCardList from '../../components/ProductCataloge/ProductsCardList'
import ProductResourceComp from '../../components/ProductCataloge/ProductResourceComp'

const EmployeeProductPage = () => {
  return (
    <>
    <ProductHeaderComp/>
    <div className='flex flex-col gap-9'>

    <ProductsCardList/>
    <ProductResourceComp/>
    </div>

    </>
  )
}

export default EmployeeProductPage