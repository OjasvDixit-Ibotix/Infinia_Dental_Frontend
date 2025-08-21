import React from 'react'
import SearchBar from '../SearchBar'

const ProductHeaderComp = () => {
    return (
        <>
        <div className=' flex w-full  flex-col items-start gap-[24px]'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-[16px]'>
                    <div className='flex flex-col items-start self-stretch'>
                        <h1 className="text-[#444] font-normal text-[30px] leading-[36px] font-[Segoe UI Symbol]">
                            Product Catalog
                        </h1>

                        <div className='flex flex-col items-start self-stretch'>
                            <p className="text-[#444] font-normal text-[16px] leading-[24px] font-[Segoe UI Symbol]">
                                Browse our dental products and services
                            </p>

                        </div>
                    </div>
                </div>

                <div className='flex p-[10px] items-center gap-[10px] rounded-lg bg-[#444]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299Z" stroke="#EFCD78" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 22V12" stroke="#EFCD78" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.30078 7L11.0038 11.734C11.3071 11.9084 11.6509 12.0002 12.0008 12.0002C12.3507 12.0002 12.6945 11.9084 12.9978 11.734L20.7008 7" stroke="#EFCD78" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.5 4.26953L16.5 9.41953" stroke="#EFCD78" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>


            </div>

            <div className="flex w-full flex-col items-start gap-[16px]">
                <SearchBar placeholder={'Search Products...'} />
                <div className='flex items-center content-center gap-[16px] self-stretch flex-wrap'>
                    <div className='flex items-center gap-[8px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14.6654 2H1.33203L6.66536 8.30667V12.6667L9.33203 14V8.30667L14.6654 2Z" stroke="#444444" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className='flex flex-col items-start '>
                            <p class="font-segoe text-[#444] text-[14px] leading-[20px] font-normal">
                                Filters
                            </p>

                        </div>
                    </div>


                    <div class="flex flex-col justify-center items-start px-[17px] pr-[29px] py-[9px] rounded-[6px] border border-[#EFCD78] bg-white">
                        <div className='flex py-[1px] px-[0px] flex-col items-start self-stretch'>

                            <p class="text-[#444] font-normal text-[14px] leading-[14px] font-[Segoe UI Symbol]">
                                All Products
                            </p>

                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div className='flex flex-col items-start'>
              <p className="text-[#444] font-normal text-[16px] leading-[24px] font-[Segoe UI Symbol]">
                                Showing 8 of 8 products
                            </p>
        </div>
        </>
    )
}

export default ProductHeaderComp