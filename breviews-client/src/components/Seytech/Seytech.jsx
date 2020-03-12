import React from 'react';
import Header from '../Header.jsx';

class Seytech extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { data, nameInput, reviewInput } = this.props.data;
        let { handleSubmit, handleChange } = this.props;
        return (
            <div>
                <Header />               
                <div className="seytech-reviews-wrapper" style={{width: "80%", margin: "100px auto"}}>
                    <div>
                        <h2>SEYTECH SCHOOL REVIEWS</h2>
                    </div>
                    <div style={{margin: "10px 0", textAlign: "right"}}>
                        <button name="filter" style={{border: "none", padding: "5px 20px", outline: "none", cursor: "pointer"}}>Filter | filter icon here </button>
                    </div>
                    {/* review section start */} 
                    <div className="customer-reviews">
                        {/* <div className="review-wrapper" > */}
                    {
                        data.map((element) => {
                            return(
                                
                                <div className="review-wrapper" key={element._id}>
                                        <h4 id="review-author">anonymous</h4>
                                        <p id="review-date"> {element.date} </p>
                                        <p id="review-text">
                                            {element.review}    
                                        </p>
                                </div>
                               
                            )
                        })
                    }
                        {/* </div> */}
                    </div>
                    <div className="leave-review" style={{margin: "30px 0"}}>
                        {/* review form start */}
                        <form onSubmit={handleSubmit} style={{border: "none", width: "100%", backgroundColor: "#f2f2f2", textAlign: "center"}}>
                            <div>
                                <label style={{width: "100%", textAlign: "left"}}>
                                Leave a review:
                                <input
                                    name="name"
                                    style={{width: "100%", padding: "10px", border: "none", borderRadius: "10px", margin: "1em 0"}}
                                    type="text"
                                    value={nameInput}
                                    placeholder="Name - We don't show it on page"
                                    onChange={handleChange}
                                />
                                <input
                                    name="review"
                                    style={{width: "100%", padding: "10px", border: "none", borderRadius: "10px", margin: "1em 0"}}
                                    type="text"
                                    placeholder="Type here ..."
                                    value={reviewInput}
                                    onChange={handleChange}
                                />
                                </label>
                            </div>
                            <div>
                                <input 
                                    type="submit" 
                                    value="Submit" 
                                    style={{width: "50%", padding: "8px", border: "none", borderRadius: "10px"}}
                                />
                            </div>
                        </form>
                        {/* review form end */}
                    </div>
                </div>
              <footer>
                      <p>All Rights Reserved</p>
                      <p>© 2020</p>
              </footer>
            </div>
          )
    }

}

export default Seytech;