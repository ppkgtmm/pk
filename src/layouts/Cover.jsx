function Cover() {
  return (
    <div className="bg-black w-full flex flex-col text-white">
      <div className="component flex flex-col my-12 md:my-20">
        <h1 className="text-[6ch] md:text-[8ch] lg:text-[9ch] font-bold leading-[1.5ch]">
          Pinky
          {' '}
          <br />
          {' '}
          Gautam
        </h1>
        <p className="mt-10 font-light text-lg px-[14px] border-l-[3px] border-white">
          data engineer who is eager to learn and implement highly maintainable solutions
          to support informed decision making and bring about positive impacts
        </p>
      </div>
    </div>
  );
}

export default Cover;
