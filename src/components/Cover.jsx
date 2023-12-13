import Social from "./social";

function Cover() {
  return (
    <div className="bg-black w-full flex flex-col text-white min-h-[75vh] md:min-h-[80vh]">
      <div className="component flex flex-col my-auto py-20">
        <h1 className="text-[6ch] md:text-[8ch] lg:text-[9ch] font-bold leading-[1.5ch]">
          Pinky
          {" "}
          <br />
          {" "}
          Gautam
        </h1>
        <p className="my-[5vh] md:my-12 font-light md:text-lg">
          data engineer who is eager to learn and implement highly maintainable solutions
          that support informed decision making and bring about positive impacts
        </p>
        <Social />
      </div>
    </div>
  );
}

export default Cover;
