const Card = ({name, img, review, rating, episodes, genre}) => {
    return (
        <div className="container">
            <img src={img} alt="loading"/>
            <div className="container-text">
                <h2>{name}</h2>
                <p>review: {review}</p>
                <p>rating: {rating}</p>
                <p>genre: {genre}</p>
                <p>episodes: {episodes}</p>
            </div>
            <style jsx>{`
                .container {
                    box-shadow: 1px 1px 3px #808080;  
                    transition: transform .2s;
                }

                .container:hover{
                    transform: scale(1.02);
                }

                img {
                    width: 100%;
                    height: 350px;
                    border: 3px solid black;
                    box-sizing: border-box;
                }

                .container-text {
                    text-align: center;
                    font-family: sans-serif, Arial, Helvetica;
                    text-transform: capitalize;
                    font-weight: 600;
                }
            `}</style>
        </div>
    )
} 

export default Card;