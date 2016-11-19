// Include React 
var React = require('react');

// This is the main component. It includes the banner and Results element.
var Results = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Add to my Database here</h3>
				</div>
				<div className="panel-body text-center">

						<h4><strong>Movie Data</strong></h4>
								<p>title</p>
								<input type="text" className="form-control " id="text"/>
								<p>Year</p>
								<input type="text"  className="form-control " id="text"/>
								<p>Rating</p>
								<input type="text" className="form-control " id="text"/>
								<p>Actors</p>
								<input type="text" className="form-control " id="text"/>
								<p>Genre</p>
								<input type="text" value={this.props.data} className="form-control " id="text"/>
						
							

				</div>
					<button type="button" className="btn btn-primary" onClick={this.handleClick}>Add to my Database</button>
			</div>

		)
	}
});

// Export the componen back for use in other files
module.exports = Results;