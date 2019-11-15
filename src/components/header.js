import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Header() {
    return (<header style={{marginBottom:"30px"}}>
            <Grid className="navbar navbar-dark bg-dark shadow-sm">
                <Grid className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                    <img src="https://img.icons8.com/dusk/64/000000/bitcoin.png"/>
                        <strong>Crypto Currency App</strong>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </Grid>
            </Grid>
        </header>)
}