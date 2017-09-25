import React from 'react';

const ReviewIndexItem = ({index, review}) => {
  return(
    <li key={index}>
      <h4>{review.description}</h4>
      <h5>{review.rating}</h5>
      <img/>
    </li>
  )
}


export default ReviewIndexItem;
