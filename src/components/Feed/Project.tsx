import type { IProject } from '../../types'

const Project = (props: IProject) => {
  return (
    <div className="project" style={{ direction: ((props.direction && 'ltr') || 'rtl') }}>
      <div className="thumbnail">
        <img className="" src={props.thumbnail} />
      </div>
      <div className="separator"></div>
      <div className="project-content">
        <div className="heading-wrapper">
          <div className="heading">{props.heading}</div>
        </div>
        <div className="content-wrapper">
          {props.content}
        </div>
        <div className="more"><a href={props.extras.link}>{props.extras.text}</a> {props.extras.icon}</div>
      </div>
    </div>
  )
}

export default Project
