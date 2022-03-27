import React, { useEffect } from "react";
import axios from "axios";

export default function ListOfTodo({ token }) {
  useEffect(() => {
    console.log("ListOfTodo");
    fetchData(token);
  }, [token]);

  const fetchData = async (token) => {
    console.log("fetchData");
    const res = await axios.get("http://localhost:5040/api/v1/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
  };

  return (
    <div>
      <h1>List Of Todos</h1>
    </div>
  );
}
