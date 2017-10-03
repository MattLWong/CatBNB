import React from 'react';

class Stars extends React.Component {
  renderHalfStar(truth) {
    if (truth) {
      return <img src="http://res.cloudinary.com/mwong9968/image/upload/v1506384102/half-star_ciyzbg.png"/>
    } else {
      return
    }
  }

  render() {
    let half_star, full_stars, empty_stars;

    if (this.props.num == 0) {
      return (
        <div className="no-stars">No reviews yet.</div>
      )
    }

    if (parseFloat(this.props.num) % 1 != 0) {
      half_star = true;
      full_stars = parseInt(this.props.num.slice(0,1));
      empty_stars = 4 - full_stars;
    } else {
      half_star = false;
      full_stars = parseInt(this.props.num.slice(0,1));
      empty_stars = 5 - full_stars;
    }

    let stars_array = [];
    for(let i = 0; i < full_stars; i++) {
      stars_array.push("star");
    }

    let empty_stars_array = [];
    for(let i = 0; i < empty_stars; i++) {
      empty_stars_array.push("star");
    }

    return(
      <div className="stars">
        {stars_array.map( (_, idx) => (<img key={idx} src='http://res.cloudinary.com/mwong9968/image/upload/v1506384098/full-star_o1vvcd.png' ></img>))}
        {this.renderHalfStar(half_star)}
        {empty_stars_array.map( (_, idx) => (
          <img key={idx} src='http://res.cloudinary.com/mwong9968/image/upload/v1506384093/empty-star_fprlrb.png' ></img>
        ))}
      </div>
    )
  }
}

export default Stars;
