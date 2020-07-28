import Card from './Card.js';

export default function CardBox({filteredCardsData}) {
    if(filteredCardsData){
        const infoFilledCards = filteredCardsData.map((elem,i)=>{
            return <Card key={i} name={elem.name} img={elem.img} review={elem.review} rating={elem.rating} episodes={elem.episodes} genre={elem.genre}/>    
        });
    }else{
        <h1>Loading...</h1>
    }

    return (
        <div className="container">
            {infoFilledCards}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    gap: 3rem;
                    margin: 1rem;
                    padding: 2rem;
                   
                }

            `}</style>
        </div>
    )
}