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
import Dashboard from '../Cards/Cards';
import Company from '../Company/CompanyInformation';
import Partner from '../Partners/Partners';

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

  handleRedirect() {
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
    console.log('check for partners', this.props);
    if (this.state.goToDashboard) {
      return (
        <div className="sidebar-hidden aside-menu-hidden">
          <Dashboard companyData={this.props.customerData}/>
        </div>)
    }
    return (
      <div className="animated fadeIn">
        <div style={{paddingBottom: "35px"}}>
          <Button color="warning" onClick={this.handleRedirect} className="mr-4 btn-pill">
            Go To Dashboard
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
                    <small className="text-left">{this.props.customerData.partners_details.map((partner) => {
                      return partner.name + ", "
                    })}</small>
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
                <Company customer={this.props.customerData.customer_information}/>
              </TabPane>
              <TabPane tabId={2}>
                <div>
                  <h5 className="text-left" style={{color: "#405ba0"}}>Business Address (for all official
                    communication)</h5>
                  <br/><br/>
                </div>
                <form key="business">
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
                        <Input type="text" id="postal-code"
                               value={this.props.customerData.business_address.street_name}/>
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
                <div>
                  <h5 className="text-left" style={{color: "#405ba0"}}>VAT (Value Added Tax) Registration details</h5>
                  <br/><br/>
                </div>
                <form key="vat">
                  <FormGroup row className="my-0">
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="city">Tax registration number (TRN)</Label>
                        <Input type="text" id="city"
                               value={this.props.customerData.VAT_Registration.registration_number}/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="postal-code">Tax registration number (TRN) effective date</Label>
                        <Input type="text" id="postal-code"
                               value={this.props.customerData.VAT_Registration.effective_date}/>
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
                  <Partner partners={this.props.customerData.partners_details}/>
              </TabPane>
              <TabPane tabId={7}>
                <p>Information coming later..</p>
              </TabPane>
              <TabPane tabId={6}>
                <p>Information coming later..</p>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListGroups;
