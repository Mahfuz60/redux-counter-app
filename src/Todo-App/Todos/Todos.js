import React, { useEffect } from 'react';
import './Todos.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../redux/todosAction/TodosAction';

const Todos = () => {
  const { todos, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos);
  }, [dispatch]);
  return (
    <div className='todosContainer'>
      <h1>Hello Todos App</h1>
      {isLoading && <p>Loading....</p>}
      {error && <p>{error.message}</p>}

      <section>
        {todos &&
          todos.map((todo, id) => (
            <div className='todosCard' key={id}>
              <h4>User Id:{todo.userId}</h4>
              <h3>User Title:{todo.title}</h3>
              <p>{todo.completed}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Todos;
