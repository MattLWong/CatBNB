import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBarCity from './search_bar_city';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search_string: "",
      counter: 0
    }
  }

  componentDidMount() {
    const that = this;
    const node = document.getElementsByClassName("search-bar")[0];      node.addEventListener('keydown', function(event) {
      if (event.key === "Enter") {
        if (that.state.search_string.length > 0) {
          let stringArray = that.state.search_string.split(" ");
          let searchString;

          if (stringArray.length == 1) {
            searchString = stringArray[0]
          } else {
            searchString = stringArray[0];
            for (let i = 1; i < stringArray.length; i++) {
              searchString = searchString.concat("+").concat(stringArray[i]);
            }
          }
          $.ajax({
            method: "GET",
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${searchString}&key=AIzaSyCPqFraPsIQpO7RkqgWB4gMxDm4NwxH76A`
          }).then( res => {
            if (res.status == "INVALID_REQUEST") {
              debugger;
              that.setState({error: "error"})
            }
            let lat = res.results[0].geometry.location.lat;
            let lng = res.results[0].geometry.location.lng;
            const url = `/search?lat=${lat}&lng=${lng}`;
            that.clearSearchBar();
            that.props.history.push(url);
          })
        }
      }
    });
  }

  handleChange(e) {
    this.setState({search_string: e.target.value});
    this.setState({counter: 1});
  }

  componentDidUpdate() {
    if(this.state.search_string.length > 0) {
      if (this.state.counter > 0) {
        this.setState({counter: 0});
        this.props.search(this.state.search_string)
      }
    }
  }

  clearSearchBar() {
    this.setState({search_string: ""})
  }

  renderResults() {
    let sortedCities = this.props.cities;
    if (this.state.search_string.length > 0) {
      return(
        sortedCities.map( (city, idx) => {
          let lat = city.latitude.toString().slice(0,10);
          let lng = city.longitude.toString().slice(0,10);
          return(
            <li key={idx}>
              <span key={idx} onClick={this.clearSearchBar}>
                <Link id="city-result" to={`/search?lat=${lat}&lng=${lng}`} key={idx}>
                  {city.city_name}, {city.state}, {city.country}
                </Link>
              </span>
            </li>
          )
        }
        )
      )
    } else {
      return
    }

  }


  render() {
    return(
      <div className="search-div-1">
        <div className="search-div-2">
          <form className="search-form">
            <div className="search-div-3">
              <input
                className="search-bar"
                type="text"
                placeholder="Search Local Listings"
                value={this.state.search_string}
                onChange={this.handleChange.bind(this)}
                />
              <div className="loupe-div">
                <img id="loupe" src="/assets/loupe.jpg"></img>
              </div>
            </div>
          </form>
        </div>
        <div className="cities-search-results">
          <ul>
            {this.renderResults()}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchBar)
