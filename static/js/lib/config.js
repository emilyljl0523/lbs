requirejs.config({
    //preload that's to say,load the modules by default when the page is ready
    deps:["init"], 
    baseUrl: 'static/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        init:'lib/index',
        jquery: 'jquery-1.9.1',
        backbone:"backbone",
        underscore:"underscore",
        template:"template",
        templateSyntax:"template-syntax",
        util:'lib/util', sidebar:"../module/sidebar/view"
    },
     shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ["jquery","underscore"],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {exports: '_'},
        templateSyntax:{
            deps:["template"]
        }
    }
});

/*global config set here*/
define(function(){
    return {
        moduleRoot:""
    };
});