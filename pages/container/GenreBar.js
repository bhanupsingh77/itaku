export default function GenreBar({onClick}){
    return(
        <>
            <div className="container">
                <h1>Genre</h1>
                <div className="button-container">
                    <button value="Action" onClick={(event)=>{onClick(event)}}>Action</button>
                    <button value="Adventure" onClick={(event)=>{onClick(event)}}>Adventure</button>
                    <button value="Comedy" onClick={(event)=>{onClick(event)}}>Comedy</button>
                </div>
            </div>    
            <style jsx>{`
                .container {
                    box-shadow: 1px 1px 3px #808080;
                    margin: 2rem;
                }

                .button-container {         
                    padding: 1rem;
                    display: flex;
                    justify-content: center;
                }

                h1{
                    text-align:center;
                    margin: 0;
                }

                button {
                    border-radius: 5px;
                    border: 2px solid grey;
                    margin: 0 2px 0 2px;
                }

                button:hover {
                    background-color: orange;
                }
            `}</style>    
        </>
    )
}