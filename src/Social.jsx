function Social(props)
{
    return(
        <>
        <div className="socialcontainer">
            <div className="socialmedia">
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </div>
        </div>
        
        </>
    );
}

export default Social