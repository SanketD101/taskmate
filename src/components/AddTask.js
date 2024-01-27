import React from "react";

const AddTask = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("before if =>" + props.item.name);
    console.log("id =>" + props.item.id);
    console.log("First item=>" + props.item.name);
    if (props.item.id) {
      const date = new Date();
      const updateTasklist = props.tasklist.map((todo) =>
        todo.id === props.item.id
          ? {
              id: props.item.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      props.setTasklist(updateTasklist);
      e.target.task.value = "";
      props.setItem({});
      console.log("first if=>" + props.item.name);
    } else {
      const date = new Date();
      console.log(e.target.task.value);
      console.log(date.getTime());

      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      console.log("In temp=>" + props.item.name);
      e.target.task.value = "";
      props.setItem({});
      console.log(props.item);
      props.setTasklist([...props.tasklist, newTask]);
    }
    console.log("Last=>" + props.item.name);
  };
  return (
    <section className="addTask">
      <h1>{props.item.name}</h1>
      <h3>{props.item.id}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={props.item.name || ""}
          onChange={(e) => {
            props.setItem({ ...props.item, name: e.target.value });
          }}
        />
        <button type="submit">{props.item.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
