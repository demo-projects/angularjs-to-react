import React, {createRef} from 'react';
import * as Vanilla from 'vanilla-tilt';

import './App.css';

export class App extends React.Component {

  box = createRef();

  componentDidMount(){
    Vanilla.init(this.box.current, {
      max: 25,
      speed: 400
    });
  }

  render(){
    return (
      <div ref={this.box}>
        <div className="box">
          <div className="innerBox">
            some text
          </div>
        </div>
      </div>
    );
  }
}
