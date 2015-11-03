/* globals module */
module.exports = function(grunt){
    'use strict';
    
    var tasks = [];

    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-version");
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-sass");

    grunt.initConfig({
        concurrent: {
            options: {
              logConcurrentOutput: true
            },
            dev: {
              tasks: ["watch:browserify", "watch:codestyle", "watch:css"]
            }
        },
        watch: {
            codestyle: {
                files: [ "./src/**/*.js"  ],
                tasks: [ "jscs", "jshint" ]
            },
            css: {
                files: [ "./src/scss/**/*.scss" ],
                tasks: [ "sass" ]
            },
            browserify: {
                files: [ "./src/**/*.js"  ],
                tasks: [ "browserify" ]
            }
        },
        version: {
            readme: {
                options: {
                    prefix: "#version:\\s*"
                },
                src: [ "readme.md" ]
            },
            comments: {
                options: {
                    prefix: "\\* @version\\s*"
                },
                src: [ "src/*.js" ]
            },
            defaults: {
                src: [ "src/*.js", "bower.json", "yuidoc.json" ]
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            src: {
                files: {
                    "./src/css/styles.css": "./src/scss/styles.scss"
                }
            }
        },
        jscs: {
            src: "./src/**/*.js",
            options: {
                config: ".jscsrc"
            }
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc",
                reporter: require( "jshint-stylish" )
            },
            all: {
                src: [ "Gruntfile.js", "./src/**/*.js" ]
            }
        },
        browserify: {
            options: {
                transform: [["babelify", {presets: ["es2015"]}]]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'dist/'
                }]
            }
        }
    });
    
    
    grunt.registerTask("dev", ["concurrent:dev"]);
    grunt.registerTask("prod", ["version", "browserify", "sass", "jscs", "jshint"]);
    //grunt.registerTask("default", []);
};

