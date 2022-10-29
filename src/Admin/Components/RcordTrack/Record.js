import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Record() {
  const [allapplist, setAllAppList] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    if (!localStorage.getItem('AdminEmail')) {
      navigate('/admin')
    }
    axios.get('http://localhost:3000/new_Applicants').then((response) => {
      if (response.data.status) {
        let allApplicants = response.data.newApplicants
        // console.log(newApplicants, "llllll");
        setAllAppList(allApplicants)

      }
    })

  }, [])

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
                  <th scope="col">Pending</th>
                  <th scope="col">Approved</th>
                  <th scope="col">Completed</th>
                </tr>
              </thead>
              <tbody>
                {
                  allapplist.map((applist1) => {
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
                          {applist1.status === "new"  || applist1.status === "Approve" &&
                            <div className="progress">
                              <div className="progress-bar bg-warning  w-50" role="progressbar" aria-valuenow='50' aria-valuemin="0" aria-valuemax="100">Pending...</div>
                            </div>
                          }
                        </td>
                        <td>
                          {applist1.status === "Approved" &&
                            <div className="progress">
                              <div className="progress-bar  w-75" role="progressbar" aria-valuenow='75' aria-valuemin="0" aria-valuemax="100">approved</div>
                            </div>
                          }
                        </td>
                        <td>
                          {applist1.status === "Booked" &&
                            <div className="progress ">
                              <div className="progress-bar bg-success  w-100" role="progressbar" aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">Completed</div>
                            </div>
                          }
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

export default Record
