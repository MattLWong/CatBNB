import React from 'react';

class ReservationTool extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search_string: "",
      check_in: "",
      check_out: "",
      num_cats: 1
    }
  }

  handleChange(property) {
    return e => this.setState({[property]: e.target.value})
  }

  render() {
    return(
      <div className="r-t-1">
        <form className='r-t-2' id='reservation-tool'>
          <input
            type="text"
            className="r-t-search"
            placeholder="Search local destinations"
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
              onChange={this.handleChange("num_cats")}>
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

export default ReservationTool;
