import Layout from './container/Layout.js';
import {Component} from 'react';


class About extends Component {
  constructor(props){
    super(props)
    this.state = {searchBarDisplay: false}
  }

  render() {
    return (
      <>
        <Layout searchBarDisplay={this.state.searchBarDisplay}/>
        <h1>about1</h1>
        <style jsx global>{`
          body {
            margin: 0;
            margin-top: 4rem;
            margin-bottom: 4rem;
            color: #191970;
            background-color: white;
          }
        `}</style>
      </>
    )
    
  }
}
export default About;
  


