import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../style/style.css';

const ModalExample = (props) => {

  const { handleChange, handleSubmit, sName, name, review, cons, pros, dateGraduated  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <Button onClick={toggle} style={{ backgroundColor:"inherit", color: "#fff"}}>Write a review</Button>
        <Modal isOpen={modal} toggle={toggle} className="openmodal">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <div className="leave-review">
                    <form className="leave-review-box" onSubmit={handleSubmit} >
                        <div>
                            <label className="leave-review-label">
                            <div>Want to leave a review ?</div>
                            <div className="leave-review-warning"> For ethical reason we won't be showing names *</div>
                            <div className="leave-review-row1">
                                <input
                                    name="name"
                                    style={{width: "50%", padding: "10px", border: "none",  marginRight: "0.8em", marginRight: " 0.8em"}}
                                    type="text"
                                    value={name}
                                    placeholder="Name "
                                    onChange={(e) => handleChange(e, sName)}
                                />
                                <input
                                    name="dateGraduated"
                                    style={{width: "50%",padding: "10px",  border: "none" }}
                                    type="text"
                                    value={dateGraduated}
                                    placeholder="Year of graduation"
                                    onChange={(e) => handleChange(e, sName)}
                                />
                            </div>
                            <div className="leave-review-row2">
                                <textarea
                                    name="pros"
                                    style={{width: "50%", padding: "10px", border: "none",  marginRight: " 0.8em"}}
                                    type="text"
                                    placeholder="Pros"
                                    value={pros}
                                    onChange={(e) => handleChange(e, sName)}
                                ></textarea>
                                <textarea
                                    name="cons"
                                    style={{width: "50%", padding: "10px", border: "none" }}
                                    type="text"
                                    placeholder="Cons"
                                    value={cons}
                                    onChange={(e) => handleChange(e, sName)}
                                >
                                </textarea>                      
                            </div>
                            <div>
                                <textarea 
                                    name="review"
                                    style={{width: "100%", padding: "10px", border: "none",  margin: " 0 0 0.8em 0"}}
                                    type="text"
                                    placeholder="Type review here ..."
                                    value={review}
                                    onChange={(e) => handleChange(e, sName)}
                                >
                                </textarea>
                            </div>
                            </label>
                            <div style={{textAlign: "left", margin: " 0 0 0.8em 0", fontSize: "70%"}}>
                                <span>Were you able to find a job after 4 month of graduation ? </span>

                                <input type="radio" id="yes" name="jobfound" value="yes"/>
                                <label htmlFor="yes"> Yes</label>

                                <input type="radio" id="no" name="jobfound" value="no" />
                                <label htmlFor="no"> No</label>
                            </div>
                            <div>
                                <input
                                    type="submit" 
                                    value="Submit" 
                                    style={{ border: "none", cursor: "pointer", backgroundColor: "inherit", margin: "0.8em 0"}}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
  );
}
export default ModalExample;