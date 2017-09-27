import React from 'react';

class ReservationTool extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search_string: "",
      check_in: null,
      check_out: null,
      num_cats: 1
    }
  }

  handleChange(property) {
    return e => this.setState({[property]: e.target.value})
  }

  render() {
    return(
      <form>
        <input
          type="text"
          placeholder="Destination, city, address"
          value={this.state.search_string}
          onChange={this.handleChange("search_string")}
          />

        <label>
          Check-in
        </label>
        <label>
          Check-in
        </label>
        <label>
          Guests
          <select
            onChange={this.handleChange("num_cats")}>
            <option value="1">1 Cat</option>
            <option value="2">2 Cat</option>
            <option value="3">3 Cat</option>
            <option value="4">4 Cat</option>
          </select>
        </label>
      </form>
    )
  }
}

export default ReservationTool;
