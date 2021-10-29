import React, { Component } from 'react';
import { Redirect } from 'react-router';

class StrictAccess extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        {user.username === 'joao' && user.password === '1234' ? <p>Welcome {user.username}</p> 
        : 
        <Redirect to='/' />}
        
      </div>
    );
  }
}

export default StrictAccess;