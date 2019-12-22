import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { relative } from 'path';

const mapStyles = {
    position: relative,
    width: '100%',
    height: '80%'
}

const Maps = props => (
    <>
        <Map
            google={props.google}
            zoom={17}
            style={mapStyles}
            initialCenter={{ lat: 6.2586204, lng: -75.5625925 }}
        >
            <Marker position={{ lat: 6.2586204, lng: -75.5625925 }} />
        </Map>
    </>
)

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBITd-ZDBVpulSxm9_rcxmYLPsAq-gZ8Hc'
})(Maps);