import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import swal from '@sweetalert/with-react'

function ApplicationList() {
  const navigate = useNavigate()
  const [newapplist, setNewAppList] = useState([])
  const [afternewapplist, setAfterNewAppList] = useState([])
  // const [afternew, setAfterNew] = useState('')
  let afternew = ""
  useEffect(() => {
    axios.get('http://localhost:3000/new_Applicants').then((response) => {
      if (response.data.status) {
        let newApplicants = response.data.newApplicants
        // console.log(newApplicants, "llllll");

        setNewAppList(newApplicants.filter((obj) => {

          if (obj.status === 'new')
            return obj
        }))

        setAfterNewAppList(newApplicants.filter((obj) => {

          if (obj.status !== 'new')
            return obj
        }))
      } else setNewAppList([])



    })
  }, [])

  const process = (id) => {
    alert("Move", afternew)
    let data = { id, afternew }
    axios.post('http://localhost:3000/setStatus', data).then((response) => {
      alert("Done")
      navigate('/applicationlist')

    })
  }

  return (
    <div>
      <div className='container'>
        <h2>New Applicant List</h2>
        <div className='row'>

          <div className='col-12 col-md-12 col-lg-12 col-xl-12'>

            <table className="table mt-3 text-center" id="Applicants">
              <thead className="bg-success ">
                <tr>
                  <th scope="col">Sl</th>
                  <th scope="col">Company name</th>
                  <th scope="col">Company Details</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {newapplist.map((applist1) => {
                  return (
                    <tr>
                      <td>

                      </td>
                      <td>

                        {applist1.companyName}
                      </td>
                      <td>
                        {applist1.dCompany}
                      </td>
                      <td>
                        <button className='btn btn-primary' >Open</button>
                      </td>
                      <td>
                        <button className='btn btn-warning' onClick={() => {
                          process(applist1._id, "Processing")
                          //    swal({
                          //     title: "Are you ready to move",
                          //     text: "",
                          //     icon: "warning",
                          //     button: true,
                          //     dangerMode: false,
                          // })
                          //     .then(async (willDelete) => {
                          //         if (willDelete) {

                          //         }
                          //     })
                        }}>Pending</button>
                      </td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>


        </div>
      </div>

      <div className='container mt-5'>
        <h2>Pending Applicant List</h2>
        <div className='row'>

          <div className='col-12 col-md-12 col-lg-12 col-xl-12'>

            <table className="table mt-3 text-center" id="Applicants">
              <thead className="bg-success ">
                <tr>
                  <th scope="col">Sl</th>
                  <th scope="col">Company name</th>
                  <th scope="col">Company Details</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {afternewapplist.map((applist1) => {
                  return (
                    <tr>
                      <td>

                      </td>
                      <td>

                        {applist1.companyName}
                      </td>
                      <td>
                        {applist1.dCompany}
                      </td>
                      <td>
                        <button className='btn btn-primary' >Open</button>
                      </td>
                      <td>

                        <button className='btn btn-white' onClick={() => {

                          { applist1.status === "approved" ? afternew = 'completed' : afternew = 'approved' }
                          process(applist1._id)
                          //    swal({
                          //     title: "Are you ready to move",
                          //     text: "",
                          //     icon: "warning",
                          //     button: true,
                          //     dangerMode: false,
                          // })
                          //     .then(async (willDelete) => {
                          //         if (willDelete) {

                          //         }
                          //     })
                        }}>{applist1.status === "approved" ? "Complete" : applist1.status === "Processing" ? "Approve" : "Completed"}</button>
                      </td>
                      <td>
                        <button className='btn btn-secondary' >Decline</button>
                      </td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>


        </div>
      </div>

    </div>
  )
}

export default ApplicationList
