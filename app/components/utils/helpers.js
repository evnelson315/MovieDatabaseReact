// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(location){

		console.log(location);

		//Figure out the geolocation
		var queryURL = "http://www.omdbapi.com/?t=" + location + "&y=&plot=short&r=json";
		
		return axios.get(queryURL)
			.then(function(response){
				console.log(response.data);
				console.log(response.data.Title);
				return response.data.Genre;
		})

	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;