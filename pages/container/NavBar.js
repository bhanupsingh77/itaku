import Link from 'next/link';

export default function NavBar() {
    return(
        <div className="container">
            <Link href="#"><a>ITAKU</a></Link>
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
            `}</style>
        </div>
    )
}