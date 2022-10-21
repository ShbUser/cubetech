import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../Store/Context';
function Post() {
  const [progress, setProgress] = useState('')
  let { user } = useContext(UserContext)
  useEffect(() => {
    if (user) {
      let userid = { userid: user.user._id }
      axios.post('http://localhost:3000/getStatus', userid).then((response) => {
        if (response.data.status === "new") {
          setProgress('25')
        }
        else if (response.data.status === "Processing") {
          setProgress('50')
        }
        else if (response.data.status === "approved") {
          setProgress('75')
        }
        else if (response.data.status === "completed") {
          setProgress('100')

        }
      })
    }

  })

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <img src='../../assets/images/incub.webp' alt='img' className='w-50' />

            <div className="progress w-100">
              
              {progress === '25' ? <div className="progress-bar w-25" role="progressbar" aria-valuenow='25' aria-valuemin="0" aria-valuemax="100">Pending...</div> : ''}
              {progress === '50' ? <div className="progress-bar w-50" role="progressbar" aria-valuenow='50' aria-valuemin="0" aria-valuemax="100">Under Processing...</div> : ''}
              {progress === '75' ? <div className="progress-bar w-75" role="progressbar" aria-valuenow='75' aria-valuemin="0" aria-valuemax="100">Approved</div> : ''}
              {progress === '100' ? <div className="progress-bar w-100" role="progressbar" aria-valuenow='100' aria-valuemin="0" aria-valuemax="100">Completed</div> : ''}





            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Post
