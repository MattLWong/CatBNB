import React from 'react';
import ReviewIndexItem from './review_index_item';
import Stars from '../util/stars';
import { Redirect } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: "",
      rating: 1,
      childVisible: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => {this.setState({[property]: e.target.value})}
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.loggedIn) {
      this.setState({childVisible: false})
      this.setState({review: ""})
      this.props.createReview({review: {guest_id: this.props.guestId, listing_id: this.props.listingId, description: this.state.review, rating: this.state.rating}})
    } else {
      this.setState({childVisible: true})
    }

  }

  render() {
    var textareaStyle = {
      height: "100px",
      width: "225px"
    }
    return(
      <div className="review-form-container">
        { this.state.childVisible
          ? (<span className="make-me-red">Please log in to leave a review</span>)
          : null
        }
        <form id="review-form" onSubmit={() => this.handleSubmit()}>
          <label className='review-form-rating'>
            Rating:
            <select
              onChange={this.handleChange("rating")}>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </label><br/>
        <textarea
          form="review-form"
          onChange={this.handleChange("review")}
          value={this.state.review}
          placeholder="Compose your review"
          style={textareaStyle}/><br/>

          <button
            onClick={(e) => this.handleSubmit(e)}>Submit!</button>
        </form>
      </div>
    )
  }
}

class ListingShow extends React.Component{
  constructor(props) {
    super(props)
    let today = new Date();
    this.state = {
      address: null,
      counter: 1,
      check_in: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
      check_out: "",
      guests: "1",
      childVisible: false,
      mustBeLoggedInVisible: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.listingId)
  }

  renderStyle(bool) {
    if (bool) {
      return {
        textDecoration: "line-through",
        fontWeight: 300
      }
    } else {
      return { fontWeight: "500"}
    }
  }

  renderRule(bool, rule) {
    if (bool) {
      return <span>{rule}</span>
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.guestId) {
      this.setState({mustBeLoggedInVisible: true});
      return
    }
    this.setState({mustBeLoggedInVisible: false})
    const booking ={booking:
      {host_id: this.props.listing.host_id,
      guest_id: this.props.guestId,
      listing_id: this.props.listingId,
      check_in: this.state.check_in,
      check_out: this.state.check_out}
    }
    this.props.bookListing(booking);
    $('.loading-div').css("display","block");
    window.setTimeout( () => {
      this.props.history.push('/trips')} , 2000);

  }

  update(property) {
    return e => {
      this.setState({ [property]: e.currentTarget.value })
    }
  }

  returnState(zipcode) {
    $.ajax({
      method: "GET",
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}`
    }).then(res => {
      this.setState({city: res.results[0].formatted_address, counter: 0})
    })
  }

  orderTrips(arr) {
    let newArr = arr.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    })
    return newArr;
  }

  renderReviews() {
    let sortedReviews = this.orderTrips(this.props.listing.reviews);
    return(
      <div className='reviews'>
        {sortedReviews.map( (item, index) => (
          <ReviewIndexItem
            key={index}
            index={index}
            review={item}
            />
        ))}
      </div>
    )
  }

  renderReviewBox() {
    this.setState({childVisible: !this.state.childVisible});
  }

  render() {
    const { listing } = this.props;

    if (listing && this.state.counter > 0) {
      this.returnState(listing.zip);
    }
    if (listing) {
      let coverStyle = {
        backgroundImage: `url(${listing.cover_img_url})`
      }
      return(
        <div className="listing-wrapper">
          <div className="loading-div">
            <div className="loader">

            </div>
          </div>
          <div className="cover-image-div-1">
            <div className="cover-image-div-2">
              <div className="cover-image-div-3">
                <span className="cover-image-span-1">
                  <span className="cover-image-span-2">
                    <div className="cover-image-div-4">
                      <div
                        className="cover-image-div-5"
                        style={ coverStyle }>
                      </div>
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className='listing-container'>
            <div className='book-now'>
              <div className="book-now-relative">
                <div className="book-now-price-container">
                  <div className="book-now-price">
                    <span className="dollars">${listing.price}</span>&nbsp;<span className="per-night">per night</span>
                  </div>
                </div>
                <div className="book-now-container">
                  <form onSubmit={this.handleSubmit} id="booking-form">
                    <div className="check-in-out-guests">
                      <div className="check-in-out">
                        <div className="check-in">
                          <label>
                            Check In
                            <input
                              id="booking-form"
                              type="date"
                              value={this.state.check_in}
                              onChange={this.update("check_in").bind(this)}
                              />
                          </label>
                        </div>
                        <div className='check-out'>
                          <label>
                            Check Out
                            <input
                              id="booking-form"
                              type="date"
                              value={this.state.check_out}
                              onChange={this.update("check_out").bind(this)}
                              />
                          </label>
                        </div>
                      </div>

                      <div className="guests">
                        <label>
                          Guests <br/>
                            <select name="guests" form="booking-form" onChange={this.update("guests").bind(this)}>
                              <option value="1" defaultValue>1 Cat</option>
                              <option value="2">2 Cats</option>
                              <option value="3">3 Cats</option>
                              <option value="4">4 Cats</option>
                            </select>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      form="booking-form"
                      className="book-now-submit">
                      Book Now
                    </button>
                  </form>
                  { this.state.mustBeLoggedInVisible
                    ? (<div><span className="logged-in-error">Please log in to book this listing.</span></div>)
                    : null
                  }
                  <div className="never-be-charged">
                    <span className='credit-card'>Your credit card will not be charged</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-column">
              <div className="listing-header">
                <div className="listing-title">
                  <h1>{listing.title}</h1><br/>
                  <span>{listing.city},&nbsp;CA&nbsp;{listing.zip}&nbsp;·&nbsp;<div className="stars-17"><Stars
                    num={listing.average_rating.toString()}/></div> {listing.average_rating_precise}</span>
                </div>
                <div className="host-profile-1">
                  <div className="host-profile-2">
                    <div className="host-profile-3">
                      <div className='host-profile-4'>
                        <div className="host-profile-5">
                          <a className="host-profile-picture">
                            <img src={listing.host_image_url}></img>
                          </a>
                        </div>
                        <a className="host-anchor">{listing.host_first_name}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-space">
                <h5>The space</h5>
                <h6>{listing.description}</h6>
              </div>


              <div className='about-amenities'>
                <h5>Amenities</h5>
                <div className='amenities-col-1 amenities'>
                  <span
                    style={ this.renderStyle(listing.deluxe_bed) }
                    >Deluxe Bed</span>
                  <span
                    style={ this.renderStyle(listing.house_dog_friend) }>House Dog</span>
                  <span
                    style={ this.renderStyle(listing.gourmet_meals) }>Gourmet Meals</span>
                  <span
                    style={ this.renderStyle(listing.free_grooming) }>Free Grooming</span>
                </div>
                <div className='amenities-col-2 amenities'>
                  <span
                    style={ this.renderStyle(listing.maze_playground) }>Maze Playground</span>
                  <span
                    style={ this.renderStyle(listing.air_conditioning) }>Air Conditioning</span>
                  <span
                    style={ this.renderStyle(listing.laser_tag) }>Laser Tag</span>
                  <span
                    style={ this.renderStyle(listing.natural_light) }>Natural Light</span>
                  <span
                    style={ this.renderStyle(listing.cuddling_partner) }>Cuddling Partner</span>
                </div>
              </div>
              <div className='house-rules'>
                <h5>House Rules</h5>
                <div className='rules'>
                  {this.renderRule(listing.flea, "No fleas")}
                  {this.renderRule(listing.vaccinated, "Must be vaccinated")}
                  {this.renderRule(listing.peeing, "No indoor peeing/pooping")}
                  {this.renderRule(listing.shedding, "No shedding")}
                  {this.renderRule(listing.meowing, "No excessive meowing")}
                  {this.renderRule(listing.spay_neuter, "Must be spayed/neutered")}
                </div>
              </div>

              <div className='reviews-section'>
                <h3>{listing.reviews.length} Reviews <div className="stars-28">
                  <Stars
                    num={listing.average_rating.toString()}/>
                </div></h3>
              <button className="write-a-review" onClick={() => this.renderReviewBox()}>Write a Review</button>
              { this.state.childVisible
                ? <ReviewForm
                  createReview={this.props.createReview}
                  guestId={this.props.guestId}
                  listingId={this.props.listingId}
                  loggedIn={this.props.loggedIn}/>
                : null
              }
                {this.renderReviews()}
              </div>
            </div>
          </div>

        </div>
      )
    } else {
      return(
        <div className='loading-gify'>
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">

          </img>
        </div>
      )
    }
  }
}

export default ListingShow;
