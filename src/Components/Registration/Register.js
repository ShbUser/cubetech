import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    //let [applied,setApplied]=useState(false)
    let [companyName, setComapanyName] = useState('')
    // let [dTeam, setDTeam] = useState('')
    // let [dCompany, setDCompany] = useState('')
    // let [dProblemSolve, setDProblemSolve] = useState('')
    // let [unique, setUnique] = useState('')
    // let [valueProposition, setValueProposition] = useState('')
    // let [competitorsAndAdvantage, setCompetitorsAndAdvantage] = useState('')
    // let [revenueModel, setRevenueModel] = useState('')
    // let [marketSize, setMarketSize] = useState('')
    // let [marketPlan, setMarketPlan] = useState('')
    // let [proposal, setProposal] = useState('')
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

        // dTeam,
        // dCompany,

        // dProblemSolve,
        // unique,
        // valueProposition,
        // competitorsAndAdvantage,
        // revenueModel,
        // marketSize,
        // marketPlan,
        // proposal
        else {

            let data = {
                id: localStorage.getItem('user_id'),
                name,
                email,
                state,
                country,
                companyName,
                // dProblemSolve,
                // unique,
                status: 'new'
                // valueProposition,
                // competitorsAndAdvantage,
                // revenueModel,
                // marketSize,
                // marketPlan,
                // proposal
            }


            let config = ""
            config = { headers: { 'authorization': 'Bearer ' + localStorage.getItem('token') } }
            axios.post('doRegister', data, config).then((response) => {
                if (response.data.status) {

                    navigate('/')
                }
            }).catch(error => {
                alert(error)
            })
        }
    }

    return (
        <div className=''>
            <div className='container '>

                <div className='row '><br />

                    <h3 className='text-center text-primary mt-5 pt-5'>Application Form</h3>
                    <hr className='grad'></hr>
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


                            </div>


                            {/* <div className='RegisterFormTextarea mt-5'>
                                <div>
                                    <label>Describe Your Team And Backgound</label>
                                    <textarea value={dTeam} onChange={(e) => { setDTeam(e.target.value) }} className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>

                                <label>Describe Your Company And Products</label>
                                <textarea value={dCompany} onChange={(e) => { setDCompany(e.target.value) }} className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />


                                <label>Describe The Problem Your Are Trying To Solve</label>
                                <textarea type="email" value={dProblemSolve} onChange={(e) => { setDProblemSolve(e.target.value) }} className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />


                                <label>What is Unique About Your solution</label>
                                <textarea type="text" value={unique} onChange={(e) => { setUnique(e.target.value) }} className="form-control mb-3" id="exampleInputPassword1" />

                                <label>What is Your value Propositions For Customer</label>
                                <textarea type="text" value={valueProposition} onChange={(e) => { setValueProposition(e.target.value) }} className="form-control mb-3" id="exampleInputPassword1" />

                                <label>Who Are Your Competitors And What is Competative Advantage</label>
                                <textarea type="text" value={competitorsAndAdvantage} onChange={(e) => { setCompetitorsAndAdvantage(e.target.value) }} className="form-control mb-3" id="exampleInputPassword1" />


                                <label >Explain Your Revenue Model </label>
                                <textarea type="text" value={revenueModel} onChange={(e) => { setRevenueModel(e.target.value) }} className="form-control mb-3" id="exampleInputPassword1" />

                                <label >What is Potential Market Size Of The Product</label>
                                <textarea type="text" value={marketSize} onChange={(e) => { setMarketSize(e.target.value) }} className="form-control mb-3" id="exampleInputPassword1" />

                                <label >How Do You Market or Plan To Market Your Product And Services </label>
                                <textarea type="text" value={marketPlan} onChange={(e) => { setMarketPlan(e.target.value) }} className="form-control mb-3" id="exampleInputPassword1" />


                                <label >Detailed Business Proposal</label>
                                <textarea type="text" value={proposal} onChange={(e) => { setProposal(e.target.value) }} className="form-control mb-3" id="exampleInputPassword1" /> */}


                            <button type='submit' className="grad text-white  mb-3">Submit</button>

                            {/* </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
