import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      fullName:"ONS NOUIRA",
      bio: "Hi, I'm ons, a passionate web developer with 2 years of experience creating dynamic and user-friendly websites My expertise lies in front-end development, including HTML, CSS, and JavaScript, as well as various front-end frameworks such as React and Next. I take pride in writing clean, well-documented code that is easy to maintain and scale.",
      imgSrc: "https://preview.redd.it/cute-cats-v0-jtt0lyi4mpy81.jpg?width=640&crop=smart&auto=webp&s=f5f49a57a72ee44b58ad9c1c8d4e019982beee94",
      profession:"Financial Engineering",
      show:false,
      mountedTime: 0,
    }
  }
  show=()=> {
    this.setState({show:!this.state.show})
  }

  componentDidMount() {
    this.startTime = new Date().getTime();

    // Update elapsed time every second
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTimeInSeconds = Math.floor((currentTime - this.startTime) / 1000);
      this.setState({ elapsedTime: elapsedTimeInSeconds });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className='container'>
          <button onClick= {()=>{this.show();this.componentDidMount()}} style={{
    textAlign:"center",
    padding: "9px 25px",
    backgroundColor: "black",
    borderRadius:"40px",
    color:"aliceblue",
}}> 
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
          </button>
          {this.state.show ?<div> <img src={this.state.imgSrc}/> <p>{this.state.fullName} </p>
          <p>{this.state.bio} </p>
          <p>Profession: {this.state.profession}</p></div>: null} 
          <p>Time since last mount: {this.state.elapsedTime} seconds</p>

      </div>
    )
  }
}