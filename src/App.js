import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';
import Slider from 'react-slick';
import imdb_icon from './images/imdb_icon.png';
import movies_icon from './images/movies_icon.png';

class App extends Component {

    movies = ["a bugs life", "fight club", "forest gump", "snatch", "the godfather", "fast and furious", "titanic", "predator", "alien", "pulp fiction",  "reservoir dogs"
];
    sliderItems = this.movies.map((movie, i) => <div key={i}><Movie title= {movie}/></div>);

    constructor(props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
    console.log(this.movies.length);
  }
  changeHandler(e) {
    this.refs.slider.slickGoTo(e.target.value)
  }






    render() {
        var settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            ...this.props,
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
                    <div className="sliderTitle"><img src={imdb_icon} /> Recommends <img src={movies_icon} width="50" /> MOVIES</div>
                    <Slider ref='slider' {...settings}>
                        {this.sliderItems}
                    </Slider>
                    <input className="slider" onChange={this.changeHandler} defaultValue={0} type='range' min={0} max={10} />
                </div>
                <footer>
                    <img className="logo" src="https://www.themoviedb.org/assets/static_cache/9b3f9c24d9fd5f297ae433eb33d93514/images/v4/logos/408x161-powered-by-rectangle-green.png" />
                    <img src={logo} className="App-logo" alt="logo" width="45" height="45"/>
                </footer>
            </div>
        );
    }
}

export default App;
