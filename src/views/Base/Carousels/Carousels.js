import React, { Component } from 'react';
import { Card, CardBody, CardHeader} from 'reactstrap';


class Carousels extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Uploaded Application</strong>
                <div className="card-header-actions">
                  <a href="" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">doc</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <img className="d-block w-100"
                     src={'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'}
                     alt={'Application Form'} />
              </CardBody>
            </Card>
      </div>
    );
  }
}

export default Carousels;
