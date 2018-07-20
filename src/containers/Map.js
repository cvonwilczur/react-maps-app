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
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCnRpzTYBKR0-X_sx0PoCdP5pfWaMICF1I' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.antiqueArray.map((location, i) => {
              return (
                <Mapmarker
                  lat={this.props.antiqueArray[i].coordinates.lat}
                  lng={this.props.antiqueArray[i].coordinates.lng}
                  text={i}
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
