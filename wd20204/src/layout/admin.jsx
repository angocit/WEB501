import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <h1>Đây là trang admin</h1>
    <Outlet/>
    </>
  )
}

export default AdminLayout