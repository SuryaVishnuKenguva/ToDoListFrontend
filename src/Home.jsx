import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://suryatodolist.onrender.com/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick=(id)=>{
        axios.put('https://suryatodolist.onrender.com/update/'+id)
        .then(result=>location.reload())
        .catch(err=>console.log(err))
  }

  const handleDelete=(id)=>{
    axios.delete('https://suryatodolist.onrender.com/delete/'+id)
    .then(result=>location.reload())
    .catch(err=>console.log(err))
  }

  return (
    <div className="home">
      <h1>Todo List</h1>
      <Create />
      <div className="bottom">
        {todos.length === 0 ? (
          <div>
            <h2>No Tasks</h2>
          </div>
        ) : (
          todos.map((todo) => (
            <div className="task">
              <div className="left" onClick={()=>handleClick(todo._id)}>
                {
                    todo.done ? <BsFillCheckCircleFill className="icon"/>
                    :
                    <BsCircleFill className="icon" />
                }
                <h4 className={todo.done ? "line_through" : ""}>{todo.task}</h4>
              </div>
              <BsFillTrashFill className="icon" onClick={()=>handleDelete(todo._id)}/>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
