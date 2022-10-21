import React,{useContext} from 'react'
import Header from '../Components/Header/Header';
import Post from '../Components/Post/Post'
import { UserContext } from '../Store/Context'
// import Footer from '../Components/Footer/Footer'
function Home() {
  const {user}=useContext(UserContext)
  return (
    <div>

      <Header />
      {user && <Post />}
      
    </div>
  )
}

export default Home
