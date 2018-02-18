module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.initConfig({

    sass: {
      options: {
        sourceMap: true,
        'outputStyle': 'compressed'
      },
      styles: {
        files: [{
          expand: false,
          src: ['assets/scss/powercraft.scss'],
          dest: 'assets/dist/powercraft.min.css',
          ext: '.css'
        }]
      }
    },

    concat: {
      options: {
        separator: '\n',
      },

      js: {
        footer: '\n',
        banner: '\n',
        src: [
          'assets/js/**/*.js',
      ],
        dest: 'assets/dist/powercraft.js',
      },

      jsDependencies: {
        footer: '\n',
        banner: '\n',
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/tether/dist/js/tether.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
      ],
        dest: 'assets/dist/includes.min.js',
      },
    },
    

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/dist/powercraft.min.js': ['assets/dist/powercraft.js'],
        }
      }
    },

    watch: {
      mywatch: {
        files: ['assets/**/*.*'],
        tasks: ['sass', 'concat'],
        options: {
          interrupt: true,
          spawn: true,
        },
      },
      livereload: {
        options: { livereload: false },
        files: ['dist/**/*'],
      },
    },

  });


  grunt.registerTask('default', ['sass', 'concat', 'uglify']);
};
