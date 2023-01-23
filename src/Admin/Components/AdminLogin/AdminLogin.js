import {React, useState} from 'react'
import axios from '../../../axios'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './AdminLogin.css'
function AdminLogin() {
    const [wrong,setWrong]=useState('')
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const doAdminLogin=(e)=>{
        e.preventDefault();
        let data={email,password}
        axios.post('admin/doAdminLogin',data).then((response)=>{
            if(response.data.status){
                // let token=response.data.user.token
                  let admin=response.data.admin.admin
                  
                //  let adminDet={admin}
                // console.log(userDet);
                // setUser(adminDet)
                localStorage.setItem('AdminEmail', admin.email)
                navigate('/adminhome')
            }
                else setWrong('You entered wrong email or password')
            }).catch(error=>{
                alert(error)
            })
    }    


  return (
    
    <div>
       <div className='adminloginParentDiv'>
        <h5 className='text-center mt-3'>Admin</h5>
                <form onSubmit={doAdminLogin}>
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
            </div>
    </div>
  )
}

export default AdminLogin
