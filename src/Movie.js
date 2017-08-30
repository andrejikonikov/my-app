import React, { Component } from 'react';
import { AxiosProvider, Request, Get } from 'react-axios'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.url = 'https://api.themoviedb.org/3/search/movie?api_key=8ff4bd40bd0796ca1c5ecd0e9ad326cf&query=' + this.props.title + '&page=1';
    }

    render () {

        return (
            <div>
                <Get url={this.url} >
                    {(error, response, isLoading) => {
                        if(error) {
                            return (<div>Cannot load movie information: {error.message}</div>)
                        }
                        else if(isLoading) {
                            return (<div>Loading...</div>)
                        }
                        else if(response !== null) {
                            console.log(response.data.results[0]);
                            return (
                                <div className="card">
                                    <p>{response.data.results[0].title}</p>
                                    <p>{response.data.results[0].overview}</p>
                                    <p>{response.data.results[0].poster_path}</p>
                                    <img src={ "https://image.tmdb.org/t/p/w500/" + response.data.results[0].poster_path} />
                                </div>
                            )
                        }
                        return (<div>Loading...</div>)
                    }}
                </Get>
            </div>
        );
    }
}

export default Movie;
