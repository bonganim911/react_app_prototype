import React, {Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  CardFooter,
  Button,
  Form} from 'reactstrap';
import Details from '../ListGroups/ListGroups';


class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      previewData: {},
      customerInformation: {},
      businessAddress: {},
      registeredAddress: {},
      vatRegistration: {},
      partnersDetails: {},
      goToDetailSection: false,
      filePath:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.setState({goToDetailSection: true});
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  toggleFade() {
    this.setState((prevState) => {
      return {fadeIn: !prevState}
    });
  }

  componentDidMount() {
    this.setState({
      previewData: JSON.parse(window.sessionStorage.getItem('previewData')),
      filePath: window.sessionStorage.getItem('file_name')
    });
  }

  addToCompanies(){
    var companies = JSON.parse(window.localStorage.getItem('companies'));

    if(!companies){
      companies = [];
    }
    companies.push(this.state.previewData);
    window.localStorage.setItem('companies', JSON.stringify(companies));
  }


  render() {
    let previewData = JSON.parse(window.sessionStorage.getItem('previewData'));
    let filePath = window.sessionStorage.getItem('file_name');
    if(this.state.goToDetailSection){
      this.addToCompanies();
      return (<Details customerData={this.state.previewData}/>)
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="10" sm="6">
            <Card>
              <CardBody>
                <img style={{float: 'right'}} src={this.state.filePath} alt="no image supplied"/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="14" sm="6">
            <Card>
              <CardBody>
                <Form onSubmit={this.handleSubmit} className="form-horizontal">
                  <Row>
                    <span><strong>Company Information</strong></span>
                    <hr style={{color: 'blue'}}></hr>
                    <br/>
                  </Row>
                  <FormGroup>
                    <Label htmlFor="company">Company</Label>
                    <Input type="text" id="company" placeholder={previewData.customer_information.name}/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="vat">Trading Licence Number</Label>
                    <Input type="text" id="vat" placeholder={previewData.customer_information.trade_licence_number}/>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="street">Annual Turn Over</Label>
                        <Input type="text" id="street" placeholder={previewData.customer_information.annual_turnover}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="street">No. of Employees</Label>
                        <Input type="text" id="street"
                               placeholder={previewData.customer_information.number_of_employees}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="street">Company website</Label>
                        <Input type="text" id="street" placeholder={previewData.customer_information.company_website}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>


                  <br/>
                  <Row>
                    <span><strong>business_address:</strong> (for all official communication)</span><br/>
                  </Row>
                  <br/>

                  <FormGroup row className="my-0">
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="city">Building name</Label>
                        <Input type="text" id="city" placeholder={previewData.business_address.building_name}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Shop/Apartment/Office No</Label>
                        <Input type="text" id="postal-code"
                               placeholder={previewData.business_address.shop_apartment_office_no}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">P.O Box</Label>
                        <Input type="text" id="postal-code"
                               placeholder={previewData.business_address.shop_apartment_office_no}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="city">Locality/Area</Label>
                        <Input type="text" id="city" placeholder={previewData.business_address.locality}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Street/No</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.business_address.street_name}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="city">Landmark</Label>
                        <Input type="text" id="city" placeholder={previewData.business_address.land_mark}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">City</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.business_address.city}/>
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
                        <Input type="text" id="city" placeholder={previewData.business_address.listed_telephone}/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="postal-code">Fax</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.business_address.fax}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="country">E-mail ID</Label>
                    <Input type="text" id="country" placeholder={previewData.business_address.email}/>
                  </FormGroup>

                  <br/>
                  <Row>
                    <span><strong>Registered Address:</strong> (please provide if different from business address above)</span><br/>
                  </Row>
                  <br/>
                  <FormGroup row className="my-0">
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="city">Building name</Label>
                        <Input type="text" id="city" placeholder={previewData.registred_address.building_name}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Shop/Apartment/Office No</Label>
                        <Input type="text" id="postal-code"
                               placeholder={previewData.registred_address.shop_apartment_office_no}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">P.O Box</Label>
                        <Input type="text" id="postal-code"
                               placeholder={previewData.registred_address.shop_apartment_office_no}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="city">Locality/Area</Label>
                        <Input type="text" id="city" placeholder={previewData.registred_address.locality}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Street/No</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.registred_address.street_name}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="city">Landmark</Label>
                        <Input type="text" id="city" placeholder={previewData.registred_address.land_mark}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">City</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.registred_address.city}/>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Country</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.registred_address.country}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="city">Listed Telephone No</Label>
                        <Input type="text" id="city" placeholder={previewData.registred_address.listed_telephone}/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="postal-code">Fax</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.registred_address.fax}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="country">E-mail ID</Label>
                    <Input type="text" id="country" placeholder={previewData.registred_address.email}/>
                  </FormGroup>


                  <br/>
                  <Row>
                    <span><strong>VAT (Value Added Tax) Registration details:</strong></span><br/>
                  </Row>
                  <br/>


                  <FormGroup row className="my-0">
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="city">Tax registration number (TRN)</Label>
                        <Input type="text" id="city" placeholder={previewData.VAT_Registration.registration_number}/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="postal-code">Tax registration number (TRN) effective date</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.VAT_Registration.effective_date}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="country">Tax registration address</Label>
                    <Input type="text" id="country" placeholder={previewData.VAT_Registration.address}/>
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="city">Tax state</Label>
                        <Input type="text" id="city" placeholder={previewData.VAT_Registration.state}/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="postal-code">Tax country</Label>
                        <Input type="text" id="postal-code" placeholder={previewData.VAT_Registration.country}/>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  <br/>
                  <Row>
                    <span><strong>Details of Proprietors/Partners/Directors/POA Holders:</strong></span><br/>
                  </Row>
                  <br/>

                  <Card style={{paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px'}}>
                    <Row>
                      {previewData.partners_details.map((partner, index) =>
                          <Col xs="6">
                            <Card>
                              <CardBody>
                                <Row xs="3">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">Name:</span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Input type="text" id="postal-code" placeholder={partner.name}/>
                                  </div>
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">Mobile Number:</span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Input type="text" id="postal-code" placeholder={partner.mobile}/>
                                  </div>
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">Phone</span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Input type="text" id="postal-code" placeholder={partner.phone}/>
                                  </div>
                                </Row>
                                <Row xs="3">
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">Email Address</span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Input type="text" id="postal-code" placeholder={partner.email}/>
                                  </div>
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">Mail Address:</span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Input type="text" id="postal-code" placeholder={partner.mailing_address}/>
                                  </div>
                                  <div className="progress-group-prepend">
                                    <span className="progress-group-text">Place of Birth</span>
                                  </div>
                                  <div className="progress-group-bars">
                                    <Input type="text" id="postal-code" placeholder={partner.place_of_birth}/>
                                  </div>
                                </Row>

                              </CardBody>
                            </Card>
                          </Col>


                      )}
                    </Row>
                  </Card>
                </Form>
              </CardBody>
              <CardFooter>
                <Button color="warning" onClick={this.handleSubmit} className="mr-4 btn-pill">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
