// import { Cover, Footer, Content } from "../components";
import Social from "../components/social";

function Home() {
  return (
    <div>
      <div className="bg-black">
        <div className="py-[32px] md:py-[26px] px-[15px] md:px-[60px] mx-auto text-white max-w-screen-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-['Figtree'] whitespace-nowrap font-medium">Pk&apos;s Site</h1>
            <div className="min-w-[60px]" />
            <Social />
          </div>
        </div>
      </div>
      <div className="my-[28px] px-[15px] md:px-[60px] mx-auto max-w-screen-xl">
        {/* <div className="flex md:flex-col justify-center items-center space-x-4 md:space-x-0
        w-max bg-black py-4 px-12 rounded-lg">
          <div className="uppercase text-lg font-light text-white p-2">projects</div>
          <div className="uppercase text-lg font-light text-white p-2">articles</div>
          <div className="uppercase text-lg font-light text-white p-2">resume</div>
        </div> */}
        <ul className="text-center uppercase text-gray-400/60 flex md:justify-evenly overflow-auto no-scrollbar space-x-4 my-4 md:my-12">
          <li className="group w-full p-2 rounded-sm">
            <a href="/" className="px-4 group-hover:text-gray-400">projects</a>
            {/* <hr className="border-gray-400 border-opacity-50 group-hover:border-gray-400" /> */}
          </li>
          <li className="bg-black text-white w-full p-2 rounded-sm">
            <a href="/" className="active" aria-current="page">articles</a>
            {/* <hr className="border-blue-600 mt-1" /> */}
          </li>
          <li className="group w-full p-2 rounded-sm">
            <a href="/" className="group-hover:text-gray-400 px-4">resume</a>
            {/* <hr className="border-gray-400 border-opacity-50 group-hover:border-gray-400" /> */}
          </li>
        </ul>
      </div>
      {/* <ul className="flex justify-center uppercase space-x-4 text-zinc-500 font-light">
        <li>projects</li>
        <li>articles</li>
      </ul> */}
      {/*
      {/* <Cover />
      <Content />
      <Footer /> */}
    </div>
  );
}

export default Home;
