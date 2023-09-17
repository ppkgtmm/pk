import { useState } from "react";
import { ProjectList } from "./project";
import { Cover, Footer } from "./layouts";
import { Transition } from "@headlessui/react";
import { CrossIcon } from "./icons";
import "./index.css";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="app">
      <Transition
        className="min-h-screen bg-black text-white w-full flex flex-col px-2"
        show={show}
      >
        <button
          className="self-end p-1 opacity-60 hover:opacity-100 rounded-full absolute top-0 mt-2"
          href="/"
          onClick={() => setShow(!show)}
        >
          <CrossIcon />
        </button>
        <Cover />
      </Transition>
      <Transition show={!show}>
        <ProjectList />
        <Footer />
      </Transition>
    </div>
  );
}

export default App;
