import React, { useState, useEffect } from 'react'
import axios from '../../axios'
//import { UserContext } from '../../Store/Context';, useContext
import { useNavigate } from 'react-router-dom'
function Post() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState('')
  //let { user } = useContext(UserContext) 
  useEffect(() => {

    if (!localStorage.getItem('user_id')) {
      navigate('/login')
    }


    if (localStorage.getItem('user_id')) {
      let userid = { userid: localStorage.getItem('user_id') }
      axios.post('getStatus', userid).then((response) => {
        if (response.data.status === "new") {
          setProgress('25')
        }
        else if (response.data.status === "Processing") {
          setProgress('50')
        }
        else if (response.data.status === "Approved") {
          setProgress('75')
        }
        else if (response.data.status === "Booked") {
          setProgress('100')

        }
      })
    }

  })

  return (
    <div>
      <div className='container mt-5'>
        <div className='row '>
          <div className='col-md-12'>
            <img src='../../assets/images/incub.webp' alt='img' className='w-100 h-75' />

            <div className="progress w-100 mt-5">

              {progress === '25' ? <div className="progress-bar  w-25" role="progressbar" aria-valuenow='25' aria-valuemin="0" aria-valuemax="100">Pending...</div> : ''}
              {progress === '50' ? <div className="progress-bar bg-warning w-50" role="progressbar" aria-valuenow='50' aria-valuemin="0" aria-valuemax="100">Under Processing...</div> : ''}
              {progress === '75' ? <div className="progress-bar  w-75" role="progressbar" aria-valuenow='75' aria-valuemin="0" aria-valuemax="100">Approved</div> : ''}
              {progress === '100' ? <div className="progress-bar bg-success w-100" role="progressbar" aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">Completed</div> : ''}





            </div>
           

           
          </div>
        </div>

      </div>

    </div>
  )
}

export default Post
