import React, { Component} from 'react';
import Cards from '../Base/Cards';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    // console.log('bridge', this.props.company);
    return (
      <div className="sidebar-hidden aside-menu-hidden">
        <Cards companyData={this.props.company}/>
      </div>
    );
  }
}

export default Dashboard;
