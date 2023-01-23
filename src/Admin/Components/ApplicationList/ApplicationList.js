import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import './ApplicationList.css'


function ApplicationList() {
  const navigate = useNavigate()
  const [newapplist, setNewAppList] = useState([])
  const [afternewapplist, setAfterNewAppList] = useState([])
  const [details, setDetails] = useState([])
  const [action, setAction] = useState('')
  const [decline, setDecline] = useState('')

  useEffect(() => {
    if (!localStorage.getItem('AdminEmail')) {
      navigate('/admin')
    }
    axios.get('admin/new_Applicants').then((response) => {
      if (response.data.status) {
        let newApplicants = response.data.newApplicants
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

  }, [action, decline])


  const getDetails = (id) => {
    setDetails('')
    newapplist.filter((obj) => {
      if (obj._id === id) {
        setDetails(obj)
      }
    })
  }


  const getDetailsApprove = (id) => {
    setDetails('')
    afternewapplist.filter((obj) => {
      if (obj._id === id) {
        setDetails(obj)
      }
    })
  }


  const process = (id, act) => {
    swal({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let data = { id, act }    
          axios.post('admin/setStatus', data).then((response) => {
            setAction("toUpdate")
          })
          swal("", {
            timer:1000,
            buttons:false,
            icon: "success",
          }).then(
            function () { },
            // handling the promise rejection
            function (dismiss) {
                if (dismiss === 'timer') {
                    //console.log('I was closed by the timer')
                }
            }
        )
        } 
      })

  }
  const declineComp = (regid, userid) => {
    swal({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let data = {
            regid: regid,
            userid: userid
          }
          axios.post('admin/decline_company', data).then((response) => {
            if (response.data.decline) {
              setDecline("Declined")
      
            }
          })
          swal("Deleted", {
            timer:1000,
            buttons:false,
            icon: "success",
          }).then(
            function () { },
            // handling the promise rejection
            function (dismiss) {
                if (dismiss === 'timer') {
                    //console.log('I was closed by the timer')
                }
            }
        )
        } 
      })

  }

  return (
    <div>
      <div className='container'>
        <h2>New Applicant List</h2>
        <div className='row'>

          <div className='col-12 col-md-12 col-lg-12 col-xl-12'>

            <table className="table mt-3 text-center" id="Applicants">
              <thead className="grad">
                <tr>

                  <th scope="col">Name</th>
                  <th scope="col">Company Name</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody >
                {newapplist.map((applist1) => {
                  return (
                    <tr>

                      <td>

                        {applist1.name}
                      </td>
                      <td>
                        {applist1.companyName}
                      </td>
                      <td>
                        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {

                          getDetails(applist1._id)
                        }}>Open</button>
                      </td>
                      <td>
                        <button className='btn btn-warning' onClick={() => {

                          setAction("Approve")

                          //{ afternew = "Processing" }
                          process(applist1._id, "Approve")
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
              <thead className="grad ">
                <tr>

                  <th scope="col">Name</th>
                  <th scope="col">Company Name</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody >
                {afternewapplist.map((applist1) => {
                  return (
                    <tr>
                      <td>
                        {applist1.name}
                      </td>
                      <td>
                        {applist1.companyName}
                      </td>
                      <td>
                        {
                          applist1.status !== 'Booked' ?
                            <button className='btn btn-outline-primary' onClick={() => {
                              {
                                applist1.status === 'Approve' &&
                                  process(applist1._id, "Approved")
                              }
                              {
                                setAction("Approved")
                              }
                            }}>{applist1.status}</button> :
                            <span className='text-success'>Booked</span>
                        }
                      </td>
                      <td>
                        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                          getDetailsApprove(applist1._id)
                        }} >Open</button>
                      </td>
                      <td>
                        <button className='btn btn-secondary' onClick={() => {

                          setDecline("Are you sure")
                          declineComp(applist1._id, applist1.id)
                        }}>Decline</button>
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
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Company Deatils</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <label>Name: </label><br />
              <label>{details.name}</label><br /><br />
              <label>Email: </label><br />
              <label>{details.email}</label><br /><br />
              <label>State: </label><br />
              <label>{details.state}</label><br /><br />
              <label>Country: </label><br />
              <label>{details.country}</label><br /><br />
              <label>Company Name: </label><br />
              <label>{details.companyName}</label><br /><br />

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationList
