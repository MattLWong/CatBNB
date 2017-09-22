import React from 'react';

import SearchBarCity from './search_bar_city';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search_string: ""
    }
  }

  handleChange(e) {
    this.setState({search_string: e.target.value});
  }

  componentDidUpdate() {
    debugger;
    if(this.state.search_string.length > 0) {
      this.props.search(this.state.search_string)
    }
  }

  renderResults() {
    this.props.cities.map( (city, idx) => (
      <li key={idx}>
        <span key={idx}>
          <a key={idx}>
            {city.city_name}, {city.state}, {city.country}
          </a>
        </span>
      </li>
    ))
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
                placeholder="Search"
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

export default SearchBar
