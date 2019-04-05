import React, {Component, Suspense} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  FormGroup,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
  TabContent,
  TabPane, Input
} from 'reactstrap';
import {AppSwitch} from '@coreui/react'
import Dashboard from '../../Dashboard/Dashboard'

class ListGroups extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      goToDashboard: false
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(){
    this.setState({goToDashboard: true})
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    if(this.state.goToDashboard){
      return <Dashboard company={this.props.customerData}/>;
    }
    return (
      <div className="animated fadeIn">
        <div style={{paddingBottom: "35px"}}>
          <Button onClick={this.handleRedirect} className="btn-lg btn-pill"
                  style={{backgroundColor: 'rgb(64, 91, 160)', color: 'white'}}>
            <i className="fa fa-dot-circle-o"></i>
            Dashboard
          </Button>
        </div>
        <Row>
          <Col xs="3">
            <Row>
              <ListGroup id="list-tab" role="tablist"
                         style={{paddingRight: "-5px", borderRight: "0 none", width: "90%"}}>
                <ListGroupItem
                  style={{marginTop: "-25px", borderRight: "1"}}>
                  <div style={{marginTop: "32px", marginBottom: "30px"}}>
                    <h5 className="text-left">{this.props.customerData.customer_information.name}</h5>
                    <small className="text-left">Mohd Ali</small>
                    <br/><br/>
                    <div className="text-left">
                      <a className="btn"
                         style={{marginRight: "10px", backgroundColor: "orange", color: "white"}}>Pep</a>
                      <a className="btn" style={{backgroundColor: "orange", color: "white"}}>High Risk</a>
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1}>
                  Company Info
                </ListGroupItem>
                <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2}>
                  Business Address
                </ListGroupItem>
                <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3}>
                  VAT (Value Added Tax) Registration details
                </ListGroupItem>
                <ListGroupItem onClick={() => this.toggle(4)} action active={this.state.activeTab === 4}>
                  Details of Proprietors / Partners / Directors / POA Holders
                </ListGroupItem>
                <ListGroupItem onClick={() => this.toggle(7)} action active={this.state.activeTab === 7}>Security Check
                  <span><i className="fa fa-exclamation-circle fa-lg mt-2 float-right"
                           style={{color: "white", paddingLeft: "9px"}}></i></span>
                </ListGroupItem>
                <ListGroupItem>Quality Check</ListGroupItem>
              </ListGroup>
            </Row>
          </Col>
          <Col xs="9">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId={7}>
                <div>
                  <h5 className="text-left" style={{color: "#405ba0"}}>Fraud Detected</h5>
                  <h6 className="text-left">Awaiting compliance approval</h6>
                  <br/><br/>
                </div>
                <Row>
                  <Col>
                    <Row>
                      <Card style={{width: "470px", border: "0", boxShadow: "4px 2px 33px 3px rgba(224,224,224,1)"}}>
                        <CardHeader style={{backgroundColor: "white", border: "0", marginBottom: "-30px"}}>
                          <div className="float-left">
                            <small style={{color: "#f08613"}}><strong>ENAME HIT</strong></small>
                            <br/>
                            <median><strong style={{color: "#405ba0"}}>Mohd Ali</strong></median>
                          </div>
                          <div style={{paddingTop: "25px"}}>
                            <span><br/><small>World check list</small></span>
                            <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
                          </div>
                          <hr style={{paddingLeft: "2px"}}></hr>
                        </CardHeader>
                        <CardBody style={{paddingTop: "-10px"}}>
                          <div>
                            <small style={{color: "#f08613"}}><strong>FURTHER INFO</strong></small>
                          </div>
                          <div>
                            <p>Director of SIMS medical center India private. Director identification dismissed.</p>
                          </div>
                          <br/>
                          <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1"
                                    style={{width: "120px", backgroundColor: "#405ba0", color: "white"}}>Clear</Button>
                              <Button className="mr-1"
                                      style={{
                                        width: "147px",
                                        paddingLeft: "1px",
                                        paddingRight: "1px",
                                        backgroundColor: "#405ba0",
                                        color: "white"
                                      }}>Request more Info</Button>
                            <Button className="mr-1" style={{
                              width: "120px",
                              backgroundColor: "#405ba0",
                              color: "white"
                            }}>Decline</Button>

                          </span>
                          </div>
                        </CardBody>
                      </Card>
                    </Row>
                    <Row>
                      <Card style={{width: "470px", border: "0", boxShadow: "4px 2px 33px 3px rgba(224,224,224,1)"}}>
                        <CardHeader style={{backgroundColor: "white", border: "0", marginBottom: "-30px"}}>
                          <div className="float-left">
                            <small style={{color: "#f08613"}}><strong>ENAME HIT</strong></small>
                            <br/>
                            <median><strong style={{color: "#405ba0"}}>Mohd Ali</strong></median>
                          </div>
                          <div style={{paddingTop: "25px"}}>
                            <span><br/><small>World check list</small></span>
                            <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
                          </div>
                          <hr style={{paddingLeft: "2px"}}></hr>
                        </CardHeader>
                        <CardBody style={{paddingTop: "-10px"}}>
                          <div>
                            <small style={{color: "#f08613"}}><strong>FURTHER INFO</strong></small>
                          </div>
                          <div>
                            <p>Director of SIMS medical center India private. Director identification dismissed.</p>
                          </div>
                          <br/>
                          <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1"
                                    style={{width: "120px", backgroundColor: "#405ba0", color: "white"}}>Clear</Button>
                              <Button className="mr-1"
                                      style={{
                                        width: "147px",
                                        paddingLeft: "1px",
                                        paddingRight: "1px",
                                        backgroundColor: "#405ba0",
                                        color: "white"
                                      }}>Request more Info</Button>
                            <Button className="mr-1" style={{
                              width: "120px",
                              backgroundColor: "#405ba0",
                              color: "white"
                            }}>Decline</Button>

                          </span>
                          </div>
                        </CardBody>
                      </Card>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Card style={{width: "470px", border: "0", boxShadow: "4px 2px 33px 3px rgba(224,224,224,1)"}}>
                        <CardHeader style={{backgroundColor: "white", border: "0", marginBottom: "-30px"}}>
                          <div className="float-left">
                            <small style={{color: "#f08613"}}><strong>ENAME HIT</strong></small>
                            <br/>
                            <median><strong style={{color: "#405ba0"}}>Mohd Ali</strong></median>
                          </div>
                          <div style={{paddingTop: "25px"}}>
                            <span><br/><small>World check list</small></span>
                            <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
                          </div>
                          <hr style={{paddingLeft: "2px"}}></hr>
                        </CardHeader>
                        <CardBody style={{paddingTop: "-10px"}}>
                          <div>
                            <small style={{color: "#f08613"}}><strong>FURTHER INFO</strong></small>
                          </div>
                          <div>
                            <p>Director of SIMS medical center India private. Director identification dismissed.</p>
                          </div>
                          <br/>
                          <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1"
                                    style={{width: "120px", backgroundColor: "#405ba0", color: "white"}}>Clear</Button>
                              <Button className="mr-1"
                                      style={{
                                        width: "147px",
                                        paddingLeft: "1px",
                                        paddingRight: "1px",
                                        backgroundColor: "#405ba0",
                                        color: "white"
                                      }}>Request more Info</Button>
                            <Button className="mr-1" style={{
                              width: "120px",
                              backgroundColor: "#405ba0",
                              color: "white"
                            }}>Decline</Button>

                          </span>
                          </div>
                        </CardBody>
                      </Card>
                    </Row>
                    <Row>
                      <Card style={{width: "470px", border: "0", boxShadow: "4px 2px 33px 3px rgba(224,224,224,1)"}}>
                        <CardHeader style={{backgroundColor: "white", border: "0", marginBottom: "-30px"}}>
                          <div className="float-left">
                            <small style={{color: "#f08613"}}><strong>ENAME HIT</strong></small>
                            <br/>
                            <median><strong style={{color: "#405ba0"}}>Mohd Ali</strong></median>
                          </div>
                          <div style={{paddingTop: "25px"}}>
                            <span><br/><small>World check list</small></span>
                            <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
                          </div>
                          <hr style={{paddingLeft: "2px"}}></hr>
                        </CardHeader>
                        <CardBody style={{paddingTop: "-10px"}}>
                          <div>
                            <small style={{color: "#f08613"}}><strong>FURTHER INFO</strong></small>
                          </div>
                          <div>
                            <p>Director of SIMS medical center India private. Director identification dismissed.</p>
                          </div>
                          <br/>
                          <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1"
                                    style={{width: "120px", backgroundColor: "#405ba0", color: "white"}}>Clear</Button>
                              <Button className="mr-1"
                                      style={{
                                        width: "147px",
                                        paddingLeft: "1px",
                                        paddingRight: "1px",
                                        backgroundColor: "#405ba0",
                                        color: "white"
                                      }}>Request more Info</Button>
                            <Button className="mr-1" style={{
                              width: "120px",
                              backgroundColor: "#405ba0",
                              color: "white"
                            }}>Decline</Button>

                          </span>
                          </div>
                        </CardBody>
                      </Card>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId={1}>
                <form onSubmit="" className="form-horizontal">
                  <Row>
                    <span><strong className="text-center">Company Information</strong></span>
                    <hr style={{color: 'blue'}}></hr>
                    <br/>
                  </Row>
                  <FormGroup>
                    <Label htmlFor="company">Company</Label>
                    <Input type="text" id="company" value={this.props.customerData.customer_information.name}/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="vat">Trading Licence Number</Label>
                    <Input type="text" id="vat" value={this.props.customerData.customer_information.trade_licence_number}/>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="street">Annual Turn Over</Label>
                        <Input type="text" id="street" value={this.props.customerData.customer_information.annual_turnover}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="street">No. of Employees</Label>
                        <Input type="text" id="street"
                               value={this.props.customerData.customer_information.number_of_employees}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="street">Company website</Label>
                        <Input type="text" id="street" value={this.props.customerData.customer_information.company_website}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </form>
              </TabPane>
              <TabPane tabId={2}>
                <form>
                  <Row>
                    <span><strong>Business Address</strong> (for all official communication)</span><br/>
                  </Row>
                  <br/>

                  <FormGroup row className="my-0">
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="city">Building name</Label>
                        <Input type="text" id="city" value={this.props.customerData.business_address.building_name}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Shop/Apartment/Office No</Label>
                        <Input type="text" id="postal-code"
                               value={this.props.customerData.business_address.shop_apartment_office_no}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">P.O Box</Label>
                        <Input type="text" id="postal-code"
                               value={this.props.customerData.business_address.shop_apartment_office_no}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="city">Locality/Area</Label>
                        <Input type="text" id="city" value={this.props.customerData.business_address.locality}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Street/No</Label>
                        <Input type="text" id="postal-code" value={this.props.customerData.business_address.street_name}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="city">Landmark</Label>
                        <Input type="text" id="city" value={this.props.customerData.business_address.land_mark}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">City</Label>
                        <Input type="text" id="postal-code" value={this.props.customerData.business_address.city}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Emirate</Label>
                        <Input type="text" id="postal-code" placeholder="Enter Emirates"/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="city">Listed Telephone No</Label>
                        <Input type="text" id="city" value={this.props.customerData.business_address.listed_telephone}/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="postal-code">Fax</Label>
                        <Input type="text" id="postal-code" value={this.props.customerData.business_address.fax}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="country">E-mail ID</Label>
                    <Input type="text" id="country" value={this.props.customerData.business_address.email}/>
                  </FormGroup>
                </form>
              </TabPane>
              <TabPane tabId={3}>
                <form>
                  <Row>
                    <span><strong>VAT (Value Added Tax) Registration details:</strong></span><br/>
                  </Row>
                  <br/>


                  <FormGroup row className="my-0">
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="city">Tax registration number (TRN)</Label>
                        <Input type="text" id="city" value={this.props.customerData.VAT_Registration.registration_number}/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="postal-code">Tax registration number (TRN) effective date</Label>
                        <Input type="text" id="postal-code" value={this.props.customerData.VAT_Registration.effective_date}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="country">Tax registration address</Label>
                    <Input type="text" id="country" value={this.props.customerData.VAT_Registration.address}/>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="city">Tax state</Label>
                        <Input type="text" id="city" value={this.props.customerData.VAT_Registration.state}/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="postal-code">Tax country</Label>
                        <Input type="text" id="postal-code" value={this.props.customerData.VAT_Registration.country}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </form>
              </TabPane>
              <TabPane tabId={4}>
                <form>
                  <Row>
                    <span><strong>Details of Proprietors/Partners/Directors/POA Holders:</strong></span><br/>
                  </Row>
                  <br/>

                  <Card style={{paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px'}}>
                    {this.props.customerData.partners_details.map((partner, index) =>
                      <Col xs="6">
                        <Card>
                          <CardBody>
                            <Row xs="3">
                              <div className="progress-group-prepend">
                                <span className="progress-group-text">Name:</span>
                              </div>
                              <div className="progress-group-bars">
                                <Input type="text" id="postal-code" value={partner.name}/>
                              </div>
                              <div className="progress-group-prepend">
                                <span className="progress-group-text">Mobile Number:</span>
                              </div>
                              <div className="progress-group-bars">
                                <Input type="text" id="postal-code" value={partner.mobile}/>
                              </div>
                              <div className="progress-group-prepend">
                                <span className="progress-group-text">Phone</span>
                              </div>
                              <div className="progress-group-bars">
                                <Input type="text" id="postal-code" value={partner.phone}/>
                              </div>
                            </Row>
                            <Row xs="3">
                              <div className="progress-group-prepend">
                                <span className="progress-group-text">Email Address</span>
                              </div>
                              <div className="progress-group-bars">
                                <Input type="text" id="postal-code" value={partner.email}/>
                              </div>
                              <div className="progress-group-prepend">
                                <span className="progress-group-text">Mail Address:</span>
                              </div>
                              <div className="progress-group-bars">
                                <Input type="text" id="postal-code" value={partner.mailing_address}/>
                              </div>
                              <div className="progress-group-prepend">
                                <span className="progress-group-text">Place of Birth</span>
                              </div>
                              <div className="progress-group-bars">
                                <Input type="text" id="postal-code" value={partner.place_of_birth}/>
                              </div>
                            </Row>

                          </CardBody>
                        </Card>
                      </Col>
                    )}
                  </Card>
                </form>
              </TabPane>
              <TabPane tabId={5}>
                <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex
                  elit nostrud
                  ut dolore nisi officia magna
                  sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua
                  labore
                  aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet
                  consectetur quis amet culpa. Quis ullamco
                  nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                  eiusmod eu pariatur culpa mollit in irure.</p>
              </TabPane>
              <TabPane tabId={6}>
                <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex
                  elit nostrud
                  ut dolore nisi officia magna
                  sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua
                  labore
                  aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet
                  consectetur quis amet culpa. Quis ullamco
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
