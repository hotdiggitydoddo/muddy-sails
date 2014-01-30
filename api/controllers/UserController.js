module.exports = {

	register: function(req, res) {
		var username = req.query.username;
		var password = req.query.password;

		res.send(username + ' ' + password);
	},
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
