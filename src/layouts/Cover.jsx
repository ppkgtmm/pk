function Cover() {
  return (
    <div className="w-full flex flex-col bg-zinc-900 text-white">
      <div className="component flex flex-col my-12 md:my-20">
        <h1 className="text-[6ch] md:text-[8ch] lg:text-[9ch] font-bold leading-[1.5ch]">
          Pinky
          {' '}
          <br />
          {' '}
          Gautam
        </h1>
        <p className="mt-10 text-lg text-zinc-300 opacity-0.4">
          data engineer who is eager to learn and implement highly maintainable solutions
          that support informed decision making and bring about positive impacts
        </p>
      </div>
    </div>
  );
}

export default Cover;
