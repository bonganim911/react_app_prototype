import React from 'react';
import { Col, FormGroup, Label, Input, Button} from 'reactstrap';

class CompanyInformation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      company: {},
    };
    this.handleTurnOverChange = this.handleTurnOverChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTurnOverChange(event) {
    this.setState({company: Object.assign({},{trade_licence_number: event.target.value}, this.state.company)})
  }

  handleSubmit(event) {
    // alert('An essay was submitted: ' + this.state.value);
    // console.log('updated company', this.state.company);
    event.preventDefault();
  }

  componentWillMount(){
    this.setState({
      company: this.props.customer
    })
  }

  render() {
    return (
      <div>
        <div>
          <h5 className="text-left" style={{color: "#405ba0"}}>Company Information</h5>
          <br/><br/>
        </div>
        <form onSubmit={this.handleSubmit} className="form-horizontal" key="company">
          <FormGroup>
            <Label htmlFor="company">Company Name</Label>
            <Input type="text" id="company" value={this.state.company.name}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="vat">Trading Licence Number</Label>
            <Input type="text" id="vat" value={this.state.company.trade_licence_number} onChange={this.handleTurnOverChange}/>
          </FormGroup>
          <FormGroup row>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="street">Annual Turn Over</Label>
                <Input type="text" id="street" value={this.state.company.annual_turnover}/>
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="street">No. of Employees</Label>
                <Input type="text" id="street"
                       value={this.state.company.number_of_employees}/>
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Label htmlFor="street">Company website</Label>
                <Input type="text" id="street" value={this.state.company.company_website}/>
              </FormGroup>
            </Col>
          </FormGroup>
          <div style={{marginBottom:"33px"}}>
            <Button color="warning" type="submit" className="mr-1">Save</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default CompanyInformation;
