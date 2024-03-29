import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from './App';
import reportWebVitals from './reportWebVitals'
import Home from './pages/home/Home'
import SignUp from './pages/sign-up/SignUp'
import SignIn from './pages/sign-in/SignIn'
import ForgotPassword from './pages/forgot-password/ForgotPassword'

document.body.className = 'font-Kanit'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route exact path='/sign-up' element={<SignUp />} />
        <Route exact path='/sign-in' element={<SignIn />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
