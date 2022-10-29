import { React, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Store/Context'
import axios from '../../axios'
import './Signup.css'
function Signup() {
    const [wrong, setWrong] = useState('')
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const doSignUp = (e) => {
        e.preventDefault();
        let data = { username, email, phone, password, status: 'active' }
        axios.post('doSignUp', data).then((response) => {
            
            if (response.data.exist) setWrong("Entered email is Exist !")
            else if (response.data.status) {
               
                localStorage.setItem('token',  response.data.user.token)
                localStorage.setItem('username', response.data.user.username)
                localStorage.setItem('user_id', response.data.user._id)

                let token =localStorage.getItem('token')
                let username = localStorage.getItem('username')
                let userid=localStorage.getItem('user_id')
                let userDet = { username, token,userid}
                setUser(userDet)

                navigate('/')
            }
            // setUser(response.data.user.username)
            // navigate('/')
        }).catch(error => {
            alert(error)
        })
    }

    return (
        <div>
            <div className="signupParentDiv">

                <form onSubmit={doSignUp}>
                    <label htmlFor="fname" className='mt-2'>Username</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="fname"
                        name="name"
                        defaultValue="John"
                        required
                    />
                    <br />
                    <label htmlFor="email" className='mt-3'>Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value) + setWrong("")}
                        id="fname"
                        name="email"
                        defaultValue="John"
                        required
                    />

                    <br />
                    <span className='text-danger' >{wrong}</span><br />
                    <label htmlFor="phone" className='mt-3'>Phone</label>
                    <br />
                    <input
                        className="input"
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="lname"
                        name="phone"
                        defaultValue="Doe"
                        required
                    />
                    <br />
                    <label htmlFor="password" className='mt-3'>Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="lname"
                        name="password"
                        defaultValue="Doe"
                        required
                    />
                    <br />
                    <br />
                    <button>Signup</button>
                </form>
                <Link to="/login">Login</Link>

            </div>

        </div>
    )
}

export default Signup
