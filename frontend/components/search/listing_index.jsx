import React from 'react';

import ListingIndexItem from './listing_index_item';

const renderListings = (listings) => {

  if (listings.length == 0) {
    return <h1 className="no-listings">No listings found!</h1>
  }
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
