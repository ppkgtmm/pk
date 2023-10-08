import PropTypes from 'prop-types';

function Project(props) {
  const {
    name, cover, link, content,
  } = props;

  return (
    <div>
      <div className="flex flex-col">
        <p className="font-bold text-lg lowercase capitalize text-black">{name}</p>
        <p className="text-black">{content}</p>
        <div className="mt-2">
          <a href={link} className="not-prose uppercase border border-black text-black hover:bg-black hover:text-white capitalize px-4 py-1.5 rounded">read more</a>
        </div>
      </div>
      <div>
        <img src={cover} alt={name} />
      </div>
    </div>
  );
}
Project.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Project;
