import React from 'react'
import BlogCard from './BlogCard'
import Img1 from '../../assets/blog/img1.jpg'
import Img2 from '../../assets/blog/img2.jpg'
import Img3 from '../../assets/blog/img3.jpg'
import Img4 from '../../assets/blog/img4.jpg'


const BlogsData = [

  {
    id: 1,
    image: Img1,
    title: "Why Hridaan Digital Innovations is the Best Digital Marketing Company in Ghatkopar",
    description: "Very few people know that digital marketing is a game changer, and those who know it, use digital marketing services properly and more than that. Digital marketing is used in every type of business like education industry, health care, ecommerce, real estate and many other industries they are using digital marketing services to beat competitors. This said, with the advent of Internet usage, consumers now search for products and services online-to discover them, generate them, and purchase them. This state of affairs has made digital marketing a compulsion for businesses who want to remain relevant and competitive.", // (e-commerce store)
    author: "Hridaan Digital" ,
    date: "July 13, 2024" ,

  },
   {
    id: 2,
    image: Img2,
    title: "Top Trends in the Digital Marketing Industry for 2025: Staying",
    description: "In today's rapid business environment, the importance of a digital marketing company cannot be underestimated. Our digital marketing agency provides solutions according to the top marketing strategies of 2025, which helps brands stay on relevant strategies and rank ahead of competitors.", // (e-commerce store)
    author: "Hridaan Digital" ,
    date: "February 8, 2025" ,

  },
   {
    id: 3,
    image: Img3,
    title: "Your Trusted Digital Marketing Service Provider in Mumbai – Hridaan",
    description: "Millions of businesses operate in the city, but it is the establishments that foster a strong online presence- overtly or covertly- that have successfully stayed afloat. Digital marketing is the key to reaching audiences, creating awareness, and generating sales. From small startups to larger enterprises, the right digital marketing strategy is that which encompasses wider business goals and guarantees success in the competitive market on the assumption that the digital marketing strategy in itself would be made current and competent.", // (e-commerce store)
    author: "Hridaan Digital" ,
    date: "February 7, 2025" ,

  },
  {
    id: 4,
    image: Img4,
    title: "Top Digital Marketing Agency in Mumbai – Hridaan Digital Innovations",
    description: "Mumbai is the city of dreams, where a thousand commercial activities take place in almost every industry. Today, when millions are searching for products and services in the virtual world, digital presence has become an essential requirement rather than just an option-anyway; that's when Hridaan Digital Innovations, which stands as theai best digital marketing agency in Mumbai, comes in. With years of experience and proven success, we are the trusted partner to take you on the road to online success.", // (e-commerce store)
    author: "Hridaan Digital" ,
    date: "February 4, 2025" ,

  },
]
const BlogsComp = () => {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-950 dark:text-white py-10 pb-14'>
        <div className="container">
            <h1 className='my-8 border-l-8 border-primary/50 pl-2 text-5xl font-bold'>
                Our Blogs
            </h1>
            {/* Blogs Card */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                BlogsData.map((blog )=>(
                  <BlogCard key={
                    blog.id
                  }{...blog}/>

                ))
              }
              </div>
              <div className='text-center '>
                <button className='btn-primary'>
                  View All Posts
                </button>
              </div>
        </div>
    </div>
    </>
  )
}

export default BlogsComp