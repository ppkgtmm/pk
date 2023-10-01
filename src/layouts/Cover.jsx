function Cover() {
  return (
    <div className="w-full flex flex-col bg-neutral-900">
      <div className="component flex flex-col my-12 md:my-20">
        <h1 className="text-[6ch] md:text-[8ch] lg:text-[9ch] font-bold leading-[1.5ch] text-white">
          Pinky
          {' '}
          <br />
          {' '}
          Gautam
        </h1>
        <p className="border-l-[2px] pl-4 border-l-neutral-100/75 mt-10 text-lg font-light text-neutral-100/75">
          data engineer who is eager to learn and implement highly maintainable solutions
          that support informed decision making and bring about positive impacts
        </p>
      </div>
    </div>
  );
}

export default Cover;
