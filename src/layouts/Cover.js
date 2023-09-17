import SocialList from "./SocialList";

function Cover() {
  return (
    <div className="min-h-screen bg-black text-white w-full flex flex-col">
      <div className="mx-4 md:mx-12 lg:mx-[20vw] xl:mx-[25vw] px-6 lg:px-8 flex flex-col margin">
        <h1 className="text-[6ch] md:text-[8ch] lg:text-[9ch] font-bold leading-[1.5ch]">
          Pinky <br /> Gautam
        </h1>
        <h3 className="mt-4 text-xl text-blue-300">
          data engineer {"&"} former backend developer
        </h3>
        <p className="mt-10 font-light mb-10">
          passionate about data preparation that facilitates informed decision
          making and value creation with readable and maintainable code
        </p>
        <SocialList />
      </div>
    </div>
  );
}

export default Cover;
