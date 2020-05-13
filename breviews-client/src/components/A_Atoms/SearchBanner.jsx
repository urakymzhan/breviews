import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/searchbanner.css';

class SearchBanner extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    tagInputs: [],
    tagCname: false
  };

  onChange = (e) => {
    console.log('onChanges');

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  hanldeTagClick = (e) => {
    this.setState({ tagInputs: [...this.state.tagInputs, e.target.value], tagCname: !this.state.tagCname})
  }
  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      hanldeTagClick,
      state: { activeOption, filteredOptions, showOptions, userInput, tagInputs, tagCname }
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
                <li className={className} key={optionName} onClick={onClick}>
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
    return (
      <div className="banner">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Bootcamp name..."
            className="search-box-name"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          {optionList}
          <input type="text" placeholder="Location..." className="search-box-location" />
          <input type="submit" value="Search" className="search-btn" />
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