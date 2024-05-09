"use client"
import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null); 

  function handleSubmit(e) {
    e.preventDefault();
    if (editIndex !== null) {
      const newValue = [...val];
      newValue[editIndex] = inputValue;
      setVal(newValue);
      setInputValue('');
      setEditIndex(null);
    } else {
      if (inputValue.trim() !== '') {
        setVal([...val, inputValue]);
        setInputValue('');
      }
    }
  }

  function handleDelete(index) {
    const newValue = [...val];
    newValue.splice(index, 1);
    setVal(newValue);
  }

  function handleEdit(index) {
    setInputValue(val[index]);
    setEditIndex(index);
  }
console.log(val);
  return (
    <div className="flex flex-col items-center mt-10">
      <h1>CRUD</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <input
          className="p-2 rounded-md text-black"
          placeholder="Enter value here"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit" className="px-5 rounded-md py-2 ml-3 bg-green-800">
          {editIndex !== null ? 'UPDATE' : 'ADD'}
        </button>
      </form>
      <div className="mt-5">
        {val.map((value, index) => (
          <div key={index} className="flex items-center">
            <p>{value}</p>
            <button onClick={() => handleEdit(index)} className="ml-2 bg-blue-500 px-3 py-1 rounded-md text-white">Edit</button>
            <button onClick={() => handleDelete(index)} className="ml-2 bg-red-500 px-3 py-1 rounded-md text-white">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
