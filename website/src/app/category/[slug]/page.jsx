"use client"
import { websiteBaseUrl } from '@/app/config/config'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SubCategory() {
  let {slug}=useParams()

  console.log(slug)



  let [parentData,setParentData]=useState(null)
  let [subcategoryData,setSubcategoryData]=useState([])
  useEffect(()=>{
    if(slug!==undefined){
      axios.get(websiteBaseUrl+"collections/sub-category/"+slug)
      .then((res)=>{
        if(res.data.status){
          setParentData(res.data.mainCategory)
          setSubcategoryData(res.data.subCategoryData)
        }
      })
    }
   
  },[slug])
  
  
  return (
    <div>
      <section className='w-full mt-10'>
        {parentData  
          ?
              <div className='h-full  relative'>
              <img className='md:block hidden w-full h-[50vh]' src="/images/banner.webp" alt="Banner" />
              <img className='md:hidden mt-10 block w-full h-[50vh]' src="/images/BannerMobile.webp" alt="Banner" />
              <div className='absolute z-[9999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                  <h2 className='text-[44px] md:text-[78px] tracking-tighter font-semibold leading-tight  text-white md:text-black'> {parentData.categoryName}</h2>
                  <h3 className='text-[20px] md:text-black text-white md:text-[30px] font-medium tracking-tight'>
                  {parentData.categoryDescription}
                  </h3>
                  
              </div>
            
          </div>
            :
            ''
        
        
        }
       
    </section>
    <section className='max-w-[1460px] mx-auto py-[50px]'>
        <h3 className='md:text-[32px] text-[22px] font-medium'>Featured Categories</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 md:space-y-0 xs:space-y-8 space-y-12 py-[50px] md:gap-5 gap-3'>
            
            {subcategoryData.map((items,index)=>{
                return(
                  <div className='cursor-pointer '>
                    <div className=' w-full h-full'>
                        <img className='w-full h-full object-cover' src="/images/womensDenim.webp" alt="Womens Denim" />
                    <h5 className='text-[15px] mt-2 font-semibold'>
                    <Link href={`/category/${slug}/${items.slug}`}> {items.subCategoryName}  </Link> 
                    </h5>
                    </div>
                </div>
                )
            })}
          
           
        </div>
    </section>   

    </div>
  )
}
