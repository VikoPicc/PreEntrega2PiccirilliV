import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    const navigate = useNavigate()
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">                    
                    <h2 className="navbar-brand" onClick={() => navigate('/')}>GreenLife</h2> 
                    <div className="navbar-nav mr-auto">
                        <Link to="/category/sueltos" className="nav-link">Sueltos</Link>
                        <Link to="/category/combos" className="nav-link">Combos</Link>
                        <Link to="/category/congelados" className="nav-link">Congelados</Link>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

