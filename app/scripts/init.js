require.config({

    baseUrl: "/scripts",

    /* starting point for application */
    deps: ['backbone.marionette', 'foundation', 'main'],


    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        foundation: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        freewall: {
            deps: ['jquery']
        }
    },

    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',

        // packery and all its dependencies
        'packery-pkgd': '../bower_components/packery-pkgd/index',
        // outlayer: '../bower_components/outlayer',
        // 'get-size': '../bower_components/get-size',
        // 'get-style-property': '../bower_components/get-style-property',
        // eventie: '../bower_components/eventie',
        // 'doc-ready': '../bower_components/doc-ready',
        // 'matches-selector': '../bower_components/matches-selector',
        // eventEmitter: '../bower_components/eventEmitter',


        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

        foundation: '../bower_components/foundation/js/foundation',

        freewall: '../bower_components/freewall/freewall',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../bower_components/require-handlebars-plugin/hbs'
    },

    hbs: {
        disableI18n: true
    }
});
