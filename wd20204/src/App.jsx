import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TinhTong } from './services/caculator'
import { getData } from './services/product'
import { Route, Routes } from 'react-router-dom'
import Add from './Add'
import Edit from './Edit'
import ListProduct from './ListProduct'
import Search from './Search'
import Detail from './Detail'
import Home from './Home'
import ClientLayout from './layout/client'
import AdminLayout from './layout/admin'

function App() {
  return (
    <Routes>
            <Route path='/' Component={ClientLayout}>
                <Route path='/' Component={Home}/>
                <Route path='/list' Component={ListProduct}/>
                <Route path='/search' Component={Search}/>
                <Route path='/detail/:id' Component={Detail}/>
            </Route>
            <Route path='/admin' Component={AdminLayout}>
                <Route path='add' Component={Add}/>
                <Route path='edit/:id' Component={Edit}/>
            </Route>  
        </Routes>
  )
}
export default App
