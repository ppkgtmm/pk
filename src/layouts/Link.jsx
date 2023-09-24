function Link(props) {
  return (
    <a
      className="text-white hover:bg-white hover:text-black p-3 rounded-full"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}

export default Link;
