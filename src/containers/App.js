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
      searchfield: '',
      mapMarkerActive: false,
      currentTargetlat: '',
      currentTargetlng: '',
      curentTargetname: '',
      currentTargetaddress: '',
      currentTargetkey: '',
      errorMessage: 'Loading'
    };
  }
// Fetches an array of data from the FourSquare API, updates error message if this fails
  componentDidMount() {
    fetch("https://api.foursquare.com/v2/venues/search?intent=browse&sw=33.494935,-112.086006&ne=33.509163,-112.080534&categoryId=4d4b7105d754a06374d81259&limit=10&client_id=0CT0RBMUHSM5OFZOKSZP1C1O5QACNVPCO3WIYY4ACYO04XK3&client_secret=K2QIFWY3C4PIOLXB0EP2AZ4MHQZH5DPMNBBYUB1KUWZVOYMZ&v=20180721", {
      method: "GET"
    })
    .then(response => response.json())
    .then(locations => this.setState({ locationsArray: locations.response.venues}))
    .catch(error => this.setState({errorMessage: 'Uh-Oh: '+error}) );
  }

  // locations.response.venues
// updates state with the value of whatever is in the input box, also sets mapmarker to false to clear any current active mapmarkers
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    this.setState({ mapMarkerActive: false })
  }

// updates whether the mapmarker infobox is active and updates its state based on which mapmarker was clicked
  onClick = (lat, lng, name, address, text) => {
    if (text !== this.state.currentTargetkey && this.state.mapMarkerActive === true) {
      this.setState({ currentTargetlat: lat})
      this.setState({ currentTargetlng: lng})
      this.setState({ currentTargetname: name })
      this.setState({ currentTargetaddress: address })
      this.setState({ currentTargetkey: text })
    } else if (text !== this.state.currentTargetkey && this.state.mapMarkerActive === false){
      this.setState({ currentTargetlat: lat})
      this.setState({ currentTargetlng: lng})
      this.setState({ currentTargetname: name })
      this.setState({ currentTargetaddress: address })
      this.setState({ currentTargetkey: text })
      this.setState({ mapMarkerActive: true })
    } else if (text === this.state.currentTargetkey && this.state.mapMarkerActive === false){
      this.setState({ mapMarkerActive: true })
    } else {
      this.setState({ mapMarkerActive: false })
      }
  }

  render() {
    // filtered array produced by whatever is in state from the filter input
    const { errorMessage, locationsArray, searchfield, mapMarkerActive, currentTargetlat, currentTargetlng, currentTargetname, currentTargetaddress, currentTargetkey } = this.state;
    const filteredLocations = !locationsArray.length ? null : locationsArray.filter(location => {
      return location.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div id="app">
        <header>
        <h1 tabIndex="1">Eat at Melrose</h1>
        <SearchBox  searchChange={this.onSearchChange} />
        </header>
        <main>
        <Map
          errorMessage={errorMessage}
          mapMarkerActive={mapMarkerActive}
          currentTargetlat={currentTargetlat}
          currentTargetlng={currentTargetlng}
          currentTargetname={currentTargetname}
          currentTargetaddress={currentTargetaddress}
          currentTargetkey={currentTargetkey}
          onClick={this.onClick}
          locationsarray={filteredLocations}
          unfilteredarray={locationsArray}
          />
        <List
          errorMessage={errorMessage}
          mapMarkerActive={mapMarkerActive}
          currentTargetkey={currentTargetkey}
          onClick={this.onClick}
          locationsarray={filteredLocations}
          unfilteredarray={locationsArray}/>
        </main>
        <p>Powered by FourSquare</p>
      </div>

    );
  }
}

export default App;
