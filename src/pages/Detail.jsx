import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import PropTypes from "prop-types";
import contents from "../contents";

function Detail(props) {
  const { name } = props;
  const contentPath = contents[name];
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(contentPath).then((response) => response.text()).then((md) => setContent(md));
    document.title = name;
    window.scrollTo({ top: 0, left: 0 });
  });
  return (
    <article className="prose-styled">
      <Markdown>{content}</Markdown>
    </article>
  );
}

Detail.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Detail;
