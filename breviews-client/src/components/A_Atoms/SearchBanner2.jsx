import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid, Header, Segment, Container, Button } from "semantic-ui-react";
import './style/searchbanner.scss';

const data = [
  {
    "title": "Seytech",
    // "location": ["Remote", "Chicago"],
    // "tags": ["Frontend", "JavaScript", "Remote", "Career Services"],
  },
  {
    "title": "Cybertek",
    // "location": ["Remote", "Chicago", "Virginia", "London"],
    // "tags": ["SDET", "Java", "Remote", "Career Services"],
  },
  {
    "title": "Salesfore Bootcamp",
    // "location": ["Remote"],
    // "tags": ["Salesforce", "Remote", "Career Services"],
  },
  {
    "title": "DevXSchool",
    // "location": ["Remote", "Chicago"],
    // "tags": ["SDET", "Remote", "Career Services", "Java"],
  },
  {
    "title": "Cloudgate Academy",
    // "location": ["Remote", "Chicago"],
    // "tags": ["Cloud", "DevOps", "Career Services", "AWS"],
  }
]
const initialState = { isLoading: false, results: [], value: "" };


class SearchBanner extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => { 
    this.setState({ value: result.title });
  }

  handleSearchChange = (e, { value }) => {

    console.log("value", value)
  
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(data, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    console.log("results", results)
    console.log(this.props)
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