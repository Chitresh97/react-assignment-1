import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  state={
    username:"Chitresh"
  }

  setnameHandler=()=>{
    this.setState({
      username:"cookie-monster"
    })
  }
  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.username}/>
        <UserInput/>
        <UserOutput/>

      </div>
    );
  }
}

export default App;
