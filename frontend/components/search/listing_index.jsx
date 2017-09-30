import React from 'react';

import ListingIndexItem from './listing_index_item';

const renderListings = (listings, lb) => {

  let list = listings.map( (item, idx) => (
    <ListingIndexItem
      key={idx}
      item={item}
      />
  ))
  return(
    <ul>
      {list}
    </ul>
  )
}

const ListingIndex = ({listings}) => (
  <div className="listing-index">
    {renderListings(listings)}
  </div>
)

export default ListingIndex;
