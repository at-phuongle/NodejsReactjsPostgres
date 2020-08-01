import React from 'react';
import Header from '../common/header';

class PageUser extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        {/* component con của nó */}
        {this.props.children}
      </div>
    )
  }
}
export default PageUser;
