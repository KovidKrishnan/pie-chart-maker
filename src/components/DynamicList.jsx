import React, { useState } from "react";

const DynamicList = ({ pieChartData, setPieChartData }) => {
  const handleChange = (index, key, value) => {
    const newItems = [...pieChartData];
    newItems[index][key] = value;
    setPieChartData(newItems);
  };

  const handleAddItem = () => {
    const newItems = [...pieChartData, { name: "", value: "" }];
    setPieChartData(newItems);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...pieChartData];
    newItems.splice(index, 1);
    setPieChartData(newItems);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      handleAddItem();
      const nextInputIndex = index + 1;
      if (nextInputIndex < pieChartData.length) {
        const nextInput = document.getElementById(`name-input-${nextInputIndex}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-start w-100 pe-2" style={{ overflowY: 'scroll', maxHeight: '35%' }}>
      <button className="btn btn-success position-absolute rounded-pill m-3 p-2 px-4" style={{ right: 0, bottom: 0, zIndex: 2, fontSize: '30px' }} onClick={handleAddItem}><b>&#43;</b></button>
      {pieChartData.map((item, index) => (
        <div key={index} className="d-flex justify-content-start">
          <input
            type="text"
            placeholder="Name"
            value={item.name}
            className="rounded-2 p-3 w-50 mx-1 px-4 border-0 text-dark my-2"
            style={{ backgroundColor: "#deccf4", outline: "none", height: '50px' }}
            id={`name-input-${index}`}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <div className="position-relative w-50" style={{ height: '50px' }}>
            <input
              type="text"
              placeholder="Value"
              value={item.value}
              className="rounded-2 py-3 px-4 border-0 text-dark my-2 w-100"
              style={{ backgroundColor: "#fade59", outline: "none", height: '50px' }}
              onChange={(e) =>
                handleChange(index, "value", e.target.value)
              }
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
            {pieChartData.length > 1 && (
              <button
                className="position-absolute py-3 btn btn-secondary"
                style={{ bottom: '-8px', right: '0', height: '50px' }} // Add margin to the right for spacing
                onClick={() => handleRemoveItem(index)}
              >
                <b>&ndash;</b>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicList;
