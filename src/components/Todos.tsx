import React from "react";
import Todo from "../modals/todo";
import Item from "./Item";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onDeleteItem: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Item
          key={item.id}
          text={item.text}
          onDeleteItem={props.onDeleteItem.bind(null,item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
