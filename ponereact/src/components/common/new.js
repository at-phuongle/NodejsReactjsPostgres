import React, { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import new1 from '../../asets/images/new1.jpg';
import new2 from '../../asets/images/new2.jpg';
import new3 from '../../asets/images/new3.jpg';

function New(props) {
  let [newList, setNewList] = useState({
    news: [
      { img: new1, content: 'Phát hiện ca nghi mắc COVID-19, Đà Nẵng cách ly hơn 50 người', other: '49 tin liên quan' },
      { img: new2, content: 'Vàng miếng SJC lên 55,35 triệu đồng/lượng', other: '50 tin liên quan' },
      { img: new3, content: 'Cập nhật tình hình Covid-19 thế giới', other: '49 tin liên quan' },
      { img: new1, content: 'Phát hiện ca nghi mắc COVID-19, Đà Nẵng cách ly hơn 50 người', other: '59 tin liên quan' },
      { img: new3, content: 'Cập nhật tình hình Covid-19 thế giới', other: '50 tin liên quan' }
    ],
    itemsToShow: 3,
    expanded: false
  });
  function showMore() {
    newList.itemsToShow === 3 ? (
      setNewList({ news: newList.news, itemsToShow: newList.news.length, expanded: true })
    ) : (
        setNewList({ news: newList.news, itemsToShow: 3, expanded: false })
      )
  }
  return (
    <section className="section-trend-wrap">
      <p className='trend-header'><i className="fa fa-arrow-up"></i>Trend</p>
      <ul className="trend-list">
        {newList.news.slice(0, newList.itemsToShow).map((item, index) =>
          <li className="trend-item" key={index} item={item} >
            <div className="new-img-wrap">
              <img src={item.img} alt="logo" />
            </div>
            <div className="trend-right">
              <a>{item.content}</a>
              <p className="p-des">{item.other}</p>
            </div>
          </li>
        )}
      </ul>
        <Link to={`/`} className="btn btn-see-more" onClick={showMore}>
          {newList.expanded ? (
            <span>Show less</span>
          ) : (
              <span>Show more</span>
            )}
        </Link>.
    </section>
  )
}
export default New;
