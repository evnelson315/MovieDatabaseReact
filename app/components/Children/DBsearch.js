// Include React 
var React = require('react');

// This is the main component. It includes the banner and Results element.
var DBsearch = React.createClass({

	formSubmit: function(e){
		e.preventDefault()
			var data = {};
			var title = this.refs.title.value;
	

				if (title.length > 0){
						this.refs.title.value = "";
						data.title = title;
				}

				this.props.onSubmitSearchMovie(data);
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
							<form onSubmit = {this.formSubmit.bind(this)}>
								<p>title</p>
								<input type="text" ref="title" className="form-control " id="textTitle"/>
								<input type ="submit"/>
							</form>
							

				</div>
				
			</div>

		)
	}
});

// Export the componen back for use in other files
module.exports = DBsearch;