import React from "react";

const ShowTask = (props) => {
  const handleEdit = (id) => {
    const temp = props.tasklist.find((todo) => todo.id === id);
    console.log(temp);
    props.setItem(temp);
  };

  const handleDelete = (id) => {
    const temp = props.tasklist.filter((todo) => todo.id !== id);
    props.setTasklist(temp);
    console.log(temp);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{props.tasklist.length}</span>
        </div>
        <button
          className="clearAll"
          onClick={() => {
            props.setTasklist([]);
            props.setItem({});
          }}
        >
          Clear All
        </button>
      </div>
      <ul>
        {props.tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span>{task.id}</span>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
