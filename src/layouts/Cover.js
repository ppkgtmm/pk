function Cover() {
  return (
    <div className="bg-black text-white w-full flex flex-col">
      <div className="component flex flex-col my-16">
        <h1 className="text-[6ch] md:text-[8ch] lg:text-[9ch] font-bold leading-[1.5ch]">
          Pinky <br /> Gautam
        </h1>
        <h3 className="mt-4 text-xl text-blue-300">
          data engineer and former backend developer
        </h3>
        <p className="mt-8 md:mt-10 font-light">
          passionate about preparation of data to enable informed decision
          making and value creation with readable and maintainable code
        </p>
      </div>
    </div>
  );
}

export default Cover;
