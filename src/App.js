import { ProjectList } from "./project";
import { Cover, Footer } from "./layouts";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Cover />

      {/* <Transition show={!show}> */}
      {/* <div className="bg-black text-white px-4 md:px-12 lg:px-[20vw] xl:px-[25vw] sticky top-0">
          <div className="px-4 py-8 lg:px-8 flex justify-between items-center">
            <span className="text-2xl font-light">Pinky Gautam</span>
            <SocialList />
          </div>
        </div> */}
      <ProjectList />
      <Footer />
      {/* </Transition> */}
    </div>
  );
}

export default App;
