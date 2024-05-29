import React from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Login from './components/login/Login'
import ReactBoostrap from './components/ReactBoostrap'
import Register from './components/register/Register'
import Admin from './components/admin/Admin'
export default function App() {
  return (
    <div>
      App
      <Main></Main>
      <Header></Header>
      <Login></Login>
      <ReactBoostrap></ReactBoostrap>
      <Register></Register>
      <Admin></Admin>
    </div>
  )
}
