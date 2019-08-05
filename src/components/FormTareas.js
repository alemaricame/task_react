import React, {Component} from 'react';

class FormTarea extends Component{
    constructor(){
        super();
        this.state={
            title:'',
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
        console.log("Enviando...",this.state);
        fetch("http://localhost:3000/insert", {
            method: "POST",
            body: {
                todos: this.state
            }
        })
        .then(function(response){ 
            return response.json();   
        })
        .then(function(body){ 
            console.log("datos"+body);
        });
    }
    render(){
        return(
            <div className="mt-4">
            <form onSubmit={this.handleSubmit} className="mt-4">
               <div className="form-group">
                   <label htmlFor="title">Título de la tarea: </label>
                   <input name="title" onChange={this.handleInput} type="text" className="form-control" id="title" placeholder="Título de la tarea"></input>
               </div>
               <div className="form-group">
                    <label htmlFor="priority">Prioridad: </label>
                    <select name="priority" id="priority" onChange={this.handleInput} className="form-control">
                        <option value="default">Selecciona...</option>
                        <option value="baja">Baja</option>                        
                        <option value="media">Media</option>
                        <option value="alta">Alta</option>
                    </select>
               </div>
               <div className="form-group">
                    <label htmlFor="description">Descripción de la tarea: </label>
                    <textarea name="description" onChange={this.handleInput} id="description" className="form-control" placeholder="Descripción de la tarea"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="encargado">Encargado de la tarea: </label>
                    <input name="name" onChange={this.handleInput} type="text" className="form-control" id="name" placeholder="Nombre"></input>
                </div>
                <button type="submit" className="btn btn-info">Guardar</button>
            </form>
            </div>
        );
    }
}

export default FormTarea;