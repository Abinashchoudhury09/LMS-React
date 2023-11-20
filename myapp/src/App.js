import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signa from './Signa'
import Home from './Component/Home'
import BookList from './Component/Book'
import Authors from './Component/Author'
import Categories from './Component/Categories'
import Publishers from './Component/Publisher'
import Signin from './Component/Signin'
import Navbarhome from './Component/Navbarhome'
import AddBook from './Component/Add-book'
import AuthorForm from './Component/Add-author'
import AddCategory from './Component/Add-category'
import AddPublisher from './Component/Add-publishers'
import UpdateBook from './Component/Update-book'
import UpdateAuthor from './Component/Update-author'
import UpdateCategory from './Component/Update-categories'
import UpdatePublisher from './Component/Update-publisher'

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
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Navbarhome' element={<Navbarhome/>}/>
        <Route path='/Add-book' element={<AddBook/>}/>
        <Route path='/Add-author' element={<AuthorForm/>}/>
        <Route path='/Add-category' element={<AddCategory/>}/>
        <Route path='/Add-publishers' element={<AddPublisher/>}/>
        <Route path='/Update-book' element={<UpdateBook/>}/>
        <Route path='/Update-author' element={<UpdateAuthor/>}/>
        <Route path='/Update-categories' element={<UpdateCategory/>}/>
        <Route path='/Update-publisher' element={<UpdatePublisher/>}/>

      
    
    </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App