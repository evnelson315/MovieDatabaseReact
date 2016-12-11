// Include React Components
// React Components should be Uppercase.
var React = require('react');
var DBsearch = require('./DBsearch');
var MovieList = require('./MovieList');
var _ = require('lodash');

//ES5 for initializing state in a constructor.

var Search = React.createClass({
        //React method getInitialState. It returns an object that gets set to this.state.
getInitialState: function(){
        //sets its name state to props value
    return{
        //Added new state called movies and passed it an empty array
        movies:[],
        //Added new state called searchMovies and passed it an empty string
        //This empty string holds movies that are searched from the loaded array: movies.
        searchMovies:""
            }
},
//This is going to be my delete function, this will get passed down to the "grandchild" of MovieItem
movieDelete:function(id){
    const {movies} = this.state;

    const movieDelete = _.remove(movies, movie => movie.id === id );

    fetch(`/api/movieDelete/${movieDelete[0].id}`,{
        method: "DELETE",
        body: JSON.stringify(movieDelete),
        headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((results) => {
            this.setState({
                movies: movies
            })
        })

},





//This is my new search function! Because we already Fetched what is in the database with componentDidMount, we can just search the displayed data of searchMovies.
onSubmitSearchMovie:function(search){
   this.setState({
            searchMovies: search.toLowerCase()
        })
},
//THIS GETS ALL THE MOVIES IN MY DB
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

            //This is the search function. I will be adding more about this shortly.

            const filterSearch = this.state.movies.filter((results) => {
                //const is like creating another var
                //this,state.movies is getting the props of movies from our get from the database.
                var movies = results.title.toLowerCase();
                //var movies is getting the movie titles and undercasing. No one searches with uppercase.
                return this.state.searchMovies.length === 0 || movies.indexOf(this.state.searchMovies) > -1
                
            });
    				
            return(
                <div className="container">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">All My Movies!</h3>
                            </div>
                            {//THIS IS WHERE THE SEARCHED MOVIES GETS RENDERED
                            }
                            <div className="panel-body">
                                <DBsearch 
                                onSearch= {this.onSubmitSearchMovie.bind(this)}
                                //onSearch is a built in attribute
                               
                                />
                            </div>
                            <div className="panel-body">
                                <h1>All My Movies</h1>
                            </div>
                            <div className="panel-body">
                                <MovieList  
                                    movies = {filterSearch}
                                    //The delete movie funtion is being passed down from the grandparent component into MovieList component and setting variable as movieDelete (just a var name)
                                    movieDelete = {this.movieDelete.bind(this)} 
                                />

                            </div>
                        </div>
                    </div>
                </div>
            )
        
    }
});
module.exports = Search;






