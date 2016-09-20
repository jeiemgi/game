exports.files = {
  javascripts: {joinTo: 'js/app.js'},
  stylesheets: {joinTo: 'css/main.css'},
  templates: {joinTo: 'app.js'},
  plugins:{
  	autoReload:{
  		enabled:{
  			js:true,
  			css:true,
  			assets:true
  		}
  	}
  }
};