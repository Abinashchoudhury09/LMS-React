import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signa from './Signa'
import Home from './Component/Home'
import BookList from './Component/Book'
import Authors from './Component/Author'
import Categories from './Component/Categories'
import Publishers from './Component/Publisher'

 const App=()=> {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
      
      
        <Route path='/' element={<Home/>}/>
        <Route path='/Book' element={<BookList/>}/>
        <Route path='/Author' element={<Authors/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Publisher' element={<Publishers/>}/>
      
    
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App