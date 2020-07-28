export default function ThemeToggleButton({onClick, theme}){
    const lightTheme = {color: "#191970", backgroundColor: "white"};
    const darkTheme = {color: "pink", backgroundColor: "#282c35"};
    const currentTheme = theme ? darkTheme: lightTheme;

    return(
        <>
            <div className="container">
            <label className="toggle-container">
                <input type="checkbox" onClick={() => {onClick()}}/>
                <span className="slider"></span>
            </label>
            </div>    
            <style jsx>{`
                .container {
                    display:flex;
                    justify-content: flex-end;
                    padding-right: 2rem;
                }
                
                .toggle-container {
                    position: relative;
                    display: inline-block;
                    width: 40px;
                    height: 18px;
                    border-radius: 15px;
                }

                input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: #83D8FF;
                    border-radius: 15px;
                }

                .slider::before {
                    position: absolute;
                    content: "";
                    width: 20px;
                    height: 18px;
                    background-color: #ffbf00;
                    border-radius: 15px;
                    transition: .4s;
                    
                    
                }

                input:checked + .slider {
                    background-color: #749DD6;
                }

                input:focus + .slider {
                    box-shadow: 0px 0px 5px #90EE90;
                }

                input:checked + .slider::before {
                    background-color: white;
                    transform: translateX(20px);
                }

                input:checked ~ .light{
                    display: none;
                }
            `}</style>
            <style jsx global>{`
                body {
                    color: ${currentTheme.color};
                    background-color: ${currentTheme.backgroundColor};
                }

            `}</style>
        </>
    )
}