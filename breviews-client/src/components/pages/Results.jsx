import React, {useState, useEffect} from "react";
import "./style/landing.css";
import { withRouter } from "react-router-dom";
import { SearchBanner, Spinner } from '../A_Atoms';
import axios from 'axios';

const Results = (props) => {

  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
 
  useEffect(() => {
    // topbootcamps
    // remotebootcamps
    // search input based results
    console.log("useEffect inside Results called"); 
    async function fetchData () {
      const result = await axios(
        '/api/autoCompleteNames',
      );
      setAutoCompleteOptions(result.data);
    }
    fetchData();
  }, []);

  let content = <Spinner />;

  if (true) {
    content = (
      <div>
          All Results
      </div>
    );
  }
  console.log("result page props", props.location.state);
  console.log("autoCompleteOptions", autoCompleteOptions)

  return (
    <div className="main-wrapper">
      <SearchBanner
        autoCompleteOptions={autoCompleteOptions} 
      />
        {content}
    </div>
  );
}

export default withRouter(Results);
