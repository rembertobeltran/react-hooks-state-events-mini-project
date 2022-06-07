import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [ taskSet, setTasks ] = useState(TASKS);
  const [ categorySet, setCategory ] = useState('ALL');

  const handleFilter = (e) => {
    setCategory(e.target.value);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...taskSet, newTask]);
  };

  const handleDelete = (deletedTask) => {
    setTasks(taskSet.filter((task) => task.text !== deletedTask))
  };

  const tasksFiltered = taskSet.filter(
    (task) => categorySet === 'ALL' || categorySet === task.category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories = {CATEGORIES}
        categorySet = {categorySet}
        onHandleFilter = {handleFilter}
      />
      <NewTaskForm 
        categories = {CATEGORIES}
        onTaskFormSubmit = {handleTaskFormSubmit}
      />
      <TaskList 
        tasks = {tasksFiltered}
        handleDelete= {handleDelete}
      />
    </div>
  );
}

export default App;
