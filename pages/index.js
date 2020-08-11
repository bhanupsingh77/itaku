import Layout from './container/Layout.js';
import CardBox from './container/CardBox.js';
import TimeCommitment from './container/TimeCommitment.js';
import cardData from '../public/data/cardData.json';
import {Component} from 'react';


class Index extends Component {
  constructor(props){
    super(props)
    this.state = {cardsData: cardData,
      filteredCardsData: "",
      searchBarDisplay: true
    }
  }

  componentDidMount(){
    this.setState({filteredCardsData: this.state.cardsData});
  }

  onClickTimeCommitmentButtons = (event) => {
    const value = Number(event.target.value);
    const updatedCardsData = this.state.cardsData.filter((arr)=>{
      if(value==0 ? true : value > 100 ? arr.episodes <= value && arr.episodes > 100 : arr.episodes <= value){
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

  render(){
    return (
      <>
        
        <Layout onSearch={this.onSearchBar} searchBarDisplay={this.state.searchBarDisplay}/>
        <div className="quote">
          <q>a good anime to watch Recommendation</q>
        </div>
        <TimeCommitment onClick={this.onClickTimeCommitmentButtons}/>
        <CardBox filteredCardsData={this.state.filteredCardsData}/>
        <style jsx global>{`
          body {
            margin: 0;
            margin-top: 4rem;
            margin-bottom: 4rem;
            color: #191970;
            background-color: white;
          }

          .quote {
            color: black;
            font-style: italic;
            text-align: center;
            font-size: 1rem;
            font-weight: 800;
          }
        `}</style>
      </>
    )  
  }
}


export default Index;

