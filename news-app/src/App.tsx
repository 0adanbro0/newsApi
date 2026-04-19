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
  const [throwPrompt, setThrowPrompt] = useState<string>('последнее')

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

  return (
    <div className={`main`} id={timeMode}>
      <div className='center-block'>

        <div className="menu">
          <input value={valuePrompt} type="text" onChange={ (e)=> { setValuePrompt( e.target.value ) } }/>

          <button className={`throwPrompt`} onClick={()=>{setThrowPrompt(valuePrompt)}}>send</button>

          <button className={`throwPrompt`} onClick={()=>{setThrowPrompt('последнее')}}>последнее</button>
          <button className={`throwPrompt`} onClick={()=>{setThrowPrompt('спорт')}}>Спорт</button>
          <button className={`throwPrompt`} onClick={()=>{setThrowPrompt('программирование')}}>Айти</button>

          <div className="buttonTimeMode">
            <button className="blob-btn" onClick={()=>{setTimeMode(timeMode == `day` ? `night` : `day`)}}>
              change mode
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </button>
            <br/>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>

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
