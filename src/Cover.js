import "./index.css";
import Social from "./Social";

function Cover() {
  return (
    <div className="mx-4 md:mx-12 lg:mx-[20vw] xl:mx-[25vw] px-4 py-12 lg:px-8 lg:py-24 flex flex-col">
      <h1 className="text-[6ch] lg:text-[8ch] font-bold leading-[1.5ch]">
        Pinky <br /> Gautam
      </h1>
      <h3 className="mt-4 text-xl text-blue-300">
        Data Engineer and former Backend Developer
      </h3>
      <p className="mt-10 font-light mb-10">
        passionate about data preparation that facilitates informed decision
        making and value creation with readable and maintainable code
      </p>
      <Social />
    </div>
  );
}

export default Cover;
