// routes.js
module.exports = function(app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });
	
    app.get('/ukiyo', function(req, res) {
        res.render('ukiyo.ejs'); // load the index.ejs file
    });
	
    app.get('/live-make', function(req, res) {
        res.render('live-make.ejs'); // load the index.ejs file
    });
	
    app.get('/rolling-thunder', function(req, res) {
        res.render('rolling-thunder.ejs'); // load the index.ejs file
    });
	
    app.get('/shrouded-pearl', function(req, res) {
        res.render('shrouded-pearl.ejs'); // load the index.ejs file
    });
	
    app.get('/sf-village', function(req, res) {
        res.render('sf-village.ejs'); // load the index.ejs file
    });
	
	app.get('/sf-resurrection', function(req, res) {
        res.render('sf-resurrection.ejs'); // load the index.ejs file
    });
}