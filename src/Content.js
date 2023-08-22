import "./index.css";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Cover from "./Cover";

function Content() {
  const [showCover, setShowCover] = useState(true);
  return (
    <div>
      <Transition
        className="bg-black text-white flex flex-col"
        show={showCover}
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button
          className="self-end p-4"
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
      <Transition
        show={!showCover}
        enter="transition-opacity duration-600"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="absolute top-0"
      >
        Hello
      </Transition>
    </div>
  );
}

export default Content;
