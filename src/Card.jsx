function Card(props) {
    return (
        <div className="card" data-aos="fade-up">
            <div className="card-icon">
                <img src={props.image} alt={props.heading} />
            </div>
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
        </div>
    );
}
export default Card;