import React from 'react';
import VisitorIndexItem from './visitor_index_item';

class Visitors extends React.Component {
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
    this.props.fetchGuests({host_id: this.props.currentUserId})
  }

  componentDidUpdate() {
    let that = this;
    if (this.props.guests.length > 0) {
      if (this.state.counter == 1) {
        let addressArray = [];
        let statesArray = [];
        this.props.guests.forEach( (trip, idx) => {
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

  orderGuests(arr) {
    let a = arr.sort(function(a,b){
      return new Date(b.check_in) - new Date(a.check_in);
    });
    return a;
  }

  renderGuests() {
    let orderedGuests = this.orderGuests(this.props.guests)
    if(this.props.guests.length == 0) {
      return(<div className="no-current-trips">
        You have no upcoming guests, yet!
      </div>)
    }
    return orderedGuests.map( (guest, idx) => {
      return(
        <VisitorIndexItem
          guest={guest}
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
          {this.renderGuests()}
        </div>
      )
    }
  }
}

export default Visitors;
