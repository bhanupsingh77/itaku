import NavBar from './NavBar.js';

export default function Layout({onSearch, searchBarDisplay}){
    return(
        <>
            <NavBar onSearch={onSearch} searchBarDisplay={searchBarDisplay}/>
        </>
    )
}
        
    





