import Card from './Card.js';

export default function CardBox({filteredCardsData}) {
    let infoFilledCards;
    if(filteredCardsData){
        infoFilledCards = filteredCardsData.map((elem,i)=>{
            return <Card key={i} name={elem.name} img={elem.img} seasons={elem.seasons} rating={elem.rating} episodes={elem.episodes} genre={elem.genre} status={elem.status} releaseDate={elem.releaseDate}/>    
        });
    }else{
        infoFilledCards = "loading..."
    }

    return (
        <div className="container">
            {infoFilledCards}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 3rem;
                    margin: 1rem;
                }
            `}</style>
        </div>
    )
}