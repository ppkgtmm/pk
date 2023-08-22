import "./index.css";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Cover from "./Cover";

function Content() {
  const [showCover, setShowCover] = useState(true);
  return (
    <div>
      <div className="mx-4 md:mx-12 lg:mx-[20vw] xl:mx-[25vw] px-4 py-12 lg:px-8 lg:py-20 flex flex-col">
        <ul class="flex flex-col space-y-10 md:space-y-12">
          <li>
            <span class="text-lg ">
              <b>E-Commerce Dashboard</b> | Data Visualization |{" "}
              <a
                class="underline text-cyan-500"
                href="https://public.tableau.com/views/OlistDashboard_16876242836040/e-commercedashboard?:language=en-US&:display_count=n&:origin=viz_share_link"
                target="_blank"
                rel="noreferrer"
              >
                tableau dashboard
              </a>
            </span>
            <p class="mt-2 mb-4">
              {" "}
              Dashboard containing overview of sales, order ratings and delayed
              deliveries for selected state and month. Similarly, measures have
              been summarized for each city within the selected state. Lastly,
              treemap shows sales broken down by product category for the whole
              state until a city on map is clicked
            </p>
            <img src={require("./imgs/olist.png")} alt="" />
          </li>
          <li>
            <span class="text-lg ">
              <b>Customer Churn Prediction</b> | Machine Learning |{" "}
              <a
                class="underline text-cyan-500"
                href="https://github.com/ppkgtmm/churn-prediction"
                target="_blank"
                rel="noreferrer"
              >
                source code
              </a>
            </span>
            <p class="mt-2 mb-4">
              {" "}
              Web page which displays result from machine learning model trained
              to find customers who are likely to churn. Data from input file
              uploaded to the web page is transformed prior to being used for
              prediction by model selected based on recall metric
            </p>
            <img src={require("./imgs/churn.png")} alt="" />
          </li>
          <li>
            <span class="text-lg ">
              <b>Fake News Detection</b> | Machine Learning + NLP |{" "}
              <a
                class="underline text-cyan-500"
                href="https://github.com/ppkgtmm/fake-news-detection"
                target="_blank"
                rel="noreferrer"
              >
                source code
              </a>
            </span>
            <p class="mt-2 mb-4">
              {" "}
              Web page serving a machine learning model trained to classify
              between real and fake news. Model behind the web page has its
              hyperparameters tuned after an algorithm was finalized depending
              on performance on preprocessed news data
            </p>
            <img src={require("./imgs/fake-news.png")} alt="" />
          </li>
          <li>
            <span class="text-lg ">
              <b>Emotion-based Song Recommender</b> | Programming |{" "}
              <a
                class="underline text-cyan-500"
                href="https://github.com/ppkgtmm/emotion-based-song-recommender"
                target="_blank"
                rel="noreferrer"
              >
                source code
              </a>
            </span>
            <p class="mt-2 mb-4">
              {" "}
              Program which recommend songs from selected emotion based on song
              lyrics and words related to the emotion. Also, users can list
              songs or emotions, see song lyrics, add new emotion categories
              with related words and remove songs from particular emotion
              categories
            </p>
            <img src={require("./imgs/em-so-rec.jpg")} alt="" />
          </li>
          <li>
            <span class="text-lg ">
              <b>Travel Destination Catalogue</b> | Frontend Development |{" "}
              <a
                class="underline text-cyan-500"
                href="https://go-now.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
            </span>
            <p class="mt-2 mb-4">
              Catalogue displaying vacation venues categorized by season they
              are best to be visited in as alternatives to those who are
              planning for vacation. Additional information about a destination
              e.g. hotels, restaurants, things to do etc. can be found from
              tripadvisor by clicking on the card
            </p>
            <img src={require("./imgs/go-now.png")} alt="" />
          </li>
        </ul>
      </div>
      <Transition
        show={showCover}
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="bg-black text-white flex flex-col fixed top-0 z-10"
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
    </div>
  );
}

export default Content;
