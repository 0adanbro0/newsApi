import { useState, useEffect } from 'react'
import Api from '../api/news-api'
import Cards from './components/UI/Cards'

function App() {
 const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await Api();
        setArticles(data);
      } catch (error) {
        console.error("Дебаг: ошибка загрузки", error);
      }
    };

    loadData();
  }, []);
  console.log(articles)

  return (
    <>
    {articles.length > 0 ? (
        articles.map((item) => (
          <Cards key={item.urlToImage} publishedAt={item.publishedAt} title={item.description} author={item.author} url={item.urlToImage} content={item.content} />
        ))
      ) : (
        <p className="font-light text-gray-400">Loading stories...</p>
      )}
    </>
  )
}

export default App
