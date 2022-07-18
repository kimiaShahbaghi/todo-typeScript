import React from "react";
import classes from './Item.module.css'

const Item: React.FC<{ text: string, onDeleteItem: () => void}> = (props) => {
  return <li className={classes.item} onClick={props.onDeleteItem}>{props.text}</li>;
};

export default Item;
