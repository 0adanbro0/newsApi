interface Button{
    content   : string,
    onclick   : ()=>void,
    className : string,
    timeMode  : string,
}

const Button = ({content, onclick, className, timeMode}:Button)=>{
    return(
        <>
            <button onClick={onclick} className={`button ${className} ${timeMode}`}>{content}</button>
        </>
    )
}

export default Button