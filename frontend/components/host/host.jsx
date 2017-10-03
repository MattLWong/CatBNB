import React from 'react';
import { withRouter } from 'react-router-dom';

class VisibleErrors extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let errorsArray = this.props.errors.slice(0, this.props.errors.length -1).split(". ")
    let e = errorsArray.map( (err, idx) => (<li key={idx} className='h-e-s'>{err}.</li>))
    return(
      <ul className='h-e-ul'>
        {e}
      </ul>
    )
  }
}

class Host extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      streetaddress: "",
      city: "",
      apt: "",
      zip: "",
      country: "United States",
      price: "45",
      cover_img_url: "http://res.cloudinary.com/mwong9968/image/upload/v1506563768/listing-covers/cover-1.jpg",
      max_cats: "1",
      errorsVisible: false,
      errors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = []
  }

  handleChange(property){
    return e => this.setState({[property]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({errors: ""}, () => {
      if (this.state.title.length < 10) {
        this.setState({errors: this.state.errors += "Title must be at least 10 characters. "})
      }
      if (this.state.description.length == 0) {
        this.setState({errors: this.state.errors += "You must add a description. "})
      }
      if (this.state.streetaddress.length == 0) {
        this.setState({errors: this.state.errors += "You must enter a valid street address. "})
      }
      if (this.state.city.length == 0) {
        this.setState({errors: this.state.errors += "You must enter a city. "})
      }
      if (this.state.zip.length < 5) {
        this.setState({errors: this.state.errors += "You must enter a valid 5 digit zip code. "})
      }

      if (this.state.errors.length > 0) {
        this.setState({errorsVisible: true})
      } else {
        this.setState({errorsVisible: false, errors: []})
        this.props.createListing({listing: {title: this.state.title, description: this.state.description, host_id: this.props.host_id, street_address: this.state.streetaddress, city: this.state.city, apt: this.state.apt, zip: this.state.zip, country: this.state.country, price: this.state.price, cover_img_url: this.state.cover_img_url, max_cats: this.state.max_cats}})
        $('.loading-div').css("display","block");
        window.setTimeout( () => {
          $('.loading-div').css("display","none");
          this.props.toggleHost();
          this.props.history.push(`/listings/${this.props.listing_id}`)} , 6000);
      }
    })
  }

  render() {
    return(
      <div className='modal'>
        <div className="loading-div">
          <div className="loader">

          </div>
        </div>
        <div className="host-container">
          <span
            id="host-close-btn"
            className="close-2"
            onClick={this.props.toggleHost}>&times;</span>
          <h2 className="host-title">Host Your Spot</h2>
          <span className='host-quote'>&quot;<em>When a man loves cats, I am his friend and comrade, without further introduction.</em>&quot; &#8212;Mark Twain</span>

          <p>To host your place, fill out the form below and your spot will be made available on our service. Your address will be available to your guests only.</p><br/>

          <form className='host-form'>
            <input
              className="h-title"
              type="text"
              onChange={this.handleChange('title')}
              value={this.state.title}
              placeholder="Title"/>
            <input
              className="h-description"
              type="textarea"
              onChange={this.handleChange('description')}
              value={this.state.description}
              placeholder="Description"/>
            <input
              className="h-street-address"
              type="text"
              onChange={this.handleChange('streetaddress')}
                value={this.state.streetaddress}
                placeholder="Street address"/>
            <input
              className="h-apt"
              type="text"
              onChange={this.handleChange('apt')}
              value={this.state.apt}
              placeholder="Apartment number"/>
            <input
              className="h-city"
              type="text"
              onChange={this.handleChange('city')}
              value={this.state.city}
              placeholder="City"/>
            <input
              className="h-zip"
              type="text"
              onChange={this.handleChange('zip')}
              value={this.state.zip}
              placeholder="Zipcode"/>
            <input
              className="h-country"
              type="text"
              onChange={this.handleChange('country')}
              value={this.state.country}
              placeholder="Country"/>
            <input
              className="h-price"
              type="text"
              onChange={this.handleChange('price')}
              value={this.state.price}
              placeholder="Price per night"/>

            <select
              className="h-max-cats"
              onChange={this.handleChange('max_cats')}>
              <option value="1">1 Cat</option>
              <option value="2">2 Cats</option>
              <option value="3">3 Cats</option>
              <option value="4">4 Cats</option>
            </select><br/>
            <button onClick={this.handleSubmit}>Submit</button>
            { this.state.errorsVisible
              ? (<VisibleErrors
                  errors={this.state.errors}
                  />)
              : null
            }
          </form>
        </div>


      </div>
    )

  }
}

export default withRouter(Host);
