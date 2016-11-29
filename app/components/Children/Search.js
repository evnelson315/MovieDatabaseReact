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


//FUNCTION FOR THE SEARCH ON THE CHILD COMPONENT
onSubmitSearchMovie:function(){
    fetch('/api/searcMovies', {
            headers: {
                
                'content-type': 'application/json',
                'accept': 'application/json'
            }
            
        }).then((response) =>  
            response.json()).then((results) =>{
                this.setState({
                    searchedmovies:results
                })
            })
},
//THIS VVV RENDERS ALL THE MOVIES IN MY DB
// THIS NEEDS TO BE AFTER THE INITIAL RENDER
componentDidMount:function(){
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
                            {//THIS IS WHERE THE SEARCHED MOVIE GETS RENDERED
                            }
                            <div className="panel-body">
                                <DBsearch 
                                searchedmovies={this.state.searchedmovies}
                                onSubmitSearchMovie={this.onSubmitSearchMovie}
                                />
                            </div>
                            <div className="panel-body">
                                <h1>All My Movies</h1>
                                
                            </div>
                            {//THIS IS WHERE ALL THE MOVIES IN THE DB GET RENDERED
                            }
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






