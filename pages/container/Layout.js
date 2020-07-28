import NavBar from './NavBar.js';
import ThemeToggleButton from './ThemeToggleButton.js';



 
export default function Layout({onSearch, onClick, theme, searchBarDisplay}){
    return(
        <>
            <NavBar onSearch={onSearch} searchBarDisplay={searchBarDisplay}/>
            <ThemeToggleButton onClick={onClick} theme={theme}/>
      
        </>
    )
}
        
    





