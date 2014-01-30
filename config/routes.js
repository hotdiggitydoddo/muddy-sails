module.exports.routes = {

  '/': {
    view: 'home/index'
  },

  '/register': 'UserController.register',
  '/login': 'SessionController.login',
  '/logout': 'SessionController.logout'
};