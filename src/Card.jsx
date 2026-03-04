function Card({ heading, image, desc }) {
    return (
        <div className="card-v2">
            <div className="card-image-box">
                <img src={image} alt={heading} loading="lazy" />
            </div>
            <div className="card-content-v2">
                <h3 className="card-heading-v2">{heading}</h3>
                <p className="card-desc-v2">{desc}</p>
            </div>
        </div>
    );
}

export default Card;