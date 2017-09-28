import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const featuredDestinations = ({city, link, latlng}) => {
  let coverStyle = {
    backgroundImage: `url(${link})`
  }
  return(
    <div className="featured-destination-item">
      <Link to={`/search?lat=${latlng.lat}&lng=${latlng.lng}`}>
        <div
          className="featured-destination-image"
          style={coverStyle}>
        </div>
        <span className="featured-destination-city">{city}</span>
      </Link>
    </div>
  )
}

export default featuredDestinations;
