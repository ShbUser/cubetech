import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div >
            <div className='loginParentDiv'>
                <form>
                    <div className=" mb-3">
                        <label >Email</label><br/>
                        <input
                            className="input"
                            type="email"
                            value={email}
                            id="fname"
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            defaultValue=""
                            required />
                        <div id="emailHelp" className='text-muted'>We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mb-3'>
                        <label >Password</label><br/>
                        <input
                            className="input"
                            type="password"
                            value={password}
                            id="lname"
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            defaultValue=""
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <br />
                </form>

                <Link to='/signup'>Create a new account ?</Link>
            </div>
        </div>
    )
}

export default Login
