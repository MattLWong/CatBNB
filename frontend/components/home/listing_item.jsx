import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Stars from '../util/stars';

const TopListingItem = ({home}) => {
  let coverStyle = {
    backgroundImage: `url(${home.cover_img_url})`
  }
  return(
    <div className='t-h-7'>
      <Link to={`/listings/${home.id}`}>
        <div className='t-h-8'>
          <div className='t-h-9'>
            <div className='t-h-10-1'>
              <div className='t-h-12-1'>
                <div className='t-h-13-1'>
                  <div className='t-h-14-1'>
                    <div className='t-h-15-1'
                      style= {coverStyle}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='t-h-10-2'>
              <div className='t-h-13-2-1'>
                  ${home.price}&nbsp;&nbsp;{home.title}
              </div>
              <div className='t-h-13-2-2'>
                <span className='t-h-num-cats-span'>{home.max_cats}&nbsp;Cats</span>
                <span className='t-h-reviews'><span className="stars-16"><Stars
                  num={home.average_rating.toString()} /></span><span className='number-of-reviews'>{home.review_count}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TopListingItem;
