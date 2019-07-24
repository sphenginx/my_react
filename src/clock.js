import React from 'react';

class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
export default Clock;