import { React, useState } from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'
function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <div className="signupParentDiv">
                
                <form >
                    <label htmlFor="fname">Username</label>
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
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="fname"
                        name="email"
                        defaultValue="John"
                        required
                    />
                    <br />
                    <label htmlFor="phone">Phone</label>
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
                    <label htmlFor="password">Password</label>
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
