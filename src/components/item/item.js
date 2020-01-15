import React from 'react';

import "./weathers-classes.scss";
import "./item.scss";

const item = (props) => {
  return (
    <div className="item__wrapper">
      <span>{ props.weather.day }</span>
      <i className={"item__img " + props.weather.name }/>
      <span>{ props.weather.temp }</span>
    </div>
  )
}

export default item;