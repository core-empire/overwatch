'use strict';

module.exports = function (grunt) {
    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_sass/*.{scss,sass}', '_sass/**/*.{scss,sass}'],
                tasks: ['sass'],
            },

            livereload: {
                options: {
                    livereload: true,
                    keepAlive: true
                },
                files: ['_site/**/*'],
            },
        },

        

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: false,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: '_sass',
                cssDir: '_site/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'sass',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass'
    ]);

    // Deploy to GitHub gh-pages (live site)
    grunt.task.registerTask('deploy', function() {
        var shell = require('shelljs');
        shell.exec('jekyll build'); // Builds the site off the changes in the working tree
        shell.exec('git subtree split --prefix _site -b gh-pages'); // Creates a local gh-pages branch with the distribution only (_site)
        shell.exec('git push -f origin gh-pages:gh-pages'); // Deletes remote branch and pushes the local branch
        shell.exec('git branch -D gh-pages'); // Removes local gh-pages branch
    });

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');
}