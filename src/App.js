import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LazyLoad from 'react-lazy-load';
import Movie from './Movie.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>

                <Movie title="pulp fiction" />

                Scroll to load images.
                <LazyLoad height={762} offsetVertical={300}>
                    <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
                </LazyLoad>
                <LazyLoad height={762} offsetVertical={300}>
                    <img src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg' />
                </LazyLoad>
                <LazyLoad height={762} offsetVertical={300}>
                    <img src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif' />
                </LazyLoad>


            </div>
        );
    }
}

export default App;
