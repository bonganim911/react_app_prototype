import React from 'react';
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

class Partners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: []
    };
  }

  componentDidMount() {
    this.setState({partners: this.props.partners});
  }

  componentWillUpdate(prevProps) {
    if (this.props.partners !== prevProps.partners) {
      this.setState({partners: prevProps.partners});
    }
  }

  render() {
    return (
      <div>
        <div>
          <h5 className="text-left" style={{color: "#405ba0"}}>
            Details of Proprietors/Partners/Directors/POA Holders
          </h5>
          <br/><br/>
        </div>
        <Row>
          <form>
            <Row>
              {this.state.partners.map((partner, index) =>
                <Col>
                  <Card style={{
                    width: "450px",
                    height: "250px",
                    border: "0",
                    boxShadow: "4px 2px 33px 3px rgba(224,224,224,1)"
                  }}>
                    <CardBody style={{paddingTop: "-10px"}}>
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
                      <br/>
                      <div className="text-center">
                            <span style={{paddingLeft: "1px"}}>
                            <Button className="mr-1"
                                    style={{width: "120px", backgroundColor: "#405ba0", color: "white"}}>Save</Button>
                              {/*<Button className="mr-1"*/}
                                      {/*style={{*/}
                                        {/*width: "147px",*/}
                                        {/*paddingLeft: "1px",*/}
                                        {/*paddingRight: "1px",*/}
                                        {/*backgroundColor: "#405ba0",*/}
                                        {/*color: "white"*/}
                                      {/*}}>Request more Info</Button>*/}
                            {/*<Button className="mr-1" style={{*/}
                              {/*width: "120px",*/}
                              {/*backgroundColor: "#405ba0",*/}
                              {/*color: "white"*/}
                            {/*}}>Save</Button>*/}

                          </span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              )}
            </Row>
          </form>
        </Row>
      </div>
    )
  }

}

export default Partners;
