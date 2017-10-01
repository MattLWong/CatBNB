import React from 'react';
import TripIndexItem from './trip_index_item';

class Trips extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      addresses: [],
      states: [],
      counter: 1
    }
    this.geocoder = new google.maps.Geocoder;
  }

  componentDidMount() {
    this.props.fetchTrips({guest_id: this.props.currentUserId})
  }

  componentDidUpdate() {
    let that = this;
    if (this.props.trips.length > 0) {
      if (this.state.counter == 1) {
        let addressArray = [];
        let statesArray = [];
        this.props.trips.forEach( (trip, idx) => {
          var latlng = {lat: parseFloat(trip.listing.latitude), lng: parseFloat(trip.listing.longitude)};
          this.geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
              let aa = results[0].formatted_address.split(", ");
              addressArray.push(aa[0]);
              statesArray.push(aa[2]);
              that.setState({addresses: addressArray, states: statesArray, counter: 0})
            } else {
            }
          })
        })
      }
    }
  }

  orderTrip(arr) {
    return arr.sort(function(a,b){
      return new Date(b.check_in) - new Date(a.check_in);
    });
  }

  renderTrips() {
    let orderedTrips = this.orderTrip(this.props.trips)
    return orderedTrips.map( (trip, idx) => {
      return(
        <TripIndexItem
          trip={trip}
          key={idx}
          address={this.state.addresses[idx]}
          state={this.state.states[idx]}/>
      )
    })
  }

  render() {
    if (!this.props.loggedIn) {
      return(
        <div className="body">
          <h4>Not currently logged in! Log in to book your first trip!</h4>
        </div>
      )
    } else {
      return(
        <div className="body">
          {this.renderTrips()}
        </div>
      )
    }
  }
}

export default Trips;
