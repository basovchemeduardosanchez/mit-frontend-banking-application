import React from 'react';

import { useLocation } from 'react-router-dom';

export function NavBar(){
    const location = useLocation();

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Bad Bank</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className={ `nav-link ${ location.pathname === '/' ? 'active' : '' }` } href="#/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={ `nav-link ${ location.pathname === '/CreateAccount/' ? 'active' : '' }` } href="#/CreateAccount/">Create Account</a>
                        </li>
                        { /*<li className="nav-item">
                            <a className={ `nav-link ${ location.pathname === '/login/' ? 'active' : '' }` } href="#/login/">Login</a>
                        </li>*/ }
                        <li className="nav-item">
                            <a className={ `nav-link ${ location.pathname === '/deposit/' ? 'active' : '' }` } href="#/deposit/">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className={ `nav-link ${ location.pathname === '/withdraw/' ? 'active' : '' }` } href="#/withdraw/">Withdraw</a>
                        </li>
                        { /*<li className="nav-item">
                            <a className={ `nav-link ${ location.pathname === '/balance/' ? 'active' : '' }` } href="#/balance/">Balance</a>
                        </li>*/ }
                        <li className="nav-item">
                            <a className={ `nav-link ${ location.pathname === '/alldata/' ? 'active' : '' }` } href="#/alldata/">AllData</a>
                        </li>          
                    </ul>
                </div>
            </nav>
        </>
    );
}