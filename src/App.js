import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ProjectList } from "./project";
import { Cover, Footer } from "./layouts";
import { CrossIcon } from "./icons";
import "./index.css";

function App() {
  const [show, setShow] = useState(true);
  const buttonClass =
    "self-end p-4 transition ease-in-out duration-500 opacity-60 hover:opacity-100";
  const coverClass =
    "bg-black text-white flex flex-col fixed top-0 z-10 w-full";

  return (
    <div className="app">
      <ProjectList />
      <Transition
        show={show}
        leave="transition-fade"
        leaveFrom="appear"
        leaveTo="fade"
        className={coverClass}
      >
        <button className={buttonClass} onClick={() => setShow(!show)}>
          <CrossIcon />
        </button>
        <Cover />
      </Transition>
      <Footer showIcons={!show} />
    </div>
  );
}

export default App;
