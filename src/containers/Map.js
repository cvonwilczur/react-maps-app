import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Mapmarker from '../components/Mapmarker';


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.502107,
      lng: -112.082480
    },
    zoom: 16
  };

  render(props) {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCnRpzTYBKR0-X_sx0PoCdP5pfWaMICF1I' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.locationsarray.map((location, i) => {
              return (
                <Mapmarker
                  lat={this.props.locationsarray[i].location.lat}
                  lng={this.props.locationsarray[i].location.lng}
                  text={i}
                  key={i}
                />
              );
            })
          }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
