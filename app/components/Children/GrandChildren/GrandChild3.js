// Include React
var React = require('react');

var GrandChild3 = React.createClass({

	render: function(){
		return(
			<div className="panel panel-success">
				<div className="panel-heading">
					<h3 className="panel-title">Grandchild #3</h3>
				</div>
				<div className="panel-body">
					Panel content
				</div>
			</div>
		)

	}
});

module.exports = GrandChild3;