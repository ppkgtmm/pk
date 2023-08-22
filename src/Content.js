import "./index.css";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Cover from "./Cover";
import Projects from "./Projects";
import Footer from "./Footer";

function Content() {
  const [showCover, setShowCover] = useState(true);
  return (
    <div>
      <div className="mx-4 md:mx-12 lg:mx-[20vw] xl:mx-[25vw] px-4 py-12 lg:px-8 lg:py-20 flex flex-col">
        <Projects />
      </div>
      <Transition
        show={showCover}
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="bg-black text-white flex flex-col fixed top-0 z-10 w-full"
        appear={true}
      >
        <button
          className="self-end p-4 transition ease-in-out duration-500 opacity-60 hover:opacity-100"
          onClick={() => setShowCover(!showCover)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
        <Cover />
      </Transition>
      <Footer show={!showCover} />
    </div>
  );
}

export default Content;
