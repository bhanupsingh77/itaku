import Layout from './container/Layout.js';
import CardBox from './container/CardBox.js';
import GenreBar from './container/GenreBar.js';
import {Component} from 'react';


class Index extends Component {
  constructor(props){
    super(props)
    this.state = {cardsData: [
      {name: "naruto", img: "img/naruto.jpg", rating: "9", genre: "comedy", review: "abc", episodes: "250"},
      {name: "bleach", img: "img/bleach.jpg", rating: "9.1", genre: "action", review: "xyz", episodes: "112"},
      {name: "gurrenLagann", img: "img/gurrenLagann.jpg", rating: "8", genre: "adventure", review: "pqz", episodes: "25"},
      {name: "naruto", img: "img/naruto.jpg", rating: "9", genre: "comedy", review: "abc", episodes: "250"},
      {name: "bleach", img: "img/bleach.jpg", rating: "9.1", genre: "action", review: "xyz", episodes: "112"},
      {name: "naruto", img: "img/naruto.jpg", rating: "9", genre: "comedy", review: "abc", episodes: "250"},
      {name: "bleach", img: "img/bleach.jpg", rating: "9.1", genre: "action", review: "xyz", episodes: "112"},
      {name: "naruto", img: "img/naruto.jpg", rating: "9", genre: "comedy", review: "abc", episodes: "250"},
      {name: "bleach", img: "img/bleach.jpg", rating: "9.1", genre: "action", review: "xyz", episodes: "112"},
      {name: "naruto", img: "img/naruto.jpg", rating: "9", genre: "comedy", review: "abc", episodes: "250"},
      {name: "bleach", img: "img/bleach.jpg", rating: "9.1", genre: "action", review: "xyz", episodes: "112"},
      {name: "naruto", img: "img/naruto.jpg", rating: "9", genre: "comedy", review: "abc", episodes: "250"},
      {name: "bleach", img: "img/bleach.jpg", rating: "9.1", genre: "action", review: "xyz", episodes: "112"},
      {name: "naruto", img: "img/naruto.jpg", rating: "9", genre: "comedy", review: "abc", episodes: "250"},
      {name: "bleach", img: "img/bleach.jpg", rating: "9.1", genre: "action", review: "xyz", episodes: "112"}],
      filteredCardsData: [],
      darktheme: false,
      searchBarDisplay: true
    }
  }

  componentDidMount(){
    this.setState({filteredCardsData: this.state.cardsData});
  }

  onClickGenreButton = (event) => {
    const updatedCardsData = this.state.cardsData.filter((arr)=>{
      if (arr.genre.toLowerCase().includes(event.target.value.toLowerCase())){
          return arr;
      }
    });
    this.setState({filteredCardsData: updatedCardsData});

  }

  onSearchBar = (event) => {
    const updatedCardsData = this.state.cardsData.filter((arr)=>{
        if (arr.name.toLowerCase().includes(event.target.value.toLowerCase())){
            return arr;
        }
    });
    this.setState({filteredCardsData: updatedCardsData});
  }

  onClickThemeToggle = () => {
    this.setState({darktheme: this.state.darktheme ? false : true});
  }

  render(){
    return (
      <>
        
        <Layout onSearch={this.onSearchBar} onClick={this.onClickThemeToggle} theme={this.state.darktheme} searchBarDisplay={this.state.searchBarDisplay}/>
        <GenreBar onClick={this.onClickGenreButton}/>
        <CardBox filteredCardsData={this.state.filteredCardsData}/>
        <style jsx global>{`
          body {
            margin: 0;
            margin-top: 4rem;
          }
        `}</style>
      </>
    )  
  }
}


export default Index;

