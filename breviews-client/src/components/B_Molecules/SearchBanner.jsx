import "./style/searchbanner.scss";
import { withRouter } from "react-router";
import React, { useState, useCallback, useEffect } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Search, Grid, Header, Segment, Button } from "semantic-ui-react";
import _ from "lodash";
import { Link } from "react-router-dom";
const initalTags = [
  "Frontend",
  "Backend",
  "Fullstack",
  "Career Services",
  "SDET",
  "Cloud",
  "DevOps",
  "Security",

  "Python",
  "Java",
  "Mobile",
  "C#",
];

const SearchBanner = (props) => {
  const [options, setOptions] = useState([]);
  // const [selectedOption, setSelectedOption] = useState(
  //   localStorage.getItem("option") || ""
  // );
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const [selectedTags, setSelectedTags] = useState([]);

  // side effect
  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.API_URL}/search/options?q=${value}`)
      .then((resp) => resp.json())
      .then((options) => {
        console.log("options", options);
        setOptions(options);
      });
    setIsLoading(false);
  }, [value]);

  const hanldeTagClick = (tagValue) => {
    let newArr = selectedTags.filter((tag) => tag === tagValue);
    if (newArr.length === 0) {
      // add
      let newArr2 = [...selectedTags, tagValue];
      setSelectedTags(newArr2);
    } else {
      // remove
      let newArr3 = selectedTags.filter((tag) => tag !== tagValue);
      setSelectedTags(newArr3);
    }
  };

  const handleSearchClick = (e) => {
    const selectedOption = value;

    // if(props.getData) {
    //   props.getData(selectedOption, selectedTags);
    // } else {
    // }
    const redirectLocation = {
      pathname: "/results",
      search: "?category=search",
      state: { selectedOption, selectedTags },
    };

    // TODO: temorary not a react way of solution
    if (value.length > 0 || selectedTags.length > 0) {
      props.history.push(redirectLocation);
      window.location.reload();
    }
  };

  const handleResultSelect = (e, { result }) => setValue(result.title);

  const handleSearchChange = (e, { value }) => {
    // setIsLoading(true);
    setValue(value);

    const re = new RegExp(_.escapeRegExp(value), "i");
    const isMatch = (result) => re.test(result.title);

    // setIsLoading(false);
    setResults(_.filter(options, isMatch));
  };

  // console.log("value", value);
  // console.log("results", results);

  return (
    <div className="banner">
      <div className="search-input-wrapper">
        <Search
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={_.debounce(handleSearchChange, 500, {
            leading: true,
          })}
          results={results}
          value={value}
          placeholder="Search Bootcamp"
          // {...props}
        />
        <div className="rsw">
          {/* <Link to="results"> */}
          <button
            type="submit"
            value="submit"
            className="search-btn"
            onClick={handleSearchClick}
            // onKeyPress
          ></button>
          {/* </Link> */}
        </div>
      </div>

      <div className="search-tags">
        {initalTags.map((tag, i) => {
          const found = selectedTags.some((el) => el === tag);
          const clsName = found ? "tags active" : "tags";
          return (
            <button
              key={i}
              onClick={() => hanldeTagClick(tag)}
              className={clsName}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(SearchBanner);
