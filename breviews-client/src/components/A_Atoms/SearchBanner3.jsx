import './style/searchbanner.css';
import { Redirect } from 'react-router-dom';

import React, { useState, useCallback } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
// Import as a module in your JS
import 'react-bootstrap-typeahead/css/Typeahead.css';


const SEARCH_URI = "/api/search/options";

const AsyncExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = useCallback(query => {
    console.log("query", query)
    setIsLoading(true);
    // why i need query?
    fetch(`${SEARCH_URI}?q=${query}`)
      .then(resp => resp.json())
      .then((options) => {
        console.log("options", options)
        // const options = items.map(i => ({  
        //   id: i._id,
        //   name: i.customName
        // }));
        setOptions(options);
        setIsLoading(false);
      });
  });


  const hanldeTagClick = (e) => {
    console.log('tagss clicked')
    // this.setState({ tagInputs: [...this.state.tagInputs, e.target.value], tagCname: !this.state.tagCname})
  }
  const handleOtion = () => {
    console.log('handleOtion selected')
    // this.setState({ tagInputs: [...this.state.tagInputs, e.target.value], tagCname: !this.state.tagCname})
  }
 

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
            renderMenuItemChildren={(option, props) => (
              <div>
                <span
                  onChange={handleOtion}
                >{option}</span>
              </div>
            )}
          />
          <div
            className="rsw"
          >
            <button 
              type="submit" 
              value="submit" 
              className="search-btn" 
              // onClick={handleSearchClick}
              >
            </button>
          </div>

            {/* {results.length > 0 &&
              <Redirect to={{
                pathname: '/results',
                state: { results }
              }}/>
            } */}
          
        </div>
        
        <div className="search-tags">
          <button onClick={hanldeTagClick} >Frontend</button>
          <button onClick={hanldeTagClick} >Backend</button>
          <button onClick={hanldeTagClick} >Fullstack</button>
          <button onClick={hanldeTagClick} >Career Services</button>
          <button onClick={hanldeTagClick} >SDET</button><br/>
          <button onClick={hanldeTagClick} >Cloud</button>
          <button onClick={hanldeTagClick} >DevOps</button>
          <button onClick={hanldeTagClick} >Security</button>
        </div>
      </div>

  );
};

export default AsyncExample;

