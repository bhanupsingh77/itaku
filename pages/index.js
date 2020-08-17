import {Component} from 'react';
import NavBar from './container/NavBar.js';
import CardBox from './container/CardBox.js';

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {cardsData: props.posts,
    }
  }

  render(){
    return (
      <>
        <NavBar/> 
        <div className="quote">
          <q>a good anime to watch Recommendation</q>
        </div>
        <CardBox cardsData={this.state.cardsData}/>
        <style jsx global>{`
          body {
            margin: 0;
            margin-top: 5rem;
            margin-bottom: 3rem;
            color: #191970;
            background-color: white;
            font-family: sans-serif, Arial, Helvetica;
          }

          .quote {
            color: black;
            font-style: italic;
            text-align: center;
            font-size: 1rem;
            font-weight: 800;
          }

          q{
            box-shadow: 3px 3px 3px orange;  
          }
        `}</style>
      </>
    )  
  }
}

export async function getStaticProps() {
  // Calling an external API endpoint to get posts.
  const res = await fetch('https://siasky.net/AADrjfUnm-2v-EftfA77nn_zTWoSkDflcXUNiyqYZs2CAw')
  const posts = await res.json()

  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Index;

