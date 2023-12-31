import { Routes, Route, Navigate } from 'react-router-dom'



import Chat from './pages/Chat'
import Register from './pages/register'
import Login from './pages/Login'
import Header from './components/Header'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to="/" />} />

      </Routes>
    </>
  )
}

export default App
