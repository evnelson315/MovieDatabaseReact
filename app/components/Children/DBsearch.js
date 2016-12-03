// Include React 
var React = require('react');

// This is the main component. It includes the banner and Results element.
var DBsearch = React.createClass({
	formSubmit: function(){
			var title = this.refs.title.value;
			console.log(title);
			this.props.onSearch(title);
	},

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search your Database here</h3>
				</div>
				<div className="panel-body text-center">

						<h4><strong>Movie Search</strong></h4>
								<p>title</p>
								<input type="search" ref="title" className="form-control" onChange={this.formSubmit.bind(this)} id="textTitle"/>
								{//WE ARE NO LONGER USING A SEARCH FORM TO SEARCH FOR MOVIES. INPUT TYPE CHANGED FROM TEXT TO SEARCH. IN THE FORM SUBMIT FUNCTION, THE REF "TITLE" IS 
                            }
								<div className="panel-body">
								<h2>Searched movie name goes here</h2>

							</div>
							

				</div>
				
			</div>

		)
	}
});

// Export the componen back for use in other files
module.exports = DBsearch;