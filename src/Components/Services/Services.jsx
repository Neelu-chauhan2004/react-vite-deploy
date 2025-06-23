import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'
import { FaBullhorn } from 'react-icons/fa'	
import { FaChartLine } from 'react-icons/fa'	
import { FaMailBulk } from 'react-icons/fa'	
import { FaSearch } from 'react-icons/fa'	
import { FaUsers } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
const skillsData = [
    {
        name: "For Creators/Influencers",
        icon: <FaCameraRetro className='text-4xl text-primary' />,
        link: "#",
        description: "Amplify your personal brand and monetize your content with strategic digital marketing.",
        aosDelay: "0",
    },
     {
            name: "For Startups",
            icon: <GiNotebook className='text-4xl text-primary' />,
            link: "#",
            description: "Accelerate your brand growth with targeted digital marketing strategies.",
            aosDelay: "300",
         },
     {
            name: "For E-commerce",
            icon: <FaMobileAlt className='text-4xl text-primary' />,
            link: "#",
            description: "Drive traffic and increase conversions with data-driven e-commerce marketing.",
            aosDelay: "500",
    },
     {
            name: "For Real Estate Agents/Agencies",
            icon: <SlNote className='text-4xl text-primary' />,
            link: "#",
            description: "Generate quality leads and boost property visibility online.",
            aosDelay: "700",

    },
        {
        name: "For Healthcare Providers",
        icon: <FaBullhorn className='text-4xl text-primary' />,
        link: "#",
        description: "Enhance patient engagement with tailored healthcare digital marketing..",
        aosDelay: "0",
    },
    {
        name: "For Small and Medium-Sized Enterprises (SMEs)",
        icon: <FaChartLine className='text-4xl text-primary' />,
        link: "#",
        description: "Scale your business with cost-effective, results-driven digital marketing.",
        aosDelay: "0",
    },
    {
        name: "For B2B Companies",
        icon: <FaMailBulk className='text-4xl text-primary' />,
        link: "#",
        description: "Build trust and drive leads with strategic B2B digital marketing solutions.",
        aosDelay: "0",
    },
    {
        name: "For Local Businesses",
        icon: <FaSearch className='text-4xl text-primary' />,
        link: "#",
        description: "Increase local visibility and customer footfall with geo-targeted campaigns.",
        aosDelay: "0",
    },
    {
        name: "For Educational Institutions",
        icon: <FaUsers className='text-4xl text-primary' />,
        link: "#",
        description: "Boost enrollments and brand awareness through education-focused digital strategies.",
        aosDelay: "0",
    },
   
]
const Services = () => {
    return (<>
        <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
            <div className="containter">
                {/* Header Section */}
                <div className='pb-12 text-center space-y-3'>
                    <h1 className='text-3xl font-semibold text-violet-950 dark:text-primary'>
                        Tailored Digital Marketing Services for Every Industry
                    </h1>
                    <p>
                        Empowering creators, businesses, and organizations with customized strategies to drive growth, engagement, and success across digital platforms.
                    </p>
                </div>
                {/* Card Section */}
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
    {skillsData.map((skill) => (
        <div 
            key={skill.name} 
            className="card group relative bg-green-50/30 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 p-6 border border-green-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-400/50 overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-green-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-200/10 rounded-full blur-lg group-hover:scale-150 group-hover:opacity-30 transition-all duration-700"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                {/* Icon with pop-up effect */}
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl shadow-sm group-hover:shadow-md group-hover:scale-110 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-all duration-300 mb-4 border border-green-100 dark:border-gray-600">
                    <span className="text-2xl text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 group-hover:scale-125 transition-transform duration-300">
                        {skill.icon}
                    </span>
                </div>
                
                <h1 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">
                    {skill.name}
                </h1>
                
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {skill.description}
                </p>
                
                {/* Subtle animated underline */}
                <div className="mt-3 w-0 group-hover:w-12 h-0.5 bg-green-400 transition-all duration-500"></div>
            </div>
        </div>
    ))}
</div>
            {/* Button Section */}
            <div className='text-center mt-4 sm:mt-8'>
                <button className='btn-primary'>Learn more</button>
            </div>


        </div>
    </div >
    </>);
}


export default Services
