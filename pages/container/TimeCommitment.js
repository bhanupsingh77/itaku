export default function TimeCommitment({onClick}){
    return(
        <>
            <div className="container">
                <h1>Time Commitment</h1>
                <div className="button-container">
                    <button value="25" onClick={(event)=>{onClick(event)}}>Max 25 Episodes</button>
                    <button value="100" onClick={(event)=>{onClick(event)}}>Max 100 Episodes</button>
                    <button value="1.797693134862315E+308" onClick={(event)=>{onClick(event)}}>100 Plus Episodes</button> 
                    <button value="" onClick={(event)=>{onClick(event)}}>X</button>
                </div>
            </div>    
            <style jsx>{`
                .container {
                    box-shadow: 1px 1px 3px #808080;
                    margin: 1rem;
                }

                .button-container {         
                    padding: 1rem;
                    display: flex;
                    justify-content: center;
                }

                h1{
                    text-align: center;
                    margin: 0;
                }

                button {
                    background-color: white;
                    border-radius: 5px;
                    border: 2px solid orange;
                    margin: 0 2px 0 2px;
                    font-weight: 600;
                }

                button:hover {
                    background-color: orange;
                }
            `}</style>    
        </>
    )
}

