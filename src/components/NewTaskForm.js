import React from "react";
import { useState } from "react/cjs/react.production.min";

function NewTaskForm() {
  const [ textSet, setText ] = useState('');
  const [ categorySet, setCategory ] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text: textSet, category: cetegorySet });
    setText('');
    setCategory('');
  };

  const categoriesFiltered = categories  
    .filter((category) => category !== 'ALL')
    .map((category) => <option key={category}>{category}</option>)

  return (
    <form className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={textSet}
          onChange={handleText}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={categorySet}
          onChange={handleCategory}
        >
          {categoriesFiltered}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task" 
      />
    </form>
  );
}

export default NewTaskForm;
