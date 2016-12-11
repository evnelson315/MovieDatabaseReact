var React = require('react');
var MovieItem = require ('./MovieItem');


var MovieList = React.createClass({
    render() {
        const { movies, movieDelete } = this.props;
        console.log(movies);
        var renderMoviesList = () => {

            return movies.map((movie, index) => {
                return (
                	<div>
	                    <MovieItem
	                    	title={movie.title}
                            year={movie.year}
                            rating={movie.rating}
                            actors={movie.actors}
                            genre={movie.genre}
                            id={movie.id}
	                    	key={index}
                            movieDelete={movieDelete}
	                    />
	                </div>
                );
            });
        }
        var noMovies = () => {
            if (movies.length === 0){
                return (
                    <p className="noQuestsText text-center">There are no movies in your DB</p>
                /* If there are ZERO movies in the DB, this p will be rendered.*/

                );
            }
        }
        return (
            <div>
                {noMovies()}

                {renderMoviesList()}
            </div>
        );
    } 
});

module.exports = MovieList;