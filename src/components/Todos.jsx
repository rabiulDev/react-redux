import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getAllTodos } from "../store/actions/todoAction";

const Todos = () => {
  const dispatch = useDispatch();
  const { isLoading, todos, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold mt-10">All Todos</h1>
      <h2>{isLoading && "Loading..."}</h2>
      <h2 className="text-center mt-6 text-base font-bold">{error && error}</h2>
      <div className="mt-10 p-10 grid md:grid-cols-3 gap-x-10">
        {todos &&
          todos.map((todo) => (
            <h2 key={todo.id} className="text-lg font-semibold">
              {todo.id} {todo.title}
            </h2>
          ))}
      </div>
    </div>
  );
};

export default Todos;
