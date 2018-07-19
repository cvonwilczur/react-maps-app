import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './MapMarkers.css';


const Mapmarker = (props) => <div className="mapmarker">{props.text}</div>;

export default Mapmarker;
