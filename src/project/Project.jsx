import PropTypes from 'prop-types';

function Project(props) {
  const {
    name, skills, link, linkText, content, image,
  } = props;

  return (
    <li>
      <span className="text-lg">
        <b className="font-bold">{name}</b>
        <span className="font-light"> || </span>
        {skills}
        <span className="font-light"> || </span>
        <a
          className="underline text-cyan-500"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {linkText}
        </a>
      </span>
      <p className="mt-2 mb-4">{content}</p>
      <img src={image} alt={`${name} image`} />
    </li>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
