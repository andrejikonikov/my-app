import React, { Component } from 'react';

class Movie extends Component {

    constructor(props) {
        super(props);
        console.log(this.getMoviesFromApiAsync());
    }

    getMoviesFromApiAsync() {
        // return fetch('https://facebook.github.io/react-native/movies.json')
        return fetch('https://api.themoviedb.org/3/search/movie?api_key=36bf560f8967672b5e428038340f0065&language=en-US&query=%27titanic%27&page=1')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("...", responseJson);
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render () {
        return (
            <p>{this.props.title}</p>
        );
    }
}

export default Movie;
