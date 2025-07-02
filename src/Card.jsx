function Card(props)
{
    return(
        <>
        <div className="boxset" data-aos="fade-up">
            <div className="cardbox">
                <img className="cardimg" src={props.image}></img>
                <h3 className="cardheading">{props.heading}</h3>
                <p className="carddesc">{props.desc}</p>
            </div>
        </div>
        </>
    );
}
export default Card