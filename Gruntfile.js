module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      options: {
        sassDir: '<%= pkg.directories.src %>/styles',
        cssDir: '<%= pkg.directories.dist %>/css'
      },

      dist: {
        options: {
          outputStyle: 'compressed'
        }
      }
    },

    uglify: {

    },

    watch: {
      compass: {
        files: ['<%= pkg.directories.src %>/styles/**/*.scss'],
        tasks: ['compass']
      },

      js: {
        files: ['<%= pkg.directories.src %>/scripts/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'watch']);

};
