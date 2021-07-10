import React from "react";
import { useDispatch } from "react-redux";
import { togleTodo, deleteTodo } from "../../redux/reducer";

const style = {
  li: {
    display: "flex",
    height: '40px',
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rrem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: ".5rem",
  },
  btn: {
    width:'30px',
    height: '30px',
    margin: "0 .5rem" ,
    background: "red",
    borderRadius: "50%",
    color: "#fff",
    border: "none",
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  
};

export default function TodoItem({ element }) {
  const dispatch = useDispatch();
  
  const classes = [];
  if (element.done) classes.push("done");

  return (
    <li style={style.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          style={{ margin: "0 1.2rem" }}
          onChange={() => dispatch(togleTodo(element.id))}
          checked={element.done}
        />
        {element.name}
      </span>
      <button
        style={style.btn}
        onClick={() => dispatch(deleteTodo(element.id))}
        // disabled={!element.done}
      >
        &times;
      </button>
    </li>
  );
}
