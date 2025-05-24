function Tile({imgPath, altTekst, title, text}) {
    return (
        <section>
            <img src={imgPath} alt={altTekst}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    );
}

export default Tile;


