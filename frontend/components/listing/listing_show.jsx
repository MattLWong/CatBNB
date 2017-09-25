import React from 'react';
import ReviewIndexItem from './review_index_item';
import BookingBoxContainer from './booking_box/booking_box_container';

class ListingShow extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      address: null,
      counter: 1
    }
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listingId)
  }



  returnState(zipcode) {
    let results;
    $.ajax({
      method: "GET",
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}`
    }).then(res => {
      this.setState({city: res.results[0].formatted_address, counter: 0})
    })
  }

  renderReviews() {
    return(
      <div className='reviews'>
        <ul>
          {this.props.listing.reviews.map( (item, index) => (
            <ReviewIndexItem
              key={index}
              index={index}
              review={item} />
          ))}
        </ul>
      </div>
    )
  }


  render() {
    const { listing } = this.props

    if (listing && this.state.counter > 0) {
      this.returnState(listing.zip);
    }
    if (listing) {
      return(
        <div>
          <div className="cover-image">
            <img src={listing.cover_img_url}></img>
          </div>
          <div className='listing-container'>
            <BookingBoxContainer/>
            <div className="left-column-info">
              <div className="hero">
                <div className="title">
                  <h1>{listing.title}</h1><br/>
                  <span>{this.state.city}&nbsp;·&nbsp;{listing.average_rating}</span>
                </div>

                <div className="host-profile">
                  <img></img>
                  <span>{listing.host_id}</span>
                </div>
              </div>

              <div className="about-listing">
                <h5>About this listing</h5>
                <h6>{listing.description}</h6>
              </div>


              <div className='amentities'>
                <h4>Amenities</h4>
                <div className='amenities-col-1'>
                  <span>Deluxe Bed</span>
                  <span>House Dog</span>
                  <span>Gourmet Meals</span>
                  <span>Free Grooming</span>
                </div>
                <div className='amenities-col-2'>
                  <span>Maze Playground</span>
                  <span>Air Conditioning</span>
                  <span>Laser Tag</span>
                  <span>Natural Light</span>
                  <span>Cuddling Partner</span>
                </div>
              </div>
              <div className='house-rules'>
                <div className='rules-col-1'>
                  <span>Flea-free</span>
                  <span>Vaccinated</span>
                  <span>No Indoor Peeing</span>
                  <span>No Shedding</span>
                  <span>No Excessive Meowing</span>
                </div>
              </div>

              <h2>{listing.reviews.length} Reviews</h2>
              <button>Write a Review</button>
              {this.renderReviews()}
            </div>
          </div>

        </div>
      )
    } else {
      return(
        <div>
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">

          </img>
        </div>
      )
    }
  }
}

export default ListingShow;
