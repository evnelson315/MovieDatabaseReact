// Include React
var React = require('react');
// Include the Main Component
var ApiCall= require('./ApiCall');
var Form = require('./Form');
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
							<h3 className="panel-title">Add or Delete a movie here!</h3>
						</div>
						<div className="panel-body">
						
						<ApiCall/>
						<Form onSubmitNewMovie={this.catchMovieData.bind(this)}/>
								


				
						</div>

					</div>
				</div>

			</div>
		)
	}
});

module.exports = Add;
