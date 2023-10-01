import Project from './Project';
import data from './projects.json';

function ProjectList() {
  return (
    <div className="component my-16">
      <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-8 items-stretch">
        {data.map((value, index) => (
          <Project {...value} key={index} />
        ))}
        {/* <div>
          <div className="h-[260px]">
            <img src="./imgs/churn.png" alt="" />
          </div>
          <div className="my-4">
            <p className="font-bold lowercase text-lg">Bank Churn Prediction</p>
          </div>
        </div>
        <div>
          <img src="./imgs/fake-news.png" alt="" />
          <div className="my-4">
            <p className="font-bold lowercase text-lg">Fake News Detection</p>
          </div>
        </div>
        <div>
          <img src="./imgs/go-now.png" alt="" />
          <div className="my-4">
            <p className="font-bold lowercase text-lg">Vacation Venue Catalogue</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectList;
/* <div>
              <p>
                • summarizes sales, order ratings and delayed deliveries
                for selected state and month
              </p>
              <p>• Similar calculations are done for city level</p>
              <p>
                • Sales are broken down by product category for state level by default
              </p>
              <p>
                • Click a city on map to view city product category sales
              </p>
            </div> */
