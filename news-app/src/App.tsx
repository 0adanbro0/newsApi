import { useState, useEffect } from 'react'
import Api from '../api/news-api'
import Cards from './components/UI/Cards'
import './App.css'

interface ObjectsArray{
  urlToImage  : string | null,
  publishedAt : string,
  description : string,
  author      : string,
  content     : string,
  url         : string
}

function App() {
  const [articles, setArticles] = useState<ObjectsArray[]>([]);
  const [timeMode, setTimeMode] = useState<string>(`day`)
  const [valuePrompt, setValuePrompt] = useState<string>('')
  const [throwPrompt, setThrowPrompt] = useState<string>('')

  useEffect(() => {
    const loadData = async () => {
      try {
        if(!throwPrompt) return
        
        const data = await Api(throwPrompt);
        setArticles(data);
      } catch (error) {
        console.error("Дебаг: ошибка загрузки", error);
      }
    };

    loadData();
  }, [throwPrompt]);
  console.log(articles)

  return (
    <div className={`main`} id={timeMode}>
      <div className='center-block'>

        <input value={valuePrompt} type="text" onChange={(e)=>{setValuePrompt(e.target.value)}}/>
        <button className='throwPrompt' onClick={()=>{setThrowPrompt(valuePrompt)}}>send</button>
        <button className='OptionButtonTimeMode' onClick={()=>{setTimeMode(timeMode == `day` ? `night` : `day`)}}>change mode</button>

        <div className='cards-block'>
          {articles.length > 0 ? 
            (
              articles.map((item) => (
                <Cards urlToPost={item.url} timeMode={timeMode} key={item.url} publishedAt={item.publishedAt} title={item.description} author={item.author} url={item.urlToImage} content={item.content} />
              ))
            ) : 
            (
              <p className="font-light text-gray-400">Loading stories...</p>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default App
