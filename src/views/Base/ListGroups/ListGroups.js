import React, { Component, Suspense } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Alert, CardFooter, ListGroup, ListGroupItem, Row, TabContent, TabPane } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class ListGroups extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 7
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="3">
            <Row>
              <ListGroup id="list-tab" role="tablist"  style={{paddingRight: "-5px", borderRight:"0 none", width: "90%"}}>
                <ListGroupItem
                  style={{marginTop: "-25px", borderRight:"1"}}>
                  <div style={{marginTop: "32px", marginBottom: "30px"}}>
                    <h5 className="text-left">Albatha Trading LLC</h5>
                    <small className="text-left">Mohd Ali</small><br/><br/>
                    <div className="text-left">
                      <a className="btn" style={{marginRight:"10px", backgroundColor:"orange", color:"white"}}>Pep</a>
                      <a className="btn" style={{backgroundColor:"orange", color:"white"}}>High Risk</a>
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>Personal Info and Documents</ListGroupItem>
                <ListGroupItem>Company Info</ListGroupItem>
                <ListGroupItem>Company Documents</ListGroupItem>
                <ListGroupItem>Partners Info and Documents</ListGroupItem>
                <ListGroupItem>Transaction Info</ListGroupItem>
                <ListGroupItem>Buyers And Sellers Info</ListGroupItem>
                <ListGroupItem>Risk Profile</ListGroupItem>
                <ListGroupItem onClick={() => this.toggle(7)} action active={this.state.activeTab === 7} style={{backgroundColor:"#405ba0"}} >Security Check
                  <span><i className="fa fa-exclamation-circle fa-lg mt-2 float-right" style={{color:"white", paddingLeft: "9px"}}></i></span>
                </ListGroupItem>
                <ListGroupItem>Quality Check</ListGroupItem>
              </ListGroup>
            </Row>
          </Col>
          <Col xs="9">
            <TabContent activeTab={this.state.activeTab} style={{paddingTop:"-1px", border:"0", backgroundColor: "#f5f7f9"}}>
              <TabPane tabId={7} >
                <div>
                  <h5 className="text-left" style={{color:"#405ba0"}}>Fraud Detected</h5>
                  <h6 className="text-left">Awaiting compliance approval</h6>
                  <br/><br/>
                </div>
                <Row>
                  <Col>
                    <Row>
                      <Card style={{width:"470px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                        <CardHeader style={{backgroundColor: "white", border:"0", marginBottom: "-30px"}}>
                          <div className="float-left">
                            <small style={{color:"#f08613"}}><strong>ENAME HIT</strong></small> <br/><median><strong style={{color:"#405ba0"}}>Mohd Ali</strong></median>
                          </div>
                          <div style={{paddingTop:"25px"}}>
                            <span><br/><small>World check list</small></span>
                            <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
                          </div>
                          <hr style={{paddingLeft:"2px"}}></hr>
                        </CardHeader>
                        <CardBody style={{paddingTop: "-10px"}}>
                          <div>
                            <small style={{color:"#f08613"}}><strong>FURTHER INFO</strong></small>
                          </div>
                          <div>
                            <p>Director of SIMS medical center India private. Director identification dismissed.</p>
                          </div><br/>
                          <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1" style={{width: "120px", backgroundColor: "#405ba0", color:"white"}}>Clear</Button>
                              <Button className="mr-1"
                                      style={{width: "147px", paddingLeft:"1px", paddingRight:"1px", backgroundColor: "#405ba0", color:"white"}}>Request more Info</Button>
                            <Button className="mr-1"  style={{width: "120px", backgroundColor: "#405ba0", color:"white"}}>Decline</Button>

                          </span>
                          </div>
                        </CardBody>
                      </Card>
                    </Row>
                    <Row>
                      <Card style={{width:"470px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                        <CardHeader style={{backgroundColor: "white", border:"0", marginBottom: "-30px"}}>
                          <div className="float-left">
                            <small style={{color:"#f08613"}}><strong>ENAME HIT</strong></small> <br/><median><strong style={{color:"#405ba0"}}>Mohd Ali</strong></median>
                          </div>
                          <div style={{paddingTop:"25px"}}>
                            <span><br/><small>World check list</small></span>
                            <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
                          </div>
                          <hr style={{paddingLeft:"2px"}}></hr>
                        </CardHeader>
                        <CardBody style={{paddingTop: "-10px"}}>
                          <div>
                            <small style={{color:"#f08613"}}><strong>FURTHER INFO</strong></small>
                          </div>
                          <div>
                            <p>Director of SIMS medical center India private. Director identification dismissed.</p>
                          </div><br/>
                          <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1" style={{width: "120px", backgroundColor: "#405ba0", color:"white"}}>Clear</Button>
                              <Button className="mr-1"
                                      style={{width: "147px", paddingLeft:"1px", paddingRight:"1px", backgroundColor: "#405ba0", color:"white"}}>Request more Info</Button>
                            <Button className="mr-1"  style={{width: "120px", backgroundColor: "#405ba0", color:"white"}}>Decline</Button>

                          </span>
                          </div>
                        </CardBody>
                      </Card>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Card style={{width:"470px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                        <CardHeader style={{backgroundColor: "white", border:"0", marginBottom: "-30px"}}>
                          <div className="float-left">
                            <small style={{color:"#f08613"}}><strong>ENAME HIT</strong></small> <br/><median><strong style={{color:"#405ba0"}}>Mohd Ali</strong></median>
                          </div>
                          <div style={{paddingTop:"25px"}}>
                            <span><br/><small>World check list</small></span>
                            <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
                          </div>
                          <hr style={{paddingLeft:"2px"}}></hr>
                        </CardHeader>
                        <CardBody style={{paddingTop: "-10px"}}>
                          <div>
                            <small style={{color:"#f08613"}}><strong>FURTHER INFO</strong></small>
                          </div>
                          <div>
                            <p>Director of SIMS medical center India private. Director identification dismissed.</p>
                          </div><br/>
                          <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1" style={{width: "120px", backgroundColor: "#405ba0", color:"white"}}>Clear</Button>
                              <Button className="mr-1"
                                      style={{width: "147px", paddingLeft:"1px", paddingRight:"1px", backgroundColor: "#405ba0", color:"white"}}>Request more Info</Button>
                            <Button className="mr-1"  style={{width: "120px", backgroundColor: "#405ba0", color:"white"}}>Decline</Button>

                          </span>
                          </div>
                        </CardBody>
                      </Card>
                    </Row>
                    <Row>
                      <Card style={{width:"470px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                        <CardHeader style={{backgroundColor: "white", border:"0", marginBottom: "-30px"}}>
                          <div className="float-left">
                            <small style={{color:"#f08613"}}><strong>ENAME HIT</strong></small> <br/><median><strong style={{color:"#405ba0"}}>Mohd Ali</strong></median>
                          </div>
                          <div style={{paddingTop:"25px"}}>
                            <span><br/><small>World check list</small></span>
                            <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
                          </div>
                          <hr style={{paddingLeft:"2px"}}></hr>
                        </CardHeader>
                        <CardBody style={{paddingTop: "-10px"}}>
                          <div>
                            <small style={{color:"#f08613"}}><strong>FURTHER INFO</strong></small>
                          </div>
                          <div>
                            <p>Director of SIMS medical center India private. Director identification dismissed.</p>
                          </div><br/>
                          <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1" style={{width: "120px", backgroundColor: "#405ba0", color:"white"}}>Clear</Button>
                              <Button className="mr-1"
                                      style={{width: "147px", paddingLeft:"1px", paddingRight:"1px", backgroundColor: "#405ba0", color:"white"}}>Request more Info</Button>
                            <Button className="mr-1"  style={{width: "120px", backgroundColor: "#405ba0", color:"white"}}>Decline</Button>

                          </span>
                          </div>
                        </CardBody>
                      </Card>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={1}>
                <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
                  dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
                  anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum
                  reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
              </TabPane>
              <TabPane tabId={2}>
                <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
                  nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
                  est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
                  deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                  laborum elit adipisicing pariatur cillum.</p>
              </TabPane>
              <TabPane tabId={0}>
                <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                  sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                  aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                  nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                  eiusmod eu pariatur culpa mollit in irure.</p>
              </TabPane>
              <TabPane tabId={4}>
                <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                  sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                  aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                  nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                  eiusmod eu pariatur culpa mollit in irure.</p>
              </TabPane>
              <TabPane tabId={5}>
                <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                  sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                  aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                  nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                  eiusmod eu pariatur culpa mollit in irure.</p>
              </TabPane>
              <TabPane tabId={6}>
                <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
                  sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
                  aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
                  nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                  eiusmod eu pariatur culpa mollit in irure.</p>
              </TabPane>
            </TabContent>
          </Col>
        </Row>

      </div>
    );
  }
}

export default ListGroups;
