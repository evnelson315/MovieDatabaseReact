
/* There are a few moving parts on this page so lets start with the actual Form Element that is being rendered VVVVV */

// Include React 
var React = require('react');

// This is the main component. It includes the banner and Results element.
var Form = React.createClass({

	formSubmit: function(e){
		e.preventDefault()
			var data = {};
			var title = this.refs.title.value;
			var year = this.refs.year.value;
			var rating = this.refs.rating.value;
			var actors = this.refs.actors.value;
			var genre = this.refs.genre.value;

				if (title.length > 0){
						this.refs.title.value = "";
						data.title = title;
				}

				if (year.length > 0){
						this.refs.year.value = "";
						data.year = year;
				}

				if (rating.length > 0){
						this.refs.rating.value = "";
						data.rating = rating;
				}

				if (actors.length > 0){
						this.refs.actors.value = "";
						data.actors = actors;
				}

				if (genre.length > 0){
						this.refs.genre.value = "";
						data.genre = genre;
				}

			{/* Now those ref tags from the html-like form element are coming into effect.
			We are creating a variable for each data type using "this" and assignment their conventional name
			Below we are putting them all in the prop of onSubmitNewMovie*/}


				this.props.onSubmitNewMovie(data);
	},

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Add to my Database here</h3>
				</div>
				<div className="panel-body text-center">

						<h4><strong>Movie Data</strong></h4>
							<form onSubmit = {this.formSubmit.bind(this)}>
								<p>title</p>
								<input type="text" ref="title" className="form-control " id="textTitle"/>
								<p>Year</p>
								<input type="text" ref="year" className="form-control " id="textYear"/>
								<p>Rating</p>
								<input type="text" ref="rating" className="form-control " id="textRating"/>
								<p>Actors</p>
								<input type="text" ref="actors" className="form-control " id="textActors"/>
								<p>Genre</p>
								<input type="text" ref="genre" className="form-control " id="textGenre"/>
								<input type ="submit"/>
							</form>
							{/* This form element may look like a typical html form but it has one significant difference. Check out the ref tag.
							This is really important so there is somewhere for this data to be caught.
							Also notice the now normal className naming structure. */}


				</div>
				
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Form;