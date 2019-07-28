import React from 'react';

export default function Header() {
    return (<header style={{marginBottom:"30px"}}>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                    <img src="https://img.icons8.com/dusk/64/000000/bitcoin.png"/>
                        <strong>Crypto Currency App</strong>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>)
}