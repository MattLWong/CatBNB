import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const TripIndexItem = ({trip, address, state}) => {

  if (address) {
    return (
      <div className="t-i-1">
        <div className='t-i-2-3'>
          <div className='t-i-3-3'>
            <img className="guest-profile-picture" src={trip.host.image_url}></img>
          </div>
        </div>
        <div className="t-i-2-1 group">
          <img src={trip.listing.cover_img_url}/>
        </div>
        <div className="t-i-2-2">
          <h1>{trip.listing.title}</h1>
          <h4>{address}</h4>
          <h4>{trip.listing.city}, {state}, {trip.listing.country}</h4>
          <h4>Dates: {trip.check_in} to {trip.check_out}</h4>
          <h4>Your Host: {trip.host.first_name}</h4>
        </div>
      </div>
    )
  } else {
    return (
      <div className="t-i-1">
        <div className='t-i-2-3'>
          <div className='t-i-3-3'>
            <img className="guest-profile-picture" src={trip.host.image_url}></img>
          </div>
        </div>
        <div className="t-i-2-1 group">
          <img src={trip.listing.cover_img_url}/>
        </div>
        <div className="t-i-2-2">
          <h1>{trip.listing.title}</h1>
          <h4>{trip.listing.city}, {trip.listing.country}</h4>
          <h4>Dates: {trip.check_in} to {trip.check_out}</h4>
          <h4>Your Host: {trip.host.first_name}</h4>
        </div>
      </div>
    )
  }

}


export default TripIndexItem;
