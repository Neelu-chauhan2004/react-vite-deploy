import React from 'react'
import Brand1 from '../../assets/BrandLogo/Brand1.webp'
import Brand2 from '../../assets/BrandLogo/Brand2.webp'
import Brand3 from '../../assets/BrandLogo/Brand3.webp'
import Brand4 from '../../assets/BrandLogo/Brand4.webp'
import Brand5 from '../../assets/BrandLogo/Brand5.webp'
import Brand6 from '../../assets/BrandLogo/Brand6.webp'
const BrandLogo = () => {
    return (
        <>
        <div className="dark:bg-gray-900 dark:text-white">
            <div className="container py-12  ">
                <h1 className='text-center' >
                    Powering Next-Gen Companies
                </h1>
                <div className="relative overflow-hidden py-4">
                    <div className="animate-slide flex gap-12 whitespace-nowrap">
                        {/* First set of logos */}
                        {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map((brand, index) => (
                            <img key={`first-${index}`} src={brand} alt="" className="h-10 object-contain" />
                        ))}

                        {/* Duplicate set for seamless looping */}
                        {[Brand1, Brand2, Brand3, Brand4, Brand5, Brand6].map((brand, index) => (
                            <img key={`second-${index}`} src={brand} alt=""
                                className="h-10 object-contain" />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default BrandLogo