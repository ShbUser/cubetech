import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
//import { UserContext } from '../../Store/Context' useContext, useEffect 
import axios from '../../axios'
import './Register.css'

function Register() {

    //const { user } = useContext(UserContext)

    const navigate = useNavigate()
    let [name, setSubName] = useState('')
    let [email, setEmail] = useState('')
    let [state, setState] = useState('')
    let [country, setCountry] = useState('')
    let [companyName, setComapanyName] = useState('')

    let [errorName, setErrorName] = useState('')
    let [errorEmail, setErrorEmail] = useState('')
    let [errorStae, setErrorState] = useState('')
    let [errorCountry, setErrorCountry] = useState('')
    let [errorCompName, setErrorCompName] = useState('')



    const doRegister = (e) => {
        e.preventDefault();
        if (name === '') setErrorName(' field is required')
        else if (email === '') setErrorEmail(' field is required')
        else if (state === '') setErrorState(' field is required')
        else if (country === '') setErrorCountry(' field is required')
        else if (companyName === '') setErrorCompName(' field is required')

        else {

            let data = {
                id: localStorage.getItem('user_id'),
                name,
                email,
                state,
                country,
                companyName,
                status: 'new'
            }


            let config = ""
            config = { headers: { 'authorization': 'Bearer ' + localStorage.getItem('token') } }
            axios.post('doRegister', data, config).then((response) => {
                if (response.data.status) {
                    swal({
                        title: "Success!",
                        text: "Application added",
                        icon: "success",
                        timer: 1000,
                       buttons:false
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
    }).catch (error => {
        alert(error)
    })
}
    }

return (
    <div className=''>
        <div className='container '>

            <div className='row '><br />

                <h3 className='text-center text-primary mt-5 pt-5'>Application Form</h3>
                
                <form onSubmit={doRegister}>
                    <div className='mt-3 col-12 col-md-12 col-lg-12 col-xl-12 mb-auto '>
                        <div className='RegisterForm'>
                            <label >Name </label>
                            <span className='text-danger mt-3 '>{errorName}</span>
                            <input value={name} type="text" onChange={(e) => {
                                setSubName(e.target.value)
                                setErrorName('')
                            }} className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />


                            <label>Email address</label>
                            <span className='text-danger mt-3 '>{errorEmail}</span>
                            <input type="email" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                                setErrorEmail('')
                            }} className="form-control mb-3 " id="exampleInputEmail2" aria-describedby="emailHelp" />


                            <label>State</label>
                            <span className='text-danger mt-3 '>{errorStae}</span>
                            <input type="text" className="form-control mb-3" value={state} onChange={(e) => {
                                setState(e.target.value)
                                setErrorState('')
                            }} id="exampleInputEmail3" aria-describedby="emailHelp" />


                            <label>Country</label>
                            <span className='text-danger mt-3 '>{errorCountry}</span>
                            <input type="text" className="form-control mb-3" value={country} onChange={(e) => {
                                setCountry(e.target.value)
                                setErrorCountry('')
                            }} id="exampleInputEmail4" aria-describedby="emailHelp" />


                            <label>Company Name</label>
                            <span className='text-danger mt-3 '>{errorCompName}</span>
                            <input value={companyName} onChange={(e) => {
                                setComapanyName(e.target.value)
                                setErrorCompName('')
                            }} className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            
                            <button type='submit' className="grad text-white">Submit</button>
                        </div>
                        


                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default Register
