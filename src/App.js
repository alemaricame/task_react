import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import FormTareas from './components/FormTareas';


class App extends Component {
  constructor() {
    super();
    this.state={
      todos:[]
    };
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(todos=>(this.setState({todos})))
    .catch(rejected => {
        console.log(rejected);
    });
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }
  delete(index){
    if(window.confirm('¿Deseas eliminar este dato?')){
     this.setState({
        todos:this.state.todos.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }

  render(){
    const todos = this.state.todos.map((todo,i)=>{
      return(
        <div className="col-md-4">
          <div className="card mt-4 bg-transparent">
          <div className="card-header">
            <p className="text-right">{todo.idtarea}</p>
            <h6 className="font-weight-bold">{todo.title}</h6>
            <span className="badge badge-pill ml-2">
               {todo.priority}
            </span>
          </div>
          <div className="card-body text-secondary">
            <p>{todo.description}</p>
            <p><mark className="text-secondary bg-transparent font-weight-bold">{todo.name}</mark></p>
          </div>
          <button className="btn btn-danger" onClick={this.delete.bind(this,i)}>Eliminar</button>
          </div>
        </div>
      )
    }
    )
  return (
    <div className="App">
      <Navigation/>

      <div className="bg-white md-3">
        <h4 className="mt-5 font-weight-bold text-secondary">Lista de tareas</h4>
      </div>
        <span>Tareas asignadas: {this.state.todos.length}</span> 
        <div className="container">
          <div className="row">
            <div>
              <div className="card-body mt-4">
                <FormTareas onAddTodo={this.handleAddTodo}/>  
              </div>
            </div>
            <div className="col-sm">
              <div className="container">
                <div className="row mt-4">
                  {todos}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

export default App;
