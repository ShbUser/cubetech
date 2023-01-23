import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../axios'

function Record() {
  const [allapplist, setAllAppList] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    if (!localStorage.getItem('AdminEmail')) {
      navigate('/admin')
    }
    axios.get('admin/new_Applicants').then((response) => {
      if (response.data.status) {
        let allApplicants = response.data.newApplicants
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
              <thead className="grad ">
                <tr>

                  <th scope="col">Name</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody >
                {
                  allapplist.map((applist1) => {
                    return (
                      <tr>
                        <td>
                          {applist1.name}
                        </td>
                        <td>
                          {applist1.companyName}
                        </td>
                        <td>
                          {applist1.status === "new" &&
                            <div className="progress">
                              <div className="progress-bar bg-secondary  w-25" role="progressbar" aria-valuenow='50' aria-valuemin="0" aria-valuemax="100">Pending...</div>
                            </div>
                          }
                          {applist1.status === "Approve" &&
                            <div className="progress">
                              <div className="progress-bar bg-warning  w-50" role="progressbar" aria-valuenow='50' aria-valuemin="0" aria-valuemax="100">Processing...</div>
                            </div>
                          }

                          {applist1.status === "Approved" &&
                            <div className="progress">
                              <div className="progress-bar  w-75" role="progressbar" aria-valuenow='75' aria-valuemin="0" aria-valuemax="100">approved</div>
                            </div>
                          }

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
