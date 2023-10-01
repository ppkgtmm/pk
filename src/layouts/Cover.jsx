function Cover() {
  return (
    <div className="w-full flex flex-col">
      <div className="component flex flex-col my-12 md:my-20">
        <h1 className="text-[6ch] md:text-[8ch] lg:text-[9ch] font-bold leading-[1.5ch]">
          Pinky
          {' '}
          <br />
          {' '}
          Gautam
        </h1>
        <blockquote className="mt-8 quote">
          data engineer who is eager to learn and implement highly maintainable solutions
          that support informed decision making and bring about positive impacts
        </blockquote>
      </div>
    </div>
  );
}

export default Cover;
