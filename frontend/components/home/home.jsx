import React from 'react';

import ReservationTool from './reservation_tool';
import TopListings from './top_listings';
import FeaturedDestinationItem from './featured_destinations';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.cities = [
      "San Francisco",
      "Los Angeles",
      "La Jolla",
      "Davis",
      "Berkeley",
      "San Jose"
    ]

    this.cities_pictures = [
      "http://res.cloudinary.com/mwong9968/image/upload/v1506570596/cities-cover/San_Francisco.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1506570595/cities-cover/Los_Angeles.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1506570595/cities-cover/La_Jolla.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1506570594/cities-cover/Davis.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1506570595/cities-cover/Berkeley.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1506570595/cities-cover/San_Jose.jpg"
    ]

    this.cities_location = [
      {lat: 37.7749, lng: -122.4194},
      {lat: 34.0195, lng: -118.4912},
      {lat: 32.8328, lng: -117.2713},
      {lat: 38.5449, lng: -121.7405},
      {lat: 37.8716, lng: -122.2727},
      {lat: 37.3382, lng: -121.8863}
    ]
  }

  render() {
    return(
      <div className="home">
        <div className="gif-background">
          <div className="hero">
            <h1>WELCOME TO CATBNB!</h1>
            <h3>Find the right place for your companion when you're off exploring the world</h3>
          </div>
        </div>

        <div className='body'>
          <ReservationTool
            updateFilter={this.props.updateFilter}/>
          <TopListings />
          <div className="f-d-1">
            <div className='f-d-2'>
              <div className='f-d-3'>
                <h2 className='f-d-h2'>
                  Featured destinations
                </h2>
                <div className='f-d-4'>
                  <div className='f-d-5'>
                    <div className='f-d-6'>
                      {this.cities.map( (city, idx) => <FeaturedDestinationItem
                        key={idx}
                        city={city}
                        link={this.cities_pictures[idx]}
                        latlng={this.cities_location[idx]}
                      />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
