import Project from "./Project";
import data from "./projects.json";

function ProjectList() {
  return (
    <div className="component py-12 flex flex-col">
      <ul className="flex flex-col space-y-10 md:space-y-12">
        {data.map((value, index) => {
          return <Project {...value} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default ProjectList;
