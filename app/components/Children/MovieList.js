var React = require('react');
var MovieItem = require ('./MovieItem');


var MovieList = React.createClass({
    render() {
        const { movies } = this.props;
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
	                    	key={index}
	                    />
	                </div>
                );
            });
        }
        var noMovies = () => {
            if (movies.length === 0){
                return (
                    <p className="noQuestsText text-center">There are no movies in your DB</p>
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