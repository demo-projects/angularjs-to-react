import React from 'react';
import {Child} from "./Child";
import './App.css';

export class App extends React.Component {

  state = { flag: true, counter: 1 };
  input = React.createRef();

  toggleChild(){
    this.setState({ flag: !this.state.flag })
  }

  componentDidMount(){
    this.state = { counter: 2 }
    // this.input.current.focus();
  }

  render(){
    return (
      <div>
        <h1>App Component</h1>
        <input type="checkbox" onChange={() => this.toggleChild()}/>
        <input type="text" ref={this.input}/>
        { this.state.flag && <Child counter={this.state.counter}/> }
      </div>
    );
  }
}
