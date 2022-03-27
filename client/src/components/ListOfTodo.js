import React, { useEffect } from "react";
import axios from "axios";

export default function ListOfTodo() {
  useEffect(() => {
    console.log("ListOfTodo");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetchData");
    const res = await axios.get("http://localhost:5040/api/v1/todos");
    console.log(res.data);
  };

  return (
    <div>
      <h1>List Of Todos</h1>
    </div>
  );
}
