// Include React
var React = require('react');
var DBsearch = require('./DBsearch');
var MovieList = require('./MovieList');

var Search = React.createClass({
getInitialState: function(){
    return{
        movies:[],
        searchMovies:""
            }
},


//FUNCTION FOR THE SEARCH ON THE CHILD COMPONENT
onSubmitSearchMovie:function(search){
   this.setState({
            searchMovies: search.toLowerCase()
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

            const filterSearch = this.state.movies.filter((results) => {
                var movies = results.title.toLowerCase();
                return this.state.searchMovies.length === 0 || movies.indexOf(this.state.searchMovies) > -1
                
            });
    				
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
                                onSearch= {this.onSubmitSearchMovie.bind(this)}
                               
                                />
                            </div>
                            <div className="panel-body">
                                <h1>All My Movies</h1>
                                
                            </div>
                            {//THIS IS WHERE ALL THE MOVIES IN THE DB GET RENDERED
                            }
                            <div className="panel-body">
                                <MovieList movies = {filterSearch}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        
    }
});
module.exports = Search;






