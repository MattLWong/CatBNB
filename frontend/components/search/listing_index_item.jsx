import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Stars from '../util/stars';

const ListingIndexItem = ({item}) => {
  return(
    <div className="listing-index-item">
      <Link to={`/listings/${item.id}`}>
        <div className='img-wrapper'>
          <img src={item.cover_img_url}></img>
        </div>
        <h1><span>${item.price}&nbsp;&nbsp;</span>{item.title}</h1>
        <h2>{item.max_cats}&nbsp;Cats</h2><span className="stars-16"><Stars
          num={item.average_rating.toString()}/></span><span className="number-of-reviews">{item.review_count}&nbsp;Reviews</span>
      </Link>
    </div>
  )
}

export default withRouter(ListingIndexItem);
