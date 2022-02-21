
import  './styles.css';
import{TodoList} from './classes/todo-list.class';
import{Todo} from './classes/todo.class';
import { crearTodoHtml } from './js/componentes';

const todoList=new TodoList();
const tarea=new Todo('Aprender JavaScript')

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);


// console.log(tarea);