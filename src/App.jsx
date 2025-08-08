import { useEffect, useState } from 'react'
import './App.css'
import CustomButton from './button'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import AddCategory from './pages/addCategory'
import Register from './pages/register'
import Login from './pages/login'

function App() {
   return (
    <>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/category' Component={Category}/>
        <Route path='/category/add' Component={AddCategory}/>
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
    </Routes>
    </>
  )
}
export default App
