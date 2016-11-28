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