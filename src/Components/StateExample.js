import React, { Component } from "react";
import './StateExampleClock.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div >
            <div className="bb br br3 grow shadow-3 w-20" style={{color:"wheat" , height: "150px", marginTop : "22%", marginLeft: "18%", width: "65%"}} >
                {/* <h1>Hello, world!</h1> */}
                <h1 style={{fontSize: "125px"}}>It is  {this.state.date.toLocaleTimeString()}.</h1>        
            </div>
          </div>
      );
    }
  }

export default Clock;