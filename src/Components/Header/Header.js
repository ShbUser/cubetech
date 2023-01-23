import React, { useEffect, useState } from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom'
import axios from '../../axios'
//import { UserContext } from '../../Store/Context';, { useContext }
function Header() {
  //let {user} = useContext(UserContext)
  const [isNewUser, setIsNewUser] = useState('')
  useEffect(() => {
    if (localStorage.getItem('token')) {

      axios.get('isNewUser/' + localStorage.getItem('user_id')).then((response) => {

        if (response.data.stat) {
          // alert(localStorage.getItem('status'))
          // if (localStorage.getItem('status') === "rejected") {
            setIsNewUser('')

          } else {
            setIsNewUser('Application')

          // }
        }
      })
    }
  }, [])
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top border-bottom border-5">
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
                localStorage.getItem('token') ?
                  navigate('/register')
                  :
                  navigate('/')
              }}>
                {isNewUser}
              </span>

            </div>
            {
              localStorage.getItem('token') ?
                <span className='headerLogin'>

                  {`welcome ${localStorage.getItem('username')}`}
                </span>

                : <span className='headerLogin' onClick={() => {

                  navigate('/login')
                }}>Login
                </span>
            }

            {
              localStorage.getItem('token') &&
              <span className='headerLogin'
                onClick={() => {

                  localStorage.removeItem('token')
                  localStorage.removeItem('username')
                  localStorage.removeItem('user_id')
                  //setUser("")
                  navigate('/')
                }}>Logout</span>

            }
          </div>


        </div>
      </nav>
    </div>
  )
}

export default Header
