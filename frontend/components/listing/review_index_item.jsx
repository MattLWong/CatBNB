import React from 'react';
import Stars from '../util/stars';

const ReviewIndexItem = ({index, review}) => {
  const MONTHS = {
    "00": "January",
    "01": "February",
    "02": "March",
    "03": "April",
    "04": "May",
    "05": "June",
    "06": "July",
    "07": "August",
    "08": "September",
    "09": "October",
    "10": "November",
    "11": "Deceber"
  }
  let year = review.date.slice(0,4);
  let month = review.date.slice(5,7);
  return(
    <div key={index} className="review-item">
      <div className='review-header-1'>
        <div className='review-header-2'>
          <div className="review-header-3">
            <div className='review-pic-4'>
              <div className="review-pic-5">
                <a className="review-pic-anchor">
                  <img src={review.guest_img_url}/>
                </a>
              </div>
            </div>
            <div className="review-name-date">
              <h5>{review.first_name}</h5>
              <h6>{MONTHS[month]}, {year}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className='review-description'>
        <h6>{review.description}</h6>
      </div>
    </div>
  )
}


export default ReviewIndexItem;
