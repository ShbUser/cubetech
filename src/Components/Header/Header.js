import React from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom'
function Header() {
  
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom border-5">
        <div className="container-fluid">
          <h3>CUBETECH</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">

              </li>
            </ul>
            <div>
              <span className='headerLogin me-5' onClick={() => {
                navigate('/')
              }}>
                Home
              </span>

              <span className=' headerLogin ms-5' onClick={() => {
                navigate('/register')
              }}>
                Register
              </span>
            </div>
            <span className='headerLogin'
              onClick={() => {
                navigate('/login')
              }}>Login
            </span>
          </div>


        </div>
      </nav>
    </div>
  )
}

export default Header
