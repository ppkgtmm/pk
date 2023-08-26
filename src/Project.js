import "./index.css";

function Project(props) {
  return (
    <li>
      <span className="text-lg">
        <b>{props.name}</b> | {props.skills} |{" "}
        <a
          className="underline text-cyan-500"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.linkText}
        </a>
      </span>
      <p className="mt-2 mb-4">{props.content}</p>
      <img src={props.image} alt={props.name + " image"} />
    </li>
  );
}

export default Project;
