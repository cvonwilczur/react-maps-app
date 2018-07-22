import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import SearchBox from '../components/SearchBox';
import List from '../components/List';

class App extends Component {
  constructor() {
    super()
    this.state = {
      locationsArray: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch("https://api.foursquare.com/v2/venues/search?intent=browse&sw=33.494935,-112.086006&ne=33.509163,-112.080534&categoryId=4d4b7105d754a06374d81259&limit=10&client_id=0CT0RBMUHSM5OFZOKSZP1C1O5QACNVPCO3WIYY4ACYO04XK3&client_secret=K2QIFWY3C4PIOLXB0EP2AZ4MHQZH5DPMNBBYUB1KUWZVOYMZ&v=20180721", {
      method: "GET"
    })
    .then(response => response.json())
    .then(locations => this.setState({ locationsArray: locations.response.venues}))
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
        <Map locationsarray={filteredLocations}/>
        <List locationsarray={filteredLocations}/>
      </div>
    );
  }
}

export default App;
