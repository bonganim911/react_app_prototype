import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, InputGroup, Button, Input, InputGroupAddon } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppHeaderDropdown, AppSidebarToggler } from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav navbar>
          <div style={{paddingLeft:"20px"}}>
            <strong style={{color: "white"}}>MASHREQ SME MONITOR</strong>
          </div>
        </Nav>
        <Nav>
          <div style={{paddingLeft:"350px"}}>
            <InputGroup>
              <Input type="text" style={{width: "347px"}}/>
              <InputGroupAddon addonType="prepend">
                  <Button className="mr-1" style={{backgroundColor: "#405ba0", color:"white"}}><i className="fa fa-search"></i> Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none" style={{color:"white"}}>
            <div>Yiorgos Avraamu</div><div className="small text-muted"><span style={{color:"white"}}>Compliance</span></div>
          </NavItem>
          <AppHeaderDropdown direction="up" style={{paddingLeft:"10px"}}>
            <DropdownToggle nav style={{paddingRight:"60px"}}>
              <img src={'../../assets/img/avatars/5.jpg'} style={{borderColor: "white"}} className="img-avatar" alt="demo@mashreq.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
