import React, { Component } from 'react';
import { AxiosProvider, Request, Get } from 'react-axios'
import genres from './genres.json';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.url = 'https://api.themoviedb.org/3/search/movie?api_key=8ff4bd40bd0796ca1c5ecd0e9ad326cf&query=' + this.props.title + '&page=1';
    }

    decodeGenre (codes) {
        var genresList = "";
        var limit = 0;
        genres.genres.map(function(g) {

            codes.map(function(gIds) {
                if ((g.id === gIds) &&(limit < 2)) {
                    if (genresList.length) {
                        genresList += (", " + g.name);
                        limit += 1;
                    } else {
                        genresList += g.name;
                        limit += 1;
                    }
                }
            });
        });
        return (genresList);
    }

    render () {
        return (
            <Get url={this.url} >
                {(error, response, isLoading) => {
                    if(error) {
                        return (<div>Cannot load movie information: {error.message}</div>)
                    }
                    else if(isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if(response !== null) {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-5">
                                        <img src={ "https://image.tmdb.org/t/p/w500/" + response.data.results[0].poster_path} alt={response.data.results[0].title} width="144" height="92" />
                                    </div>
                                    <div className="col-7">
                                        <div className="movieTitle">{response.data.results[0].title}</div>
                                        <div className="genre">
                                            <p>{this.decodeGenre(response.data.results[0].genre_ids)}</p>
                                        </div>
                                        <a className="btn btn-primary" href="#" role="button"><i className="fa fa-arrow-right" aria-hidden="true"></i> more</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">

                                        <div className="movieRate"><i className="fa fa-star" aria-hidden="true"></i>{response.data.results[0].vote_average}</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="movieOverview">{(response.data.results[0].overview).substring(0, (response.data.results[0].overview).indexOf(".") )}</div>
                                        </div>
                                </div>
                            </div>
                        )
                    }
                    return (<div>Loading...</div>)
                }}
            </Get>
        );
    }
}

export default Movie;
