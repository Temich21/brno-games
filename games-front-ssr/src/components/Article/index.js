const Article = (props) => {
  const { newsItem } = props;
  const { Title, Text } = newsItem.attributes;

  return <article>текст новости: {Title}</article>;
};

export default Article;
