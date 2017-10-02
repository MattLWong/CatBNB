import React from 'react';
import { fetchTopPicks } from '../../util/top_picks_util'
import { asArray } from '../../reducers/selectors';
import TopListingItem from './top_listing_item';

class TopListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topPicks: {}
    }
  }

  renderHomes(homes) {
    return asArray(homes).map( (home, idx) =>
      <TopListingItem
        home={home}
        key={idx}/>
    )
  }

  componentDidMount() {
    const that = this;
    fetchTopPicks().then(res => {that.setState({topPicks: res})})
  }

  render() {
    if (Object.keys(this.state.topPicks).length == 0) {
      return (
        <div className='t-h-1'>
          <h2 className='t-h-h2'>Explore listings</h2>
            <div className='loading-gify'>
              <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">

              </img>
            </div>
        </div>
      )
    } else {
      return(
        <div className='t-h-3'>
          <h2 className='t-h-h4'>Explore popular listings</h2>
          <div className='t-h-4'>
            <div className='t-h-5'>
              <div className='t-h-6'>
                {this.renderHomes(this.state.topPicks)}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default TopListings;
