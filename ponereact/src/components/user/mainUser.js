import React from 'react';
// import AboutUs from '../user/aboutUs';
// import NewProduct from '../user/newProduct';
// import News from '../user/news';
import Menu from '../common/menu';
import New from '../common/new';
import MainContent from '../user/mainContent';

class MainUser extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="main-wrap">
            <Menu></Menu>
            <MainContent></MainContent>
            <New></New>
          </div>
        </div>
      </main>
    )
  }
}
export default MainUser;
