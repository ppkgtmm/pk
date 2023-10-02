import PropTypes from 'prop-types';

function Project(props) {
  const {
    name, image, link,
  } = props; /* skills, linkText, content, */

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <p className="font-bold text-lg lowercase my-2">{name}</p>
        <a href={link} className="border border-[#101010] hover:bg-[#101010] hover:text-white capitalize px-4 py-1.5 rounded">read more</a>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  // skills: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  // linkText: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
