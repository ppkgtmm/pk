import PropTypes from "prop-types";

function Link(props) {
  const { to, children } = props;

  return (
    <a
      className="text-white hover:bg-white hover:text-black p-2 md:p-3 rounded-full"
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
