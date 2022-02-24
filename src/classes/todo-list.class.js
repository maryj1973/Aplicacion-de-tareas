export class TodoList{
    constructor(){
        // this.todos=[];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id){
        this.todos=this.todos.filter(todo => todo.id!=id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){


        for (let i=0;i<this.todos.length;i++){
            // const todo=this.todos[i];
            if (id==this.todos[i].id){
                this.todos[i].completado=!this.todos[i].completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos=this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }


    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));


    }
    cargarLocalStorage(){
        
        // if(localStorage.getItem('todo')){
        //     this.todos=JSON.parse(localStorage.getItem('todo'));

        //     console.log(this.todos);
        // }
        // else{
        //     this.todos=[];
        // }
        
        //operador ternario

        this.todos=(localStorage.getItem('todo'))
                            ? JSON.parse(localStorage.getItem('todo'))
                             : []; 

    }
}