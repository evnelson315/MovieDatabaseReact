// Include React
var React = require('react');
// Include the Main Component
//var Form = require('./Components/Form')Still working on the Form part.

var Child1 = React.createClass({

	render: function(){

		return(
			<div className="container">
				
				<div className="col-lg-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Add or Delete a movie here!</h3>
						</div>
						<div className="panel-body">
							<p> Enter the movie you'd like to add or delete </p>
								<p>Title</p>
								<input type="text" className="form-control " id="text"/>
								<p>Year</p>
								<input type="text"  className="form-control " id="text"/>
								<p>Rating</p>
								<input type="text" className="form-control " id="text"/>
								<p>Actors</p>
								<input type="text" className="form-control " id="text"/>
								<p>Genre</p>
								<input type="text" className="form-control " id="text"/>
						
							<p>
								<a href={"#/Child1/GrandChild1"}><button className="btn btn-success btn-sm">Add this movie!</button></a>
								<a href="#/Child1/GrandChild2"><button className="btn btn-danger btn-sm">Delete</button></a>
								<a href="#/Child1/GrandChild3"><button className="btn btn-success btn-sm">Search by Field</button></a>
							</p>	


							{/*code will allows to automatically dump the correct GrandChild components*/}
							{this.props.children}
						</div>

					</div>
				</div>

			</div>
		)
	}
});

module.exports = Child1;
