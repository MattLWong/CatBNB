import React from 'react';
import ReactDom from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const SF = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class ListingMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, SF);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
  }

  componentDidUpdate() {
    if (this.props.listings) {
      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  handleMarkerClick(listing) {
    this.props.history.push(`listings/${listing.id}`);
  }

  render() {
    return(
      <div className="map" ref="map">
        Map
      </div>
    )
  }
}

export default withRouter(ListingMap)
