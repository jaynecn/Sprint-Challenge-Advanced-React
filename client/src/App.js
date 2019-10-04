import React from 'react';
import axios from 'axios';
import './App.css';
import FanForm from './FanForm';

const playersApi = 'http://localhost:5000/api/players';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      players:[],
    };
  }

  //functions

  componentDidMount() {
    axios.get(playersApi).then(response => {
      // console.log(response.data);
      const jayne = response.data;
      // console.log(jayne);
      this.setState({ players: this.state.players.concat(jayne) });
      console.log(this.state.players);
      });
  }

  
  render(){
    return (
      <div data-testid="github-players" className="App">
        <h1 >Github Players</h1>
        <h3>Sign up to become a fan!</h3>
        <FanForm />
        <div className="players-display">
          {
          this.state.players.map((info) => (
            <div className="players-div" key={info.id}>
              <h2>{info.name}</h2>
              <h3>ID: {info.id}</h3>
              <h3>Country: {info.country}</h3>
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}