import React from 'react';
import {withRouter} from 'react-router-dom';

class ReservationTool extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search_string: "",
      check_in: "",
      check_out: "",
      num_cats: 1,
      error: ""
    }
    window.state = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => this.setState({[property]: e.target.value})
  }

  handleFilterChange(property) {
    return e => {
      this.setState({[property]: e.target.value});
      this.props.updateFilter("minBeds", e.target.value);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.search_string == "") {
      this.setState({error: "error"});
      return
    }
    let stringArray = this.state.search_string.split(" ");
    let searchString;

    if (stringArray.length == 1) {
      this.setState({error: "no-error"});
      searchString = stringArray[0]
    } else {
      this.setState({error: "no-error"});
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
        this.setState({error: "error"})
      }
      let lat = res.results[0].geometry.location.lat;
      let lng = res.results[0].geometry.location.lng;
      const url = `/search?lat=${lat}&lng=${lng}`;
      this.props.history.push(url);
    })
  }

  renderErrorMessage() {
    if (this.state.error == 'error') {
      return(
        <h4>Search could not be completed. Please enter a valid search address.</h4>
      )
    }
  }

  render() {
    return(
      <div className="r-t-1">
        <div className='r-t-2-1'>
          {this.renderErrorMessage()}
        </div>
        <form className='r-t-2' id='reservation-tool' onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="r-t-search"
            placeholder="Enter city, locale, address"
            value={this.state.search_string}
            onChange={this.handleChange("search_string")}
            />
          <label className='r-t-label-check-in'>
            <span className="r-t-check-in">Check-in</span><br/>
            <input
              type="date"
              value={this.state.check_in}
              onChange={this.handleChange("check_in")}/>
          </label>
          <label className='r-t-label-check-out'>
            <span className='r-t-check-out'>Check-out</span><br/>
            <input
              type="date"
              value={this.state.check_out}
              onChange={this.handleChange("check_out")}/>
          </label>
          <label className='r-t-label-guests'>
            <span className='r-t-guests'>Guests</span><br/>
            <select
              form="reservation-tool"
              className='r-t-select'
              onChange={this.handleFilterChange("num_cats")}>
              <option value="1">1 Cat</option>
              <option value="2">2 Cat</option>
              <option value="3">3 Cat</option>
              <option value="4">4 Cat</option>
            </select>
          </label>
          <button className="r-t-submit" type="submit" value="Search">Search</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ReservationTool);
