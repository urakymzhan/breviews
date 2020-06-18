import "./style/searchbanner.scss";
import { withRouter } from "react-router";
import React, { useState, useEffect } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Search } from "semantic-ui-react";
import _ from "lodash";

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
// test data to limit options
// const options = [
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"},
//   {title: "Seytech"}
// ];

const SearchBanner = (props) => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  // localStorage.getItem("value") ?
  const [value, setValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.API_URL}/search/options?q=${value}`)
      .then((resp) => resp.json())
      .then((options) => {
        setOptions(options);
      });
    setIsLoading(false);
    // side effect
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
    // backend accepts as selectedOption
    // you can change it though
    const selectedOption = value;
    const redirectLocation = {
      pathname: "/results",
      search: "?category=search",
      state: { selectedOption, selectedTags },
    };
    if (selectedOption.length > 0 || selectedTags.length > 0) { 
      props.history.push(redirectLocation);
    }
  };

  const handleResultSelect = (e, { result }) => { 
    setValue(result.title);
  }

  const handleSearchChange = (e, { value }) => {
    // setIsLoading(true);
    setValue(value);

    const re = new RegExp(_.escapeRegExp(value), "i");
    const isMatch = (result) => re.test(result.title);

    // setIsLoading(false);
    setResults(_.filter(options, isMatch));
  };

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
          <button
            type="submit"
            value="submit"
            className="search-btn"
            onClick={handleSearchClick}
            // add onKeyPress
          ></button>
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
