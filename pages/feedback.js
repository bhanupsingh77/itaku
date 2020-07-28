import Layout from './container/Layout.js';
import {Component} from 'react';


class Feedback extends Component {
  constructor(props){
    super(props)
    this.state = {darktheme: false,
      searchBarDisplay: false
    }
  }

  onClickThemeToggle = () => {
    this.setState({darktheme: this.state.darktheme ? false : true});
  }

  render() {
    return (
      <>
        <Layout onClick={this.onClickThemeToggle} theme={this.state.darktheme} searchBarDisplay={this.state.searchBarDisplay}/>
        <h1>feedback</h1>
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
export default Feedback;