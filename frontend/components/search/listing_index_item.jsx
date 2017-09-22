import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const ListingIndexItem = ({item}) => {
  let string = `/listings/${item.id}`;
  return(
  <div className="listing-index-item">
    <Link to={string}>
      <img src={item.cover_img_url}></img>
      <h1><span>${item.price} </span>{item.title}</h1>
    </Link>
  </div>)
}

export default withRouter(ListingIndexItem);
