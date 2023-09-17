import { useRef } from "react";
import SocialList from "./SocialList";
import { DownIcon } from "../icons";

function Cover() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-black text-white w-full flex flex-col px-2">
      <div className="px-4 lg:px-6 mx-4 md:mx-12 lg:mx-[20vw] xl:mx-[25vw] flex flex-col margin">
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
      <button
        ref={ref}
        className="self-end p-1 opacity-60 hover:opacity-100 rounded-full py-6 px-4 display"
        onClick={handleClick}
      >
        <DownIcon />
      </button>
    </div>
  );
}

export default Cover;
