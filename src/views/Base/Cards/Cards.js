import React, {Component} from 'react';
import {Card, CardBody, Alert, Col, Row, Fade, Badge} from 'reactstrap';
import Modals from '../Modals/Modals';


class Cards extends Component {
  constructor(props) {
    super(props);

    this.handleNavClick = this.handleNavClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }
  handleNavClick(){
    let currentPath = window.location.pathname;
    // window.location.href =  '#/base/list-groups';
   }

  run() {
    this.el.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ], {
      duration: 400,
      iterations: 3
    })
    //this.handleNavClick();
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  toggleFade() {
    this.setState((prevState) => {
      return {fadeIn: !prevState}
    });
  }

  render() {
    return (
      <div>
        <Modals />
        <Row style={{marginRight:"0px", marginLeft:"0px"}}>
          <Col md="4">
            <div>
              <h5 className="text-left" style={{color:"#405ba0"}}>Awaiting customer approval <small>(3 requests)</small></h5><br/><br/>
            </div>
            <Row style={{marginRight:"10px", marginLeft:"0px"}}>
              <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
                <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                    <CardBody>
                      <div className="card-header-actions">
                        <Badge className="float-right" style={{backgroundColor:"orange", color:"white"}}>3 reminders sent</Badge>
                      </div>
                      <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                        <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                        <span style={{marginLeft: "10px"}}>Phoenix Trading Company LLC</span>
                      </div>
                      <div>
                        <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                        <span style={{marginLeft: "10px"}}>Joe Clauke, James Bond</span>
                      </div>
                      <hr style={{paddingLeft:"2px"}}></hr>
                      <div>
                        <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                          <span><i className="fa fa-exclamation-circle fa-xlg mt-1" style={{ color:"orange"}}></i></span>
                          <span style={{marginLeft: "10px", color:"orange"}}><strong>Awaiting statement for source of wealth</strong></span>
                          <span className="float-left" style={{paddingTop:"18px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}><i>Send 1 days ago</i></span>
                        </Alert>
                      </div>
                    </CardBody>
                </Card>
              </Fade>
            </Row>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div className="card-header-actions">
                    <Badge className="float-right" style={{backgroundColor:"orange", color:"white"}}>5 reminders sent</Badge>
                  </div>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Al Abbas Trading Co</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Anthony Mark, Sandra Betty</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "10px", color:"orange"}}><strong>Awaiting statement for source of wealth</strong></span>
                      <span className="float-left" style={{paddingTop:"18px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}><i>sent 34 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div className="card-header-actions">
                    <Badge className="float-right" style={{backgroundColor:"orange", color:"white"}}>15 reminders sent</Badge>
                  </div>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Ali Trading Co</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>John Mark, Betty James</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "10px", color:"orange"}}><strong>Awaiting statement for source of wealth</strong></span>
                      <span className="float-left" style={{paddingTop:"18px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}><i>sent 4 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
          </Col>
          <div style={{borderRight: "1px solid #c6c9cb", height: "1490px"}}></div>
          <Col md="4">
            <h5 className="text-left" style={{color:"#405ba0"}}>Awaiting compliance approval <small>(3 requests)</small></h5><br/>
            <h6 className="text-left" style={{color:"#405ba0"}}>In progress (2 requests)</h6>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>General Trading Company LLC</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Jet Clauke, James Jackson</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1 float-left" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "-223px", color: "orange", paddingLeft: "23px"}}><strong>Fraud Detected</strong></span>
                      <span className="float-left" style={{paddingTop:"40px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}>Assigned to Willem Smith <i>sent 4 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
            <div onClick={this.handleNavClick()}>
              <Row style={{marginRight:"0px", marginLeft:"0px"}}>
                <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                  <CardBody>
                    <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                      <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                      <span style={{marginLeft: "10px"}}>Albatha Trading LLC</span>
                    </div>
                    <div>
                      <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                      <span style={{marginLeft: "10px"}}>Mohd Ali</span>
                    </div>
                    <hr style={{paddingLeft:"2px"}}></hr>
                    <div>
                      <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                        <span><i className="fa fa-exclamation-circle fa-xlg mt-1 float-left" style={{ color:"orange"}}></i></span>
                        <span style={{marginLeft: "-223px", color: "orange", paddingLeft: "23px"}}><strong>Fraud Detected</strong></span>
                        <span className="float-left" style={{paddingTop:"40px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}>Assigned to Willem Smith <i>sent 4 days ago</i></span>
                      </Alert>
                    </div>
                  </CardBody>
                </Card>
              </Row>

            </div>
            <h6 className="text-left" style={{color:"#405ba0"}}>Unassigned (1 requests)</h6>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>AL Faisaliyah Trading Company LLC</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Raseef Ali, Naboodah Al</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1 float-left" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "-150px", color: "orange", paddingLeft: "23px"}}><strong>Fraud Detected</strong></span>
                      <span className="float-left" style={{paddingTop:"40px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}>Unassigned <i>sent 4 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
          </Col>
          <div style={{borderRight: "1px solid #c6c9cb", height: "1490px"}}></div>
          <Col md="3" style={{minWidth: "400px"}}>
            <h5 className="text-left" style={{color:"#405ba0"}}>Awaiting governance approval <small>(5 requests)</small></h5><br/>
            <h6 className="text-left" style={{color:"#405ba0"}}>In progress (2 requests)</h6>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Requisite Trading Company LLC</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Albatha Al</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1 float-left" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "-200px", color: "orange", paddingLeft: "23px"}}><strong>Line of business don't match</strong></span>
                      <span className="float-left" style={{paddingTop:"40px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}>Assigned to AL Reyami <i>sent 4 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>National Trading Ltd</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Rahul, France Jacobs</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1 float-left" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "-223px", color: "orange", paddingLeft: "23px"}}><strong>Turnover more than statement</strong></span>
                      <span className="float-left" style={{paddingTop:"40px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}>Assigned to Al Naboodah <i>sent 4 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
            <h6 className="text-left" style={{color:"#405ba0"}}>Unassigned (3 requests)</h6>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>AL Faisaliyah Trading Company LLC</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Raseef Ali, Naboodah Al</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1 float-left" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "-150px", color: "orange", paddingLeft: "23px"}}><strong>Fraud Detected</strong></span>
                      <span className="float-left" style={{paddingTop:"40px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}>Unassigned <i>sent 4 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Furniture Manufacturing Company LLC</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Smith Clauke, Micheal Jackson</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1 float-left" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "-150px", color: "orange", paddingLeft: "23px"}}><strong>Turnover more than statement</strong></span>
                      <span className="float-left" style={{paddingTop:"40px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}>Unassigned <i>sent 14 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
            <Row style={{marginRight:"0px", marginLeft:"0px"}}>
              <Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
                <CardBody>
                  <div style={{paddingBottom: "5px", paddingTop: "9px"}}>
                    <span><i className="fa fa-home font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Al Ahli Holding Group</span>
                  </div>
                  <div>
                    <span><i className="fa fa-user icons font-2xl st-4" style={{color:"rgb(64, 91, 160)"}}></i></span>
                    <span style={{marginLeft: "10px"}}>Al Ahli</span>
                  </div>
                  <hr style={{paddingLeft:"2px"}}></hr>
                  <div>
                    <Alert style={{backgroundColor:"#fff5e5", border:"0"}}>
                      <span><i className="fa fa-exclamation-circle fa-xlg mt-1 float-left" style={{ color:"orange"}}></i></span>
                      <span style={{marginLeft: "-150px", color: "orange", paddingLeft: "23px"}}><strong>Turnover more than statement</strong></span>
                      <span className="float-left" style={{paddingTop:"40px", fontSize:"smaller", color:"black", marginLeft: "-18px"}}>Unassigned <i>sent 14 days ago</i></span>
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
