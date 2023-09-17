import SocialList from "./SocialList";

function Cover() {
  return (
    <div className="min-h-screen bg-black text-white w-full flex flex-col px-4 md:px-12 lg:px-[20vw] xl:px-[25vw]">
      <div className="px-6 lg:px-8 flex flex-col margin">
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
      <a
        className="self-end p-1 hover:bg-white hover:text-black rounded-full mb-8"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="icon"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}

export default Cover;
