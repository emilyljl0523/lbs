requirejs.config({
    //By default load any module IDs from js/lib
    deps:["lib/index"],
    baseUrl: 'static/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'jquery-1.9.1',
        backbone:"backbone",
        underscore:"underscore",
        template:"template",
        templateSyntax:"template-syntax",
        util:'lib/util'
    }, 
     shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ["underscore","jquery"],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {exports: '_'}
    }
});