
require.config({
    paths: {
        backbone: '../bower_components/backbone/backbone',
        jquery: '../bower_components/jquery/dist/jquery.min',
        lodash: '../bower_components/lodash/lodash.min',
        templates: '../templates'
    }

});

require([
    'app'
], function(App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
