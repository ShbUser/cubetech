import { React, useState } from 'react'
import './Register.css'

function Register() {
    let [name, setSubName] = useState('')
    let [email, setEamil] = useState('')
    let [state, setState] = useState('')
    let [country, setCountry] = useState('')
    //let [applied,setApplied]=useState(false)
    let [companyName, setComapanyName] = useState('')
    let [dTeam, setDTeam] = useState('')
    let [dCompany, setDCompany] = useState('')
    let [dProblemSolve, setDProblemSolve] = useState('')
    let [unique, setUnique] = useState('')
    let [valueProposition, setValueProposition] = useState('')
    let [competitorsAndAdvantage, setCompetitorsAndAdvantage] = useState('')
    let [revenueModel, setRevenueModel] = useState('')
    let [marketSize, setMarketSize] = useState('')
    let [marketPlan, setMarketPlan] = useState('')
    let [proposal, setProposal] = useState('')
    let [Error,setError]=useState('')

    function apply(){
        if((name,
        email,
        state,
        country,
        dTeam,
        dCompany,
        companyName,
        dProblemSolve,
        unique,
        valueProposition,
        competitorsAndAdvantage,
        revenueModel,
        marketSize,
        marketPlan,
        proposal)==''){

        setError('All fields are required')
    }
}



    return (
        <div className='bg-light'>
            <div className='container '>
                
                <div className='row '><br/>

                    <h3 className='text-center text-primary mt-5 pt-5'>Registeration Form</h3>
                    <hr className='text-danger'></hr>
                    
                    <div className='mt-3 col-12 col-md-12 col-lg-12 col-xl-12 mb-auto '>
                        <div className='RegisterForm'>
                            <label >Name</label>
                            <input value={name} type="text" onChange={(e) => { setSubName(e.target.value) }} className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />


                            <label>Email address</label>
                            <input type="email" value={email} onChange={(e) => { setEamil(e.target.value) }} className="form-control mb-3 " id="exampleInputEmail2" aria-describedby="emailHelp" />


                            <label>State</label>
                            <input type="text" className="form-control mb-3" value={state} onChange={(e) => { setState(e.target.value) }} id="exampleInputEmail3" aria-describedby="emailHelp" />


                            <label>Country</label>
                            <input type="text" className="form-control mb-3" value={country} onChange={(e) => { setCountry(e.target.value) }} id="exampleInputEmail4" aria-describedby="emailHelp" />


                            <label>Company Name</label>
                            <input value={companyName} onChange={(e) => { setComapanyName(e.target.value) }} className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>


                        <div className='RegisterFormTextarea mt-5'>
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
                            <textarea type="text" value={proposal} onChange={(e) => { setProposal(e.target.value) }} className="form-control mb-3" id="exampleInputPassword1" />
                            <p className='text-danger mt-3 '>{Error}</p>
                            <button type="submit " onClick={()=>{ apply()}} className="btn btn-primary mb-3 w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
