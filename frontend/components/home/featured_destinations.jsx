import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const featuredDestinations = ({city, link, latlng}) => {
  let coverStyle = {
    backgroundImage: `url(${link})`
  }
  return(
    <div className="f-d-7">
      <div className='f-d-8'>
        <div className='f-d-9'>
          <Link to={`/search?lat=${latlng.lat}&lng=${latlng.lng}`} className="f-d-10">
            <div className='f-d-11'>
              <div className='f-d-121'>
                <div className='f-d-131'>
                  <div className='f-d-141' style={coverStyle}>

                  </div>
                </div>
              </div>
              <div className='f-d-122'>
                <span className='f-d-132'>
                  <span className='f-d-142'>{city}</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default featuredDestinations;
