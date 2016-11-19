// Include React
var React = require('react');
// Include the Main Component
var Form = require('./Form');
var Results = require('./Results');
//var Form = require('./Components/Form')Still working on the Form part.

var Add = React.createClass({

	render: function(){

		return(
			<div className="container">
				
				<div className="col-lg-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Add or Delete a movie here!</h3>
						</div>
						<div className="panel-body">
						
						<Form/>
						<Results/>
								


				
						</div>

					</div>
				</div>

			</div>
		)
	}
});

module.exports = Add;
