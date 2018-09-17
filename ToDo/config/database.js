// config/database.js

module.exports = {
	//this one below works for when not using containers
	url : 'mongodb://localhost/'
	
	//this one below works for when we use a docker container for the database
	//url : 'mongodb://172.17.0.2'
};
