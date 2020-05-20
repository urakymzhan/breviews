import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/searchbanner.css';
import { Redirect } from 'react-router-dom';

class SearchBanner extends Component {
  static propTypes = {
    autoCompleteOptions: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',

    tagInputs: [],
    tagCname: false,
    results: []
  };

  handleNameChange = (e) => {
    const { autoCompleteOptions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredOptions = autoCompleteOptions.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput
    });
  };

  handleNameClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };
  hanldeNameKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    // enter choose active name
    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    }
    else if (e.keyCode === 38) {
      if (activeOption === 0) {
         // up return nothing if 0
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } 
    else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        // down increment until options list ends
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  hanldeTagClick = (e) => {
    this.setState({ tagInputs: [...this.state.tagInputs, e.target.value], tagCname: !this.state.tagCname})
  }
  handleSearchClick = async (e) =>  {
    const { userInput, tagInputs } = this.state;
    const url = "/api/results"

    const rawData = await fetch(url, {
      method: "POST",
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userInput,
        tagInputs
      })
    })
    const data = await rawData.json();
    console.log("data", data);
    // test out
    this.setState({
      results: [...this.state.results, data]
    })

  }
  render() {
    const {
      handleNameChange,
      handleNameClick,
      hanldeNameKeyDown,
      hanldeTagClick,
      handleSearchClick,
      state: { activeOption, filteredOptions, showOptions, userInput, tagInputs, tagCname, results }
    } = this;

    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={handleNameClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <ul className="no-options">
            <li>Search result 0</li>
          </ul>
        );
      }
    }
    console.log("hey", this.state.results)
    return (
      <div className="banner">
        <div className="search-input-wrapper">
          <input
            type="search"
            placeholder="Bootcamp name..."
            className="search-box-name"
            onChange={handleNameChange}
            onKeyDown={hanldeNameKeyDown}
            value={userInput}
          />
          {optionList}

          <input type="submit" value="Search" className="search-btn" onClick={handleSearchClick}/>
          {results.length > 0 &&
            <Redirect to={{
              pathname: '/results',
              state: { results }
            }}/>
          }
        </div>
        
        <div className="search-tags">
          <button onClick={hanldeTagClick} value="Frontend" className={tagCname ? "tags active": "tags inactive"}>Frontend</button>
          <button onClick={hanldeTagClick} value="Backend" className={tagCname ? "tags active": "tags inactive"}>Backend</button>
          <button onClick={hanldeTagClick} value="Fullstack" className={tagCname ? "tags active": "tags inactive"}>Fullstack</button>
          <button onClick={hanldeTagClick} value="Career Services" className={tagCname ? "tags active": "tags inactive"}>Career Services</button>
          <button onClick={hanldeTagClick} value="SDET" className={tagCname ? "tags active": "tags inactive"}>SDET</button><br/>
          <button onClick={hanldeTagClick} value="Cloud" className={tagCname ? "tags active": "tags inactive"}>Cloud</button>
          <button onClick={hanldeTagClick} value="DevOps" className={tagCname ? "tags active": "tags inactive"}>DevOps</button>
          <button onClick={hanldeTagClick} value="Security" className={tagCname ? "tags active": "tags inactive"}>Security</button>
        </div>

      </div>
    );
  }
}

export default SearchBanner;