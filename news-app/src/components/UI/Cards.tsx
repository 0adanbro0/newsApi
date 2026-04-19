import './Cards.css'

interface CardsProps {
    author?         : string,
    content?        : string,
    url             : string | null,
    title?          : string,
    publishedAt?    : string,
    timeMode        : string,
    urlToPost       : string
}

const Cards = ({urlToPost, timeMode, publishedAt = 'dont know', author = 'by noname', content = 'content not found!', url, title = 'title not found!'}:CardsProps)=>{
    return(
        <div className="news-card">
            <img
                src={url || 'https://tiven.kz/noimage.jpg'} className="card-image"
            />
            <div className={`card-content`} id={timeMode}>
                <h1 className="card-title" id={timeMode}>{title}</h1>
                <div className='info-source'>
                    <a className='source' href={urlToPost} target="_blank" rel="noopener noreferrer">open this news</a>
                </div>
                <div className="card-description" id={timeMode}>{content}</div>
                <div className='info-authorData'>
                    <p className="card-author">{author}</p>
                    <p className="card-date">{publishedAt}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;