import React, {Component} from 'react';

class FormTarea extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            prority:'',
            description:'',
            name:''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    /* tomar datos */
    handleInput(e){
        console.log("Escribiendo...");
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
        console.log(this.state);
        
    }

    /* Guardar */

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log("Enviando...",this.state);
    }
    render(){
        return(
            <div className="mt-4">
            <form onSubmit={this.handleSubmit} className="mt-4">
               <div className="form-group">
                   <label for="title">Título de la tarea: </label>
                   <input name="title" onChange={this.handleInput} type="text" className="form-control" id="title" placeholder="Título de la tarea"></input>
               </div>
               <div className="form-group">
                    <label for="priority">Prioridad: </label>
                    <select name="priority" onChange={this.handleInput} id="priority" class="form-control">
                        <option selected>Selecciona...</option>
                        <option value="baja">Baja</option>                        
                        <option value="media">Media</option>
                        <option value="alta">Alta</option>
                    </select>
               </div>
               <div className="form-group">
                    <label for="description">Descripción de la tarea: </label>
                    <textarea name="description" onChange={this.handleInput} id="description" className="form-control" placeholder="Descripción de la tarea"></textarea>
                </div>
                <div className="form-group">
                    <label for="encargado">Encargado de la tarea: </label>
                    <input name="name" onChange={this.handleInput} type="text" className="form-control" id="name" placeholder="Nombre"></input>
                </div>
                <button type="submit" class="btn btn-info">Guardar</button>
            </form>
            </div>
        );
    }
}

export default FormTarea;