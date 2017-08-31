import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';
import Slider from 'react-slick';

class App extends Component {


    movies = ["a bugs life" , "all quiet on the western front", "forest gump", "snatch", "the godfather", "fight club", "fast and furious", "titanic", "predator", "alien", "pulp fiction",  "reservoir dogs"
];
    sliderItems = this.movies.map((movie, i) => <div key={i}><Movie title= {movie}/></div>);

    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [{
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
        };
        return (
            <div>
                <header>
                    <h1>Recommends movies app by Andrej</h1>
                </header>
                <div className="App">
                    <div className="sliderTitle"><i className="fa fa-imdb" aria-hidden="true"></i> Recommends <i className="fa fa-film" aria-hidden="true"></i> MOVIES</div>
                    <Slider {...settings}>
                        {this.sliderItems}
                    </Slider>
                </div>
                <footer>
                    <img className="logo" src="https://www.themoviedb.org/assets/static_cache/9b3f9c24d9fd5f297ae433eb33d93514/images/v4/logos/408x161-powered-by-rectangle-green.png" />


                    </footer>


            </div>

        );
    }
}

export default App;
