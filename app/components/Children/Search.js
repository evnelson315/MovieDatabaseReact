// Include React
var React = require('react');
var DBsearch = require('./DBsearch');
var MovieList = require('./MovieList');
var Search = React.createClass({


getInitialState: function(){
	return{
		movies:[]
	}

},
componentWillMount:function(){
	fetch('/api/getMovies', {
			headers: {
				
				'content-type': 'application/json',
				'accept': 'application/json'
			}
			
		}).then((response) =>  
			response.json()).then((results) =>{
				this.setState({
					movies:results
				})
			})
},	


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
							<div className="panel-body">
								<h1>All My Movies</h1>
								
							</div>
							<div className="panel-body">
								<MovieList movies = {this.state.movies}/>
							</div>
						</div>
					</div>

				</div>
			)
		
	}
});

module.exports = Search;






