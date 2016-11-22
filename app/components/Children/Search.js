// Include React
var React = require('react');
var DBsearch = require('./DBsearch');

var Search = React.createClass({

	render: function(){

		return(
			<div className="container">

				<div className="col-lg-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">All My Movies!</h3>
						</div>
						<div className="panel-body">
							<DBsearch/>
						</div>
					</div>
				</div>

			</div>
		)
	}
});

module.exports = Search;






