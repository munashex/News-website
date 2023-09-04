import {Outlet, useNavigate} from 'react-router-dom'  
import { useState } from 'react'



function Search() { 

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const onSubmit = () => {
    navigate(`searched/${search}`)
    }
    

  return (
    <div>
        <div className="my-9 flex justify-center"> 
            <input placeholder="search infoPulse"   
            className="border-b border-t border-l p-2 w-[70%] md:w-[50%] lg:w-[40%]  
            placeholder:text-lg placeholder:text-black 
            "
            onChange={(e) => setSearch(e.target.value)}
            /> 
            <button 
            onClick={onSubmit}
             className="border-r bg-black text-white 
             border-b border-t font-bold text-lg px-1">Search</button>
        </div>

        <Outlet/>
    </div>
  )
}

export default Search