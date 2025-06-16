import React from 'react'
import Home_Navbar from './components/Navbar/Home_Navbar'
// import "../src/css/navbar.css"
import Main_page from './components/Home_Page/main_page'
import Ex_Form from "./components/Form"
import Footer from './components/Footer/Footer'
import Login_navbar from './components/Navbar/Without_login_navbar'
import Sign_up from './components/Sign_up/sign_up'

export default function App() {
  return (
    <div>
      {/* <Home_Navbar /> */}
      {/* <Login_navbar /> */}
      {/* <Main_page /> */}
       <Sign_up />
      {/* <Footer /> */}
    </div>
  )
}