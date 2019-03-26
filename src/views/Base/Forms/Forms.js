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
  Form
} from 'reactstrap';


class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      customerInformation: {},
      businessAddress: {},
      registeredAddress: {},
      vatRegistration: {},
      partnersDetails: {}
    };
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  toggleFade() {
    this.setState((prevState) => {
      return {fadeIn: !prevState}
    });
  }

  setPreviewData(data) {
    this.setState({
      customerInformation: data.customer_information,
      businessAddress: data.business_address,
      registeredAddress: data.registred_address,
      vatRegistration: data.VAT_Registration,
      partnersDetails: data.partners_details,
    });
  }


  render() {
    console.log('file_name', window.sessionStorage.getItem('file_name'));
    console.log('previewData', JSON.parse(window.sessionStorage.getItem('previewData')));
    console.log('state customer', this.state.customerInformation);
    let previewData = JSON.parse(window.sessionStorage.getItem('previewData'));
    let filePath =  window.sessionStorage.getItem('file_name');
    console.log('this is the file path',filePath);
    console.log('preview', previewData);
    // let data = JSON.parse(window.sessionStorage.getItem('previewData'));
    // if(data){
    //   this.setPreviewData(data);
    // }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="10" sm="6">
            <Card>
              <CardBody>
                <img style={{float: 'right'}} src={filePath} alt='no image supplied'/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="14" sm="6">
            <Card>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
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
                    <span><strong>Business Address:</strong> (for all official communication)</span><br/>
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
                  <Card>
                    <Row>
                      <Col xs="6">
                        <Card>
                          <CardBody>
                            <Col xs="12">
                              <FormGroup>
                                <Label htmlFor="postal-code">Tax country</Label>
                                  <Input type="text" id="postal-code" placeholder={previewData.VAT_Registration.country}/>
                              </FormGroup>
                            </Col>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="6">
                        <Card>
                          <CardBody>
                            dslnfjdsnf
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6">
                        <Card>
                          <CardBody>
                            dslnfjdsnf
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="6">
                        <Card>
                          <CardBody>
                            dslnfjdsnf
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" className="btn-lg btn-pill"
                        style={{backgroundColor: 'rgb(64, 91, 160)', color: 'white'}}><i
                  className="fa fa-dot-circle-o"></i> Submit</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
