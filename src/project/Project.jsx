import PropTypes from 'prop-types';

function Project(props) {
  const {
    name, image,
  } = props; /* skills, link, linkText, content, */

  return (
    <div className="">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <p className="font-bold text-lg lowercase my-2">{name}</p>
        <a href="/" className="text-neutral-900 border border-neutral-900 hover:bg-neutral-900 hover:text-white capitalize px-3 py-1.5 rounded">read more</a>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  // skills: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired,
  // linkText: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
