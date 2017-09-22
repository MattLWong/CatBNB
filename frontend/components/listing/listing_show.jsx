import React from 'react';

class ListingShow extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
  }

  render() {
    return(
      <div>
        Listing Show
      </div>
    )
  }
}

export default ListingShow;
