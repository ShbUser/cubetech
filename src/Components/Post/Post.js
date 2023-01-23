import React, { useState, useEffect } from 'react'
import axios from '../../axios'
//import { UserContext } from '../../Store/Context';, useContext
import { useNavigate } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './Post.css'
function Post() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState('0')
  const [progressName, setProgressName] = useState('')
  // const [userid,setUserId]=useState({})

  //let { user } = useContext(UserContext) 
  useEffect(() => {

    if (!localStorage.getItem('user_id')) {
      navigate('/login')
    }

    if (localStorage.getItem('user_id')) {
      let userid = { userid: localStorage.getItem('user_id') }
      //alert(userid)
      axios.get('isRejected/' + userid.userid).then((response) => {
        console.log(response.data.reject);
        if (response.data.reject === "rejected") {

          setProgressName('Sorry !... You are rejected.')
        }
      })

      if (progressName === '') {
        axios.post('getStatus', userid).then((response) => {
          if (response.data.status === "new") {
            setProgress('25')
            setProgressName('Pending...')
          }
          else if (response.data.status === "Approve") {
            setProgress('50')
            setProgressName('Processing...')
          }
          else if (response.data.status === "Approved") {
            setProgress('75')
            setProgressName('Approved')
          }
          else if (response.data.status === "Booked") {
            setProgress('100')
            setProgressName('Booked')

          }
        })
      }
    }

  })



  return (
    <div>
      <div className='container mt-5'>
        <div className='row '>
          <div className='col-md-12'>
            <div className='row text-center '>
              <span className=' progressBarLabel'>{progressName} </span>
            </div>

            <div className='progressBar'>

              <CircularProgressbar

                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                  strokeLinecap: 'round',
                  pathTransitionDuration: 3,
                  pathColor: `rgba(62, 152, 199)`,
                  textColor: 'black',
                  trailColor: 'red',
                  backgroundColor: '#3e98c7',
                })}
              />;
            </div>

          </div>
        </div>

      </div >


    </div>
  )
}

export default Post
