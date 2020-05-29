import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { Search, Grid, Header, Segment, Container, Button } from "semantic-ui-react";
import './style/searchbanner.css';

const initialState = { isLoading: false, results: [], value: "" };

const source = _.times(5, () => ({
  title: faker.company.companyName()
}));

class SearchBanner extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
  
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <div className="banner">
        <div className="search-input-wrapper">
          <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                  leading: true
                })}
                results={results}
                value={value}
                {...this.props}
              />
        </div>
        <div className="search-tags tags">
          <button>Frontend</button>
          <button>Backend</button>
          <button>Fullstack</button>
          <button>Career Services</button>
          <button>SDET</button><br/>
          <button>Cloud</button>
          <button>DevOps</button>
          <button>Security</button>
        </div>
      </div>
    );
  }
}


export default SearchBanner;