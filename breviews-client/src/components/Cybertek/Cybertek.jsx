import React from 'react';
import Header from '../B_Molecules/Header.jsx';
import Footer from '../B_Molecules/Footer.jsx';
import '../../style/style.css';

class Cybertek extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { data, name, review, cons, pros, dateGraduated } = this.props.data;
        console.log(name);

        let { handleSubmit, handleChange } = this.props;
        return (
            <div className="seytech-wrapper">
                <Header />               
                <div className="seytech-reviews-wrapper" style={{width: "80%", margin: "100px auto"}}>
                    <div>
                        <h2>SEYTECH BOOTCAMP <span style={{color: "orange"}}>REVIEWS</span></h2>
                    </div>
                    <div style={{margin: "10px 0", textAlign: "right"}}>
                        <button name="filter" style={{border: "none", padding: "5px 20px", outline: "none", cursor: "pointer"}}>Filter | filter icon here </button>
                    </div>
                    {/* review section start */} 
                    <div className="customer-reviews">
                    {
                        data.map((element) => {
                            console.log(element);
                            return(
                                
                                <div className="review-wrapper" key={element._id}>
                                        <h4 id="review-author">anonymous</h4>
                                        <p id="review-date"> {element.date} </p>
                                        <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                        <span style={{color: "green"}}>PROS: </span>  
                                            {element.pros}    
                                        </p>
                                        <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                            <span style={{color: "darkred"}}>CONS: </span>     
                                            {element.cons}    
                                        </p>
                                        <p id="review-pros" style={{width: "100%", textAlign: "left", fontSize: "80%"}}>
                                            <span id="year-graduated" >Year graduated: </span>     
                                            {element.dateGraduated}    
                                        </p>
                                        <p id="review-text">
                                            {element.review}    
                                        </p>
                                </div>
                               
                            )
                        })
                    }
                    </div>
                    <div className="leave-review">
                        {/* review form start */}
                        <form onSubmit={handleSubmit} style={{border: "none", borderRadius:  "0", width: "100%", backgroundColor: "#a2c4de", textAlign: "center"}}>
                            <div>
                                <label style={{width: "100%", textAlign: "left" }}>
                                Want to leave a review ?
                                <div style={{color: "red", fontSize: "9px"}}> For ethical reason we won't be showing names *</div>
                                <div
                                    style={{ display: "flex", justifyContent: "space-between",  margin: "0.8em 0"}}
                                >
                                    <input
                                        name="name"
                                        style={{width: "50%", padding: "10px", border: "none",  marginRight: "0.8em", marginRight: " 0.8em"}}
                                        type="text"
                                        value={name}
                                        placeholder="Name "
                                        onChange={handleChange}
                                    />
                                    <input
                                        name="dateGraduated"
                                        style={{width: "50%",padding: "10px",  border: "none" }}
                                        type="text"
                                        value={dateGraduated}
                                        placeholder="Year of graduation"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div
                                     style={{ display: "flex", justifyContent: "space-between",  margin: " 0 0 0.8em 0"}}
                                >
                                    <textarea
                                        name="pros"
                                        style={{width: "50%", padding: "10px", border: "none",  marginRight: " 0.8em"}}
                                        type="text"
                                        placeholder="Pros"
                                        value={pros}
                                        onChange={handleChange}
                                    ></textarea>
                                    <textarea
                                        name="cons"
                                        style={{width: "50%", padding: "10px", border: "none" }}
                                        type="text"
                                        placeholder="Cons"
                                        value={cons}
                                        onChange={handleChange}
                                    >
                                    </textarea>                      
                                </div>
                            
                                <textarea 
                                    name="review"
                                    style={{width: "100%", padding: "10px", border: "none",  margin: " 0 0 0.8em 0"}}
                                    type="text"
                                    placeholder="Type review here ..."
                                    value={review}
                                    onChange={handleChange}
                                >
                                </textarea>
                                </label>
                            </div>
                            <div>
                                <input
                                    type="submit" 
                                    value="Submit" 
                                    style={{ border: "none", cursor: "pointer", backgroundColor: "inherit"}}
                                />
                            </div>

                        </form>
                        {/* review form end */}
                    </div>
                </div>
                <Footer />
            </div>
          )
    }

}

export default Cybertek;