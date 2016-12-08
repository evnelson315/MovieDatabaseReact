{/* This is pretty darn important. The var MovieItem is formatting each object (movie) in the array of movies (in our database)
This allows all movies to be rendered with all data that we see. */}
var React = require('react');

var MovieItem = React.createClass({
	render(){
		const { title, year, rating, actors, genre } = this.props;

		
        const renderMovie = () => {
       		return (
       			<div className="well">	
       				<p>Title: {title}</p>
       				<p>Year: {year}</p>
       				<p>Rating: {rating}</p>
       				<p>Actors: {actors}</p>
       				<p>Genre: {genre}</p>
              <button>delete this movie</button>
       			</div>
				
            )
        }

		return (
			<div>
				{renderMovie()}
			</div>
		);
	}
});
module.exports = MovieItem;