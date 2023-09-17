function Project(props) {
  return (
    <li>
      <span className="text-lg">
        <b className="font-bold">{props.name}</b>
        <span className="font-light"> • </span>
        <span className="">{props.skills}</span>
        <span className="font-light"> • </span>
        <a
          className="underline text-cyan-500"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.linkText}
        </a>
      </span>
      <p className="mt-2 mb-4 text-gray-700">{props.content}</p>
      <img src={props.image} alt={props.name + " image"} />
    </li>
  );
}

export default Project;
