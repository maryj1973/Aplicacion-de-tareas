
import  './styles.css';
import{TodoList} from './classes/todo-list.class';
import{Todo} from './classes/todo.class';

const todoList=new TodoList();
const tarea=new Todo('aprender JavaScript')

todoList.nuevoTodo(tarea);

console.log(todoList);


// console.log(tarea);