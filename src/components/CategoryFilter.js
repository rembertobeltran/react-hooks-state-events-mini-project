import React from "react";

function CategoryFilter({ categories, categorySet, onHandleFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            key = {category}
            value = {category}
            onClick = {onHandleFilter}
            className = {category === categorySet ? 'selected' : ''}
          >
            {category}
          </button>
        );
      };
      )};
    </div>
  );
};

export default CategoryFilter;
