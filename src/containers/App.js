import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import Filter from '../components/Filter';
import List from '../components/List';

class App extends Component {
  constructor() {
    super()
    this.state = {
      antiqueArray: [
        {name: 'Retro Ranch',
         coordinates: {
           lat: '33.498727',
           lng: '-112.082819'}},
        {name: 'Modern Manor',
         coordinates: {
            lat: '33.503970',
            lng: '-112.083709'}},
        {name: 'Sweet Salvage',
         coordinates: {
           lat: '33.505392',
           lng: '-112.082634'}},
        {name: 'Twigs and Twine',
         coordinates: {
            lat: '33.501533',
            lng: '-112.082279'}},
        {name: 'Home Again Furnishing',
         coordinates: {
            lat: '33.498659',
            lng: '-112.083452'}}
      ]
    };
  }


  render() {
    const { antiqueArray } = this.state
    return (
      <div id="map">
        <h1>Welcome to Melrose</h1>
        <Filter />
        <Map antiqueArray={antiqueArray}/>
        <List antiqueArray={antiqueArray}/>
      </div>
    );
  }
}

export default App;
