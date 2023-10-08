import { Cover, Footer } from "./components";

function Home() {
  return (
    <div>
      <Cover />
      <article className="prose-styled">
        {
          // data.map((value, index) => (
          //   <Project {...value} key={index} />
          // ))
        }
      </article>
      <Footer />
    </div>
  );
}

export default Home;
