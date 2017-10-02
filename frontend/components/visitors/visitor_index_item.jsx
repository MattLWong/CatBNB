import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const VisitorIndexItem = ({guest, address, state}) => {

  if (address) {
    return (
      <div className="t-i-1">
        <div className='t-i-2-3'>
          <div className='t-i-3-3'>
            <img className="guest-profile-picture" src={guest.guest.image_url}></img>
          </div>
        </div>
        <div className="t-i-2-1 group">
          <img src={guest.listing.cover_img_url}/>
        </div>
        <div className="t-i-2-2">
          <h1>{guest.listing.title}</h1>
          <h4>{address}</h4>
          <h4>{guest.listing.city}, {state}, {guest.listing.country}</h4>
          <h4>Dates: {guest.check_in} to {guest.check_out}</h4>
          <h4>Your Guest: {guest.guest.first_name}</h4>
        </div>
      </div>
    )
  } else {
    return (
      <div className="t-i-1">
        <div className='t-i-2-3'>
          <div className='t-i-3-3'>
            <img className="guest-profile-picture" src={guest.guest.image_url}></img>
          </div>
        </div>
        <div className="t-i-2-1 group">
          <img src={guest.listing.cover_img_url}/>
        </div>
        <div className="t-i-2-2">
          <h1>{guest.listing.title}</h1>
          <h4>{guest.listing.city}, {guest.listing.country}</h4>
          <h4>Dates: {guest.check_in} to {guest.check_out}</h4>
          <h4>Your Guest: {guest.guest.first_name}</h4>
        </div>
      </div>
    )
  }

}


export default VisitorIndexItem;
