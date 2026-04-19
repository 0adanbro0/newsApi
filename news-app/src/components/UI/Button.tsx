interface ButtonMenu{
    content   : string,
    onclick   : (arg:string)=>void,
    className : string,
    prompt    : string
}

const ButtonMenu = ({content, onclick, className, prompt}:ButtonMenu)=>{
    return(
        <>
            <button onClick={() => onclick(prompt)} className={`button ${className}`}>{content}</button>
        </>
    )
}

export default ButtonMenu