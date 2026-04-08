import { useState} from 'react'

interface CardsProps{
    author?:string,
    content?:string
    url:string
    title?:string
    publishedAt?:string
}


const Cards = ({publishedAt = 'dont know', author = 'by noname', content = 'content not found!', url, title = 'title not found!'}:CardsProps)=>{
    const [urlcontent, setUrlContent] = useState(url)
    return(
        <div>
            <img
                src={urlcontent}
                onError={()=>{setUrlContent(`https://tiven.kz/noimage.jpg`)}}
            />
            <h1>{title}</h1>
            <p className={`author`}>{author}</p>
            <div>{content}</div>
            <p>{publishedAt}</p>
        </div>
    )
}

export default Cards;