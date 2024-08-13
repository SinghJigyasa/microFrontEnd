

import React from 'react'
import { BrowserRouter, Link,Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import "./index.css"
import EditData from './component/EditData'
import Datafetch from './component/DataFetch'
import ReduxStore from './component/ReduxStroe'
import HighChartsExample from './component/highCharts'
import DatePickerExample from './component/CalenderComp'

const Navbar = () => {
  return (
    <BrowserRouter>
    <div className="left-design">
     <ul className='nav-design'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link> </li>
        <li><Link to='/contact'>Contact</Link> </li>
        <li><Link to='/data'>JSON Data</Link></li>
        <li><Link to='/reduxdata'>Redux Store</Link></li>
        <li><Link to='/high'>High Charts Example</Link></li>
        <li><Link to='/datepicker'>Calender</Link></li>
      </ul> 
    </div>
    
       <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/editData/:id' element={<EditData/>}/>
          <Route path='/data' element={<Datafetch/>}/>
          <Route path='/reduxdata' element={<ReduxStore/>}/>
          <Route path='/high' element={<HighChartsExample/>}/>
          <Route path='/datepicker' element={<DatePickerExample/>}/>
        </Routes> 
    </BrowserRouter>
  )
}

export default Navbar