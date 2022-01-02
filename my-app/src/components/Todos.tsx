import React,{useContext} from 'react';
import TodoItems from './TodoItems';
import { TodosContext } from '../store/todos-context';

import classes from './Todo.module.css';

const Todos: React.FC = (
  
) => {
  const todosCxt = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {todosCxt.items.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCxt.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
