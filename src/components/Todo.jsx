import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h2>Add Your List Here</h2>
        </div>
        <div className="add-items">
          <input
            type="text"
            placeholder="Add Items..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          >
            +
          </button>
        </div>
        <div className="show-items">
          {list.map((elem) => {
            return (
              <div className="each-item" key={elem.id}>
                <h3>{elem.data}</h3>
                <div className="todo-btn">
                  <button onClick={() => dispatch(deleteTodo(elem.id))}>
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
