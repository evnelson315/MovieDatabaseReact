// Include React 
var React = require('react');

var Main = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="container">
				<div className="jumbotron">
					<h1>Welcome</h1>
					<h3>Your Home Movie Database</h3>
					<hr/>
					<p>
						<a href="#/Add"><button className="btn btn-primary btn-lg">Add or Delete a Movie</button></a>
						<a href="#/Search"><button className="btn btn-primary btn-lg">All My Movies</button></a>
					</p>
				</div>

				<div className="row">
					
					{/*This code will dump the correct Child Component*/}
					{this.props.children}

				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;