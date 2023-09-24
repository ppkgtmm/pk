import SocialList from "./SocialList";

function Cover() {
  return (
    <div className="color text-white w-full flex flex-col">
      <div className="component flex flex-col my-12 md:my-20">
        <h1 className="text-[6ch] md:text-[8ch] lg:text-[9ch] font-bold leading-[1.5ch]">
          Pinky <br /> Gautam
        </h1>
        <h3 className="mt-4 text-xl text-blue-300">
          data engineer from web development background
        </h3>
        <p className="mt-8 md:mt-10 font-light">
          eager to learn and implement highly maintainable solutions that
          support informed decision making and bring about positive impacts
        </p>
        <div className="mt-6 md:hidden">
          <SocialList />
        </div>
      </div>
    </div>
  );
}

export default Cover;
