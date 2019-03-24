import React, { Component } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Upload from '../Upload/Upload'

class Modals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      warning: false,
    };
    this.toggleWarning = this.toggleWarning.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <div style={{marginBottom:"33px"}}>
              <Button color="warning" onClick={this.toggleWarning} className="mr-1">Add Company</Button>
              <Modal style={{width: "686px"}}  isOpen={this.state.warning} toggle={this.toggleWarning}
                     className={'modal-warning ' + this.props.className}>
                <ModalHeader toggle={this.toggleWarning}>Add Application File</ModalHeader>
                <ModalBody>
                  <div className="Card">
                    <Upload />
                  </div>
                </ModalBody>
              </Modal>
            </div>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Modals;
