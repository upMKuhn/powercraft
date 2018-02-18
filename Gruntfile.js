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
          expand: true,
          src: ['scss/**/*.scss', 'bower_components/bootstrap/scss/**/*.scss'],
          dest: 'dist/powercraft',
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
          'js/**/*.js',
      ],
        dest: 'dist/powercraft.js',
      },

      css: {
        src: [
          'dist/powercraft/**/*.css',
      ],
        dest: 'dist/powercraft.min.css',
      },

      jsDependencies: {
        footer: '\n',
        banner: '\n',
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/tether/dist/js/tether.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
      ],
        dest: 'dist/powercraft-dependencies.min.js',
      },
      cssDependencies: {
        src: [
          'bower_components/tether/dist/css/tether.min.css',
      ],
        dest: 'dist/powercraft-dependencies.min.css',
      },
    },
    

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/powercraft.min.js': ['dist/powercraft.js'],
        }
      }
    },

    watch: {
      mywatch: {
        files: ['scss/**/*.scss', 'js/**/*.js', '**/*.html', "!_site/**/*.*"],
        tasks: ['sass', 'concat', 'uglify'],
        options: {
          interrupt: true,
          spawn: true,
        },
      },
      livereload: {
        options: { livereload: true },
        files: ['dist/**/*'],
      },
    },

  });


  grunt.registerTask('default', ['sass', 'concat', 'uglify']);
};
