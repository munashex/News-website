import Navbar from './components/Navbar' 
import Home from './Pages/Home' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Technology from './Pages/Technology' 
import Business from './Pages/Business' 
import Entertainment  from './Pages/Entertainment' 
import Health from './Pages/Health' 
import Science from './Pages/Science' 
import Sports from './Pages/Sports' 
import Search from './Pages/Search' 
import Searched from './Pages/Searched' 
import NotFound from './Pages/NotFound'

function App() {
  return (
    <BrowserRouter>  
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>  
      <Route path="business" element={<Business/>}/> 
      <Route path="entertainment" element={<Entertainment/>}/> 
      <Route path="health" element={<Health/>}/> 
      <Route path="science" element={<Science/>}/> 
      <Route path="sports" element={<Sports/>}/> 
      <Route path="technology" element={<Technology/>}/> 
      <Route path="search" element={<Search/>}>
        <Route path="searched/:id" element={<Searched/>}/>
      </Route> 
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
