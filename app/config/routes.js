// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var Add = require('../components/Children/Add'); 
var Search = require('../components/Children/Search'); 



// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Child1 then show the appropriate component*/}
		<Route path='Add' component={Add} >


		</Route>

		{/* If user selects Child2 then show the appropriate component*/}
		<Route path='Child2' component={Search} />

		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Add} />
		
	</Route>


);