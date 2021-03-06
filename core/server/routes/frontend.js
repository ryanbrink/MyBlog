var frontend    = require('../controllers/frontend'),
    config      = require('../config'),
    express     = require('express'),
    utils       = require('../utils'),

    frontendRoutes;

frontendRoutes = function () {
    var router = express.Router(),
        subdir = config.paths.subdir;

    // ### Admin routes
    router.get(/^\/(logout|signout)\/$/, function redirect(req, res) {
        /*jslint unparam:true*/
        res.set({'Cache-Control': 'public, max-age=' + utils.ONE_YEAR_S});
        res.redirect(301, subdir + '/ghost/signout/');
    });
    router.get(/^\/signup\/$/, function redirect(req, res) {
        /*jslint unparam:true*/
        res.set({'Cache-Control': 'public, max-age=' + utils.ONE_YEAR_S});
        res.redirect(301, subdir + '/ghost/signup/');
    });

    // redirect to /ghost and let that do the authentication to prevent redirects to /ghost//admin etc.
    router.get(/^\/((ghost-admin|admin|wp-admin|dashboard|signin|login)\/?)$/, function (req, res) {
        /*jslint unparam:true*/
        res.redirect(subdir + '/ghost/');
    });

    router.get('*digitally-mixing-modern-worship-part-3-life-with-the-gld-80*', function(req, res, next) {
        res.redirect(301, 'http://www.rythechurchtechguy.com/digitally-mixing-modern-worship-part-3-life-with-the-gld-80/');
    });

    router.get('*digitally-mixing-modern-worship-part-2-rethinking-everything-with-dante*', function(req, res, next) {
        res.redirect(301, 'http://www.rythechurchtechguy.com/digitally-mixing-modern-worship-part-2-rethinking-everything-with-dante/');
    });

    router.get('*digitally-mixing-modern-worship-part-1-getting-started-with-the-gld-80*', function(req, res, next) {
        res.redirect(301, 'http://www.rythechurchtechguy.com/digitally-mixing-modern-worship-part-1-getting-started-with-the-gld-80/');
    });

    router.get('*worship-synth-mainstage-keyboard-setup*', function(req, res, next) {
        res.redirect(301, 'http://www.rythechurchtechguy.com/worship-synth-mainstage-keyboard-setup/');
    });

    router.get('*performance-drumsloops-setup-for-june-rocks*', function(req, res, next) {
        res.redirect(301, 'http://www.rythechurchtechguy.com/performance-drumsloops-setup-for-june-rocks/');
    });

    router.get('*live-music-part-2-audio-and-midi-routing*', function(req, res, next) {
        res.redirect(301, 'http://www.rythechurchtechguy.com/live-music-part-2-audio-and-midi-routing/');
    });

    router.get('*live-music-part-1-hardware*', function(req, res, next) {
        res.redirect(301, 'http://www.rythechurchtechguy.com/live-music-part-1-hardware/');
    });





    // ### Frontend routes
    router.get('/rss/', frontend.rss);
    router.get('/rss/:page/', frontend.rss);
    router.get('/feed/', function redirect(req, res) {
        /*jshint unused:true*/
        res.set({'Cache-Control': 'public, max-age=' + utils.ONE_YEAR_S});
        res.redirect(301, subdir + '/rss/');
    });

    // Tags
    router.get('/tag/:slug/rss/', frontend.rss);
    router.get('/tag/:slug/rss/:page/', frontend.rss);
    router.get('/tag/:slug/page/:page/', frontend.tag);
    router.get('/tag/:slug/', frontend.tag);

    // Authors
    router.get('/author/:slug/rss/', frontend.rss);
    router.get('/author/:slug/rss/:page/', frontend.rss);
    router.get('/author/:slug/page/:page/', frontend.author);
    router.get('/author/:slug/', frontend.author);    
    
    router.get('/gone-hunting', function(req, res, next){
        res.render('ga-today-ph');
      });
    
    router.get('/ga-today', function(req, res, next){
        res.render('ga-today');
      });
    
    router.get('/bio', function(req, res, next){
        res.render('bio');
      });

    router.get('/harvest_links', function(req, res, next){
        res.render('harvest_links');
      });

    router.get('/harvest_what_next', function(req, res, next){
        res.render('harvest_what_next');
      });

    router.get('/harvest_links_mobile', function(req, res, next){
        res.render('harvest_links_mobile');
      });
    
    router.get('/harvest_easter', function(req, res, next){
        res.render('easter');
      });

    router.get('/habitat', function(req, res, next){
        res.render('habitat');
      });
    
    router.get('/contact-thanks', function(req, res, next){
        res.render('contact-thanks');
      });

    // Default
    router.get('/page/:page/', frontend.homepage);
    router.get('/', frontend.homepage);    
    router.get('*', frontend.single);

    return router;
};

module.exports = frontendRoutes;
