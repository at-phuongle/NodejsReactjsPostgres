import React from 'react';
// import AboutUs from '../user/aboutUs';
// import NewProduct from '../user/newProduct';
// import News from '../user/news';
import Blog from '../common/blog';
import Wall from '../user/wall';

class Main extends React.Component {
  render() {
    return (
      <section className="section-main-content">
        <Blog></Blog>
        <Wall></Wall>
      </section>
    )
  }
}
export default Main;
