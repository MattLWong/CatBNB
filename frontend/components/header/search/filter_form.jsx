import React from 'react';

class FilterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checkin: null,
      checkout: null,
      cats: null,
      minPrice: 1,
      maxPrice: 120
    }
  }


  render() {
    <div className="filter-div">
      <span>Filters</span>
      <form className="filter-form">
        <label>
          Check In
          <input type="date">
        </label>
        <label>
          Check Out
          <input type="date">
        </label>
        <select>
          <option value="1">1 Cat</option>
          <option value="2">2 Cat</option>
          <option value="3">3 Cat</option>
          <option value="4">4 Cat</option>
        </select>
        <label>
          Min
          <input type="number"/>
        </label>
        <label>
          Max
          <input type="number"/>
        </label>
      </form>
    </div>
  }
}
