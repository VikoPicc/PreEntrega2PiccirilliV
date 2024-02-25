import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <h4 className="navbar-brand">Green Life</h4>
                    <div className="navbar-nav ml-auto">
                        <button className="btn btn-outline-light mr-2" onClick={() => window.location.href = "Productos"}>Productos</button>
                        <button className="btn btn-outline-light mr-2" onClick={() => window.location.href = "Nosotros"}>Nosotros</button>                    
                        <button className="btn btn-outline-light" onClick={() => window.location.href = "Contacto"}>Contacto</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;