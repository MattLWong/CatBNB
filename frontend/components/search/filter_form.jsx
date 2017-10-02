import React from 'react';

class FilterForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      minPrice: 1,
      maxPrice: 150,
      check_in: "",
      check_out: "",
      minBeds: this.props.minBeds
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter) {
    return e => {
        this.setState({[filter]: e.currentTarget.value});
    }

  }

  updateFilter(filter) {
    return e => {
      if (this.state.minPrice == "") {
        this.setState({minPrice: "0"});
        this.props.updateFilter(filter, "0");
      } else if (this.state.maxPrice == "") {
        this.setState({maxPrice: "150"});
        this.props.updateFilter(filter, "150");
      } else {
        this.props.updateFilter(filter, this.state[filter])
      }
    }
  }

  handleImmediateChange(filter) {
    return e => {
      this.setState({[filter]: e.currentTarget.value}, function() {this.props.updateFilter(filter, this.state.minBeds)})
    }
  }

  renderSelected(val) {
    if (val == this.state.minBeds) {
      return "selected"
    }
  }

  render() {
    return (
      <div className="filter-div">
        <form className="filter-form"
          >
          <label>
            Check In &nbsp;
            <input
              type="date"
              onChange={this.handleChange("check_in")}
              />
          </label>
          <label>
            Check Out &nbsp;
            <input
              type="date"
              onChange={this.handleChange('checkout')}
              />
          </label>
          <br/>
          <label>
            Min &nbsp;
            <input
              type="number"
              value={this.state.minPrice}
              onChange={this.handleChange("minPrice")}
              onBlur={this.updateFilter('minPrice')}/>
          </label>
            &nbsp;
          <label>
            Max &nbsp;
            <input
              type="number"
              value={this.state.maxPrice}
              onChange={this.handleChange("maxPrice")}
              onBlur={this.updateFilter('maxPrice')}/>
          </label>
          <select
            onChange={this.handleImmediateChange('minBeds')}>
            <option value="1" selected={this.renderSelected("1")}>1 Cat</option>
            <option value="2" selected={this.renderSelected("2")}>2 Cat</option>
            <option value="3" selected={this.renderSelected("3")}>3 Cat</option>
            <option value="4" selected={this.renderSelected("4")}>4 Cat</option>
          </select>
        </form>
      </div>
    )
  }
}

export default FilterForm;
