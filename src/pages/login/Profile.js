import { Link } from 'react-router-dom'
import { useAuthCtx } from 'components/context/authContext'
import CategoryNav from 'components/Navbar/NavbarItem/CategoryNav'
import InfoNav from 'components/Navbar/NavbarItem/InfoNav'
import './profile.css'
import { Footer } from 'components'
import { useVaspacxTitle } from 'components/DocumentTitle/useVaspacxTitle'

const Profile = () => {
  useVaspacxTitle('Profile')
    const {user,email} = useAuthCtx();
  return (
    <>
    <InfoNav/>
    <CategoryNav/>
    <div className='profile-section'>
   <div className='profile-cont'>
      <div className='profile-layout'>
        <span>
            <p>User Name :</p>
        </span>
        <span>
            <p>{user}</p>
        </span>
      </div>
      <div className='profile-layout'>
        <span>
            <p>User emailId :</p>
        </span>
        <span>
            <p>{email}</p>
        </span>
      </div>
      <div className='profile-layout'>
        <span>
            <p>Address :</p>
        </span>
        <span>
            <p>579/12 , 3rd floor , shivaji nagar, pune</p>
        </span>
      </div>
      <div className='profile-layout'>
        <span>
            <p>Contact :</p>
        </span>
        <span>
            <p>0987654321</p>
        </span>
      </div>
   </div>
   <Link to="/catalog">
          <button className="button-shopping">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Continue
            Shoppping
          </button>
        </Link>
   </div>
   <Footer/>
   </>
  )
}

export default Profile