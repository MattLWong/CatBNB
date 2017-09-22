import React from 'react';

class FilterForm extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      minPrice: 1,
      maxPrice: 150
    }
  }

  handleChange(filter) {
    return e => {
      this.setState({[filter]: e.currentTarget.value});
      return this.props.updateFilter(filter, e.currentTarget.value)
    }
  }

  render() {
    return (
      <div className="filter-div">
        <span>Filters</span>
        <form className="filter-form">
          <label>
            Check In
            <input
              type="date"
              onChange={this.handleChange("checkin")}/>
          </label>
          <label>
            Check Out
            <input
              type="date"
              onChange={this.handleChange('checkout')}/>
          </label>
          <select
            onChange={this.handleChange('minBeds')}>
            <option value="1">1 Cat</option>
            <option value="2">2 Cat</option>
            <option value="3">3 Cat</option>
            <option value="4">4 Cat</option>
          </select>
          <label>
            Min
            <input
              type="number"
              value={this.state.minPrice}
              onChange={this.handleChange("minPrice")}/>
          </label>
          <label>
            Max
            <input
              type="number"
              value={this.state.maxPrice}
              onChange={this.handleChange("maxPrice")}/>
          </label>
        </form>
      </div>
    )
  }
}

export default FilterForm;
