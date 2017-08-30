import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LazyLoad from 'react-lazy-load';
import Movie from './Movie.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LazyLoad height={762} offsetVertical={300}>
                    <Movie title="titanic" />
                </LazyLoad>
                <LazyLoad height={762} offsetVertical={300}>
                    <Movie title="predator" />
                </LazyLoad>
                <LazyLoad height={762} offsetVertical={300}>
                    <Movie title="alien" />
                </LazyLoad>
            </div>
        );
    }
}

export default App;
