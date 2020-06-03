import "./style/searchbanner.scss";
import { withRouter } from "react-router";
import React, { useState, useCallback, useEffect } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

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
  "USA",
  "Europe",
];

const SearchBanner = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("option") || ""
  );
  const [value, setValue] = useState('');

  const [selectedTags, setSelectedTags] = useState(
    JSON.parse(localStorage.getItem("tags")) || []
  );

  // side effect
  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(selectedTags));
    localStorage.setItem("option", selectedOption);
  }, [selectedTags, selectedOption]);

  const handleSearch = useCallback((query) => {
    setIsLoading(true);
    fetch(`/api/search/options?q=${query}`)
      .then((resp) => resp.json())
      .then((options) => {
        setOptions(options);
        setIsLoading(false);
      });
  });

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

  const handleOption = (option) => {
    const strOption = option.join();
    setSelectedOption(strOption);
  };

  const handleSearchClick = (e) => {

    const redirectLocation = {
      pathname: "/results",
      search: "?category=search",
      state: { selectedOption, selectedTags },
    };

    // TODO: temorary not a react way of solution
    // if (selectedOption.length > 0 || selectedTags.length > 0) {
      props.history.push(redirectLocation);
      window.location.reload();
    // }
  };

  console.log("props", props);
  console.log("value", value);

  const { path } = props.match;
  console.log(path);
  return (
    <div className="banner">
      <div className="search-input-wrapper">
        <AsyncTypeahead
          id="async-example"
          isLoading={isLoading}
          labelKey="login"
          minLength={3}
          onSearch={handleSearch}
          options={options}
          placeholder="Search Bootcamp Name"
          onChange={handleOption}
          value={value}
          renderMenuItemChildren={(option, props) => (
            <div className="options">
              <span>{option}</span>
            </div>
          )}
        />
        <div className="rsw">
          <button
            type="submit"
            value="submit"
            className="search-btn"
            onClick={handleSearchClick}
            // onKeyPress
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
