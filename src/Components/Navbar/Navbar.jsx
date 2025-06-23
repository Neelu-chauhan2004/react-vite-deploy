import React from 'react'
import assets from '../../assets/Logo/logo.webp'
import DarkMode from './DarkMode'
import {HiMenuAlt3, HiMenuAlt1} from 'react-icons/hi'
import ResponsiveMenu from '../Navbar/ResponsiveMenu'
export const MenuLinks = [
  {
    id:1,
    name: "About",
    link: '#about',
  },
  {
    id:2,
    name: "Services",
    link: '#services',
  },
  {
    id:3,
    name: "Projects",
    link: '#projects',
  }
]

const Navbar = () => {
  const[showMenu, setShowMenu]=React.useState(false);
  const toggleMenu = ()=>{
    setShowMenu(!showMenu);

  }
  return (

    <>
     <nav className='bg-white dark:bg-black dark:text-white duration-300' >
        <div className="container py-3 md:py-3">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div >
                  <a href="#" className='flex items-center gap-8'>
                    < img className="w-30 h-16"src={assets} alt="Logo" />
                    <span className='text-2xl sm:text-3xl font-semibold'>Digital Agency</span>
                    
                    </a>
                </div>
                {/* Navlinks Section */}
                <div className='hidden md:block '>
                  <ul className='flex items-center gap-8'>
                    {
                      MenuLinks.map(({id, name, link}) => {
                        return (
                          <li key={id} className='cursor-pointer py-4'>
                            <a href="#" className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-500'>{name}</a>
                          </li>
                        )
                      })
                    }
                    <button className='btn-primary'>Get in Touch</button>
                    <DarkMode/>
                  </ul>
                </div>
                {/* mobile view  */}
                <div className='flex items-center gap-4 md:hidden '>
                  <DarkMode/>
                  {
                    showMenu?(
 <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer text-2xl'/>
                    ):(
 <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer text-2xl'/>
                    )
                  }
                 
                 
                </div>
            </div>
        </div>
        {/* mobile nav links */}
        <ResponsiveMenu showMenu = {showMenu} />
        </nav>   
    </>
  )
}

export default Navbar