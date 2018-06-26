import React from 'react';
import {Child} from "./Child";
import './App.css';

export class App extends React.Component {

  state = { flag: true, counter: 1 };

  toggleChild(){
    this.setState({ flag: !this.state.flag })
  }

  componentDidMount(){
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000);
  }

  render(){
    return (
      <div>
        <h1>App Component</h1>
        <input type="checkbox" onChange={() => this.toggleChild()}/>
        { this.state.flag && <Child counter={this.state.counter}/> }
      </div>
    );
  }
}
