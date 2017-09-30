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
    <div>
      <h1 className='no-listings-found'>No Listings Found!</h1>
      <ul>
        {list}
      </ul>
    </div>
  )
}

const ListingIndex = ({listings}) => (
  <div className="listing-index">
    {renderListings(listings)}
  </div>
)

export default ListingIndex;
