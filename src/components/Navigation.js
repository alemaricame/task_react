import React, {Component} from 'react';

class Navigation extends Component{

    render(){
        return(
            <header className="App-header">
                <nav className="nav justify-content-center font-weight-bold">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link text-info" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Inicio</a>
                    <a className="nav-item nav-link text-info" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Perfil</a>
                    <a className="nav-item nav-link text-info" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contacto</a>
                </div>
                </nav>
            </header>
        );
    }
}

export default Navigation;