import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import SearchBox from '../components/SearchBox';
import List from '../components/List';

class App extends Component {
  constructor() {
    super()
    this.state = {
      locationsArray: [
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
      ],
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { locationsArray, searchfield } = this.state;
    const filteredLocations = locationsArray.filter(location => {
      return location.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div id="app">
        <h1>Welcome to Melrose</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Map locationsArray={filteredLocations}/>
        <List locationsArray={filteredLocations}/>
      </div>
    );
  }
}

export default App;
