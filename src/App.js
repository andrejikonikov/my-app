import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';
import Slider from 'react-slick';

class App extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            accessibility: true,
            arrows: true,
            lazyLoad: true
        };
        return (
            <div className="App">
                <Slider {...settings}>
                    <div><Movie title="titanic" /></div>
                    <div><Movie title="predator" /></div>
                    <div><Movie title="alien" /></div>
                </Slider>
            </div>
        );
    }
}

export default App;
