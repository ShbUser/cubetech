import React from 'react'
import Header from '../Components/Header/Header';
import Post from '../Components/Post/Post'
//import { UserContext } from '../Store/Context'
// import Footer from '../Components/Footer/Footer'
function Home() {
  
  //const {user}=useContext(UserContext),{useContext}
  return (
    <div>

      <Header />
      
      {localStorage.getItem('token') && <Post />}
      
    </div>
  )
}

export default Home
