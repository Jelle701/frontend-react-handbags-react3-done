function Product({ labeltekst, imgPath, altTekst, tasNaam, price }) {
    return (
        <article>
            <span>{labeltekst}</span>
            <img src={imgPath} alt={altTekst} />
            <p>{tasNaam}</p>
            <h4>€{price}</h4>
        </article>
    );
}

export default Product;
