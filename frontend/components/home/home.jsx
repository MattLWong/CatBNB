import React from 'react';

import ReservationTool from './reservation_tool';
import TopHits from './top_hits';
import ExploreCities from './explore_cities';

class Home extends React.Component {

  render() {
    return(
      <div className="home">
        <div className="gif-background">
          <div className="hero">
            <h1>WELCOME TO CATBNB!</h1>
            <h3>Find the right place for your companion when you're off exploring the world</h3>
          </div>
        </div>
        <ReservationTool />
        <TopHits />
        <ExploreCities />
      </div>
    )
  }
}

export default Home;
