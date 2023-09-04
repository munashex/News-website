import { useState } from 'react'
import {FaBars} from 'react-icons/fa' 
import {BsSearch} from 'react-icons/bs' 
import {AiOutlineClose} from 'react-icons/ai' 
import {Link, useLocation} from 'react-router-dom'

const Navbar =() => {

    const webLogo = 'https://res.cloudinary.com/ditls34gp/image/upload/v1693667852/Info_Pulse_1_grtlem.png'

     const [toggle, setToggle] = useState(false) 
     const openNav = () => setToggle(!toggle)  

     const location = useLocation()

     const navLinks = [{name: 'Business', path: 'business'}, 
     {name: 'Entertainment', path: 'entertainment'},  
     {name: 'Health', path: 'health'}, 
     {name: 'Science', path: 'science'}, 
     {name: 'Sports', path: 'sports'},
     {name: 'Technology', path: 'technology'}
    ]

    return (
        <div>
            {/* navbar on sm screens */}
        <div className="flex md:hidden items-center justify-between  bg-black p-3">  
            <Link to="/">
            <img src={webLogo} className="w-32"/>  
            </Link>

            <div className="flex gap-x-5">
                <button onClick={() => openNav()} className="text-white">
               {toggle ?  
               <AiOutlineClose size={30}/>
               :<FaBars size={30}/>}
                </button>
                <Link to="/search"><BsSearch size={30} color="white"/></Link>
            </div> 

        </div> 
       
          {/* navbar links on sm screens  */}
         <div className={`${toggle ? 'bg-black  md:hidden text-white p-2' : 'hidden'}`}>
          <div className="grid grid-cols-2 justify-items-start ml-2 gap-x-2  text-lg font-bold">
            {navLinks.map((link) => <Link key={link.path} to={`/${link.path}`}>{link.name}</Link>)}
          </div> 
         </div>

        {/* navbar on md and lg screens */}
         <div className='bg-black p-2 hidden md:flex justify-between lg:justify-around items-center'>  
         <Link to="/">
         <img src={webLogo} alt="pulselogo" className="w-40 hover:animate-pulse"/>  
         </Link>

         <div className="text-white text-lg flex gap-x-2 lg:gap-x-9 font-normal lg:font-bold">
         {navLinks.map((link) =>  
         <Link key={link.path} to={`/${link.path}`} className={`${location.pathname === `/${link.path}` ?  'text-[gold] border-b-2 border-b-[gold]' : 'hover:animate-pulse'}`}> 
         {link.name} 
         </Link>)}  
         <Link to="/search">
         <input className="w-24 lg:w-36 placeholder:text-black outline-none placeholder:text-center" placeholder="search"/>
          </Link>
         </div>  
         
        
         </div>

        </div>
    )
} 

export default Navbar