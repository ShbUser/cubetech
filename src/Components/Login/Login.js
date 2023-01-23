import { React, useState, useContext, useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axios'
import swal from 'sweetalert';
import Spinner from '../Spinner';
//import { baseUrl } from '../../constants/constants'
import './Login.css'
import { UserContext } from '../../Store/Context'

function Login() {
    function reducer(state = false, action) {
        switch (action.type) {
            case "showLoader":
                return { isFetching: true }

            case "hideLoader":
                return { isFetching: false }
            default:
                return 0
        }
    }
    const initialState = { isFetching: false };
    const [state, dispatch] = useReducer(reducer, initialState)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [wrong, setWrong] = useState('')


    const doLogin = (e) => {
        dispatch({ type: "showLoader" })
        e.preventDefault();

        let data = { email, password }
        axios.post(`doLogin`, data).then((response) => {
            if (response.data.status) {

                localStorage.setItem('token', response.data.user.token)
                localStorage.setItem('username', response.data.user.user.username)
                localStorage.setItem('user_id', response.data.user.user._id)
                //localStorage.setItem('status', response.data.user.user.status)

                let token = localStorage.getItem('token')
                let username = localStorage.getItem('username')
                let userid = localStorage.getItem('user_id')
                let userDet = { username, token, userid }
                setUser(userDet)
                dispatch({ type: "hideLoader" })
                swal({
                    title: "Success !",
                    text: "",
                    icon: "success",
                    timer: 1000,
                    buttons: false,
                }).then(
                    function () { },
                    // handling the promise rejection
                    function (dismiss) {
                        if (dismiss === 'timer') {
                            //console.log('I was closed by the timer')
                        }
                    }
                )
                navigate('/')

            }

            else setWrong('You entered wrong email or password')
        }).catch(error => {
            alert(error)
        })
    }

    return (
        <div >

            <div className='loginParentDiv'>
                <form onSubmit={doLogin}>
                    <div className=" mb-3">
                        <label >Email</label><br />
                        <input
                            className="input"
                            type="email"
                            value={email}
                            id="fname"
                            onChange={(e) => setEmail(e.target.value) + setWrong('')}
                            name="email"
                            defaultValue=""
                            required />
                        <div id="emailHelp" className='text-muted'>We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mb-3'>
                        <label >Password</label><br />
                        <input
                            className="input"
                            type="password"
                            value={password}
                            id="lname"
                            onChange={(e) => setPassword(e.target.value) + setWrong('')}
                            name="password"
                            defaultValue=""
                            required />
                    </div>
                    <label className='text-danger'>{wrong}</label>
                    <button type="submit" className="btn btn-primary">
                        {
                            state.isFetching ?
                                <Spinner /> : ""
                        }

                        Login</button>
                    <br />
                </form>

                <Link to='/signup'>Create a new account ?</Link>
            </div>
        </div>
    )
}

export default Login
