import React from "react";
import "./items.scss";
import Item from "../item/item";

import { weathers } from "./current-weather.json";

const items = () => {
  const arrItems = [];

  for (let i = 0; i < weathers.length; i++) {
    arrItems.push(<Item weather={weathers[i]} key={i}/>);
  }

  return (
    <div className="items__wrapper">
      { arrItems }
    </div>
  )
}

export default items;