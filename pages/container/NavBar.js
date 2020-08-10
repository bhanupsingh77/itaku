import Link from 'next/link';


export default function NavBar({onSearch, searchBarDisplay}) {
    const searchBarDisplayCssProp = searchBarDisplay ? "visible" : "hidden";
    return(
        <div className="container">
            <Link href="/"><a>ITAKU</a></Link>
            <Link href="/about"><a>About</a></Link>
            <input className="searchBar" type="text" placeholder="Search..." onChange={(event)=>{onSearch(event)}}/>
            <style jsx>{`
                .container {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    height: 2rem;
                    padding: .3rem;
                    z-index: 1;
                    background-color: black;
                    box-shadow: 0px .5px 7px black;  
                    display: flex;
                    justify-content: space-evenly;
                    font-size: 1.6rem;
                    font-family: sans-serif, Arial, Helvetica;

                }

                a{
                    color: white;
                }

                a:hover{
                    color: #adafff;
                }

                .searchBar {
                    visibility: ${searchBarDisplayCssProp};
                }
            `}</style>
        </div>
    )
}