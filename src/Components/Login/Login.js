import { React, useState,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import { UserContext } from '../../Store/Context'
function Login() {
    const {setUser}=useContext(UserContext)
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [wrong, setWrong] = useState('')
const doLogin=(e)=>{
    e.preventDefault();
    let data={email,password}
    axios.post('http://localhost:3000/doLogin',data).then((response)=>{
        if(response.data.status){
            let token=response.data.user.token
            let user=response.data.user.user
            let userDet={user,token}
            console.log(userDet);
            setUser(userDet)
            navigate('/')
        }
            else setWrong('You entered wrong email or password')
        }).catch(error=>{
            alert(error)
        })
}    

    return (
        <div >
            <div className='loginParentDiv'>
                <form onSubmit={doLogin}>
                    <div className=" mb-3">
                        <label >Email</label><br/>
                        <input
                            className="input"
                            type="email"
                            value={email}
                            id="fname"
                            onChange={(e) => setEmail(e.target.value)+setWrong('')}
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
                            onChange={(e) => setPassword(e.target.value)+setWrong('')}
                            name="password"
                            defaultValue=""
                            required />
                    </div>
                    <label className='text-danger'>{wrong}</label>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <br />
                </form>

                <Link to='/signup'>Create a new account ?</Link>
            </div>
        </div>
    )
}

export default Login
