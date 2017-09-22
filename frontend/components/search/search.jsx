import React from 'react';

import FilterForm from './filter_form';
import ListingIndex from './listing_index';
import ListingMap from './listing_map';

const Search = ({updateFilter, listings}) => (
  <div className="search">
    <div className="left-half">
        <FilterForm
          updateFilter={updateFilter}/>
        <ListingIndex/>
    </div>
    <div className="right-half">
      <ListingMap
          listings={listings}
          updateFilter={updateFilter}/>
    </div>
  </div>
)

export default Search;
