// Include React
var React = require('react');
var DBsearch = require('./DBsearch');

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

		console.log(this.state.movies);

			// var renderYear = ()=>{

			// return this.state.movies.map((movieYear)=>{
			// 	return(
			// 		<div>{movieYear.year}</div>)
			// )};

		var renderTitle = ()=>{

			return this.state.movies.map((movieTitle)=>{
				return(
					<div>{movieTitle.title}</div>)
			});
	};		
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
								{renderTitle()}
							</div>
							<div className="panel-body">
								<h1>All Movie Years</h1>
							</div>
						</div>
					</div>

				</div>
			)
		
	}
});

module.exports = Search;






