import Profile from './Profile'
import Project from './Project'
import { projects } from '../../constants/projects'

const Feed = () => {
  return (
    <div>
      <div className="header"></div>
      <div className="content">
        <h1 className="title">Personal Portfolio</h1>
        <Profile />
        <div className="projects">
          <h1>{"💯 What I've worked on"}</h1>
          {projects.map((project, idx) => <Project {...project} key={idx} direction={idx % 2 === 0} />)}
        </div>
      </div>
    </div>
  )
}

export default Feed
