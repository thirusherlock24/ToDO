import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [name, setName] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name=="")
    {
      alert("enter something dam");
      return;
    }
    setTodolist((prevTodolist) => [
      ...prevTodolist,
      {
        name
      },
    ]);
    setName("");
  };

  const handleEdit = (index) => {
    const newName = prompt("Enter the new name:");
    if (newName !== null) {
      setTodolist((prevTodolist) => {
        const updatedList = [...prevTodolist];
        updatedList[index].name = newName;
        return updatedList;
      });
    }
  };

  const handleDelete = (index) => {
    setTodolist((prevTodolist) => {
      const updatedList = [...prevTodolist];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  const handleListClick = () => {
    setShowList(!showList);
    
  };



  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="What are you planning to do?" name="todo" value={name} onChange={(e) => setName(e.target.value)}></input>
          <button type="submit">TO DO</button>
        </form>
      
      <div className="ListC">
        <button onClick={handleListClick}>List</button>
        {showList && todolist.map((item, index) => (
      <div className="List" key={index}>
        <p>{item.name}</p>
        <button onClick={() => handleEdit(index)}>Edit</button>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    ))}
      </div>
      </div>
    </>
  );
}

export default App;
