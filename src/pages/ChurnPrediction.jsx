import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import contentPath from '../contents/churn-prediction.md';

function ChurnPrediction() {
  const [content, setContent] = useState('');
  useEffect(() => {
    fetch(contentPath).then((response) => response.text()).then((md) => setContent(md));
    document.title = 'churn prediction';
    window.scrollTo({ top: 0, left: 0 });
  });
  return (
    <article className="prose-styled">
      <Markdown>{content}</Markdown>
    </article>
  );
}
export default ChurnPrediction;
