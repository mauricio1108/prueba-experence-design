import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../components/Login/Login'
import Succes from '../components/Succes/Succes'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={"/login"} />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/succes' element={<Succes />} />
    </Routes>
  )
}

export default Router