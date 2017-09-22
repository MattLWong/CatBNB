import React from 'react';

import ListingIndexItem from './listing_index_item';

const renderListings = (listings) => {
  let lis = listings.map( (item, idx) => (
    <ListingIndexItem
      key={idx}
      item={item}
      />
  ))
  return(
    <ul>
      {lis}
    </ul>
  )
}

const ListingIndex = ({listings}) => (
  <div className="listing-index">
    {renderListings(listings)}
  </div>
)

export default ListingIndex;
