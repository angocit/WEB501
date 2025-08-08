import './App.css'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Add from './add'
import Edit from './Edit'
import Register from './register'
import Login from './login'

function App() {
  return (
    <>    
    <Routes>
        <Route path='/books' Component={List}/>
        <Route path='/books/add' Component={Add}/>
        <Route path='/books/edit/:id' Component={Edit}/>
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
    </Routes>
    </>
  )
}
export default App
