import Contact from './Contact'
import { contact } from '../../constants/projects'

const Profile = () => {
  return (
    <div className="profile">
      <div className="avatar-wrapper">
        <img className="avatar" src="avatar.png" />
      </div>
      <div className="separator"></div>
      <div className="bio">
        <div className="intro">
          {"Hey there 👋 I'm Pinky Gautam - a data engineer with 2+ years of professional experience in IT industry"}
        </div>
        {contact.map((contact, idx) => <Contact {...contact} key={idx} />)}
      </div>
    </div>
  )
}

export default Profile
