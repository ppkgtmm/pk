import type { TContact } from '../../types'

const Contact = (props: TContact) => {
  return (
    <div className="contact">
      <div className="marker-container">
        <div className="marker">•</div>
      </div>
      <div className="info">
        <div className="icon">{props.icon}</div>
        <a className="text-wrapper" href={props.link} target="new">
          <div className="text">{props.text}</div>
        </a>
      </div>
    </div>
  )
}

export default Contact
