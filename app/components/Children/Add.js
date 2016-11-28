// Include React
var React = require('react');
// Include the Main Component
var ApiCall= require('./ApiCall');/* We are requiring the ApiCall Component to be rendered on this Parent component of Add.js */

var Form = require('./Form');/* Same thing with Form. */

//var Form = require('./Components/Form')Still working on the Form part.

var Add = React.createClass({
	catchMovieData: function(data){
		var object = {
			title:data.title,
			year:data.year,
			rating:data.rating,
			actors:data.actors,
			genre:data.genre
		}
			fetch('/api/users/addMovie', {
			method: 'post',
			body: JSON.stringify(object),
			headers: {
				
				'content-type': 'application/json',
				'accept': 'application/json'
			}
			
		}).then((response) => {
			
		});

	},

	render: function(){

		return(
			<div className="container">
				
				<div className="col-lg-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Add a movie here!</h3>
						</div>
						<div className="panel-body">
						
						<ApiCall/>{/* This is where we have the APIcall component. 
						It is a work in progress and it not a priority freature in this project.
						 */}

						<Form onSubmitNewMovie={this.catchMovieData.bind(this)}/>
						{/* This catchMovieData.bind does exactly what it says it does! 
						It catches all of the data off the form from Form.js when it was moved from an html-like element,
						then to a prop called onSubmitNewMovie and binds it as catchMovieData. */}
	


				
						</div>

					</div>
				</div>

			</div>
		)
	}
});

module.exports = Add;
