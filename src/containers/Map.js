import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Mapmarker from '../components/Mapmarker';
import MarkerInfobox from '../components/MarkerInfobox';




class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.502107,
      lng: -112.082480
    },
    zoom: 15
  };

  render(props) {
    const { errorMessage, unfilteredarray } = this.props
    return (!unfilteredarray.length ? <h1>{errorMessage}</h1>:
      // We're using GoogleMapReact library here to pump in the Google Maps API and render React components over it
      <div className="map">
        {<GoogleMapReact
          aria-hidden="true"
          aria-label="Google Maps"
          tabIndex="-1"
          bootstrapURLKeys={{ key: 'AIzaSyCnRpzTYBKR0-X_sx0PoCdP5pfWaMICF1I'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
            this.props.mapMarkerActive === true
            ? <MarkerInfobox
              lat={this.props.currentTargetlat}
              lng={this.props.currentTargetlng}
              name={this.props.currentTargetname}
              address={this.props.currentTargetaddress}
              key={this.props.currentTargetkey}
              />
            : null
          }
          {!this.props.unfilteredarray.length ? null: this.props.locationsarray.map((location, i) => {
              return (
                <Mapmarker
                  mapMarkerActive={this.props.mapMarkerActive}
                  currentTargetkey={this.props.currentTargetkey}
                  onClick={this.props.onClick}
                  lat={this.props.locationsarray[i].location.lat}
                  lng={this.props.locationsarray[i].location.lng}
                  name={this.props.locationsarray[i].name}
                  address={this.props.locationsarray[i].location.address}
                  text={i}
                  key={i}
                />
              );
            })
          }
        </GoogleMapReact>
      }

      </div>
    );
  }
}

export default Map;
