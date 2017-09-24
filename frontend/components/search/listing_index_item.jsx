import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const ListingIndexItem = ({item}) => {
  let string = `/listings/${item.id}`;
  return(
  <div className="listing-index-item">
    <Link to={string}>
      <div className='img-wrapper'>
        <img src={item.cover_img_url}></img>
      </div>
      <h1><span>${item.price}&nbsp;&nbsp;</span>{item.title}</h1>
      <h2>{item.max_cats}&nbsp;Cats</h2>
    </Link>
  </div>)
}

export default withRouter(ListingIndexItem);
