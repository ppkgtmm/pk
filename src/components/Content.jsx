import data from "../contents/projects.json";

function Content() {
  return (
    <article className="prose-styled">
      {
        data.map(
          ({
            name, cover, link, content,
          }, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <p className="font-bold text-lg md:text-xl lowercase capitalize text-black">{name}</p>
                <p className="text-black">{content}</p>
                <div className="mt-2">
                  <a
                    href={link}
                    className="not-prose uppercase border border-black text-black hover:bg-black \
                    hover:text-white capitalize px-4 py-1.5 rounded"
                  >
                    read more
                  </a>
                </div>
              </div>
              <div>
                <img src={cover} alt={name} />
              </div>
            </div>
          ),
        )
      }
    </article>
  );
}

export default Content;
