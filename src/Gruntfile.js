module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css-url-replace');


  var readYaml = require('read-yaml');
  let theBaseDir = '';
  readYaml.sync('_config.yml', (err, data) => {
      if (err) throw err;
      baseDir = data.baseurl;
  });



  grunt.initConfig({

    sass: {
      styles: {
        options: {
          sourceMap: true,
          'outputStyle': 'compressed'
        },
        files: [{
          expand: false,
          src: ['assets/scss/powercraft.scss'],
          dest: 'assets/dist/powercraft.min.css',
          ext: '.css'
        }]
      }
    },

    css_url_replace: {
        options: {
          staticRoot: '/BLAAAA'
        },
        replace: {
          files: {
            'assets/dist/powercraft.min.css2': ['assets/dist/powercraft.min.css']
          }
        }
    },

    concat: {
      options: {
        separator: '\n',
      },

      jsDependencies: {
        footer: '\n',
        banner: '\n',
        src: [
          'bower_components/popper.js/dist/popper.min.js',
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/tether/dist/js/tether.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'node_modules/video.js/dist/video.min.js',
          'node_modules/photoswipe/dist/photoswipe.min.js',
      ],
        dest: 'assets/dist/includes.min.js',
      },

      js: {
        footer: '\n',
        banner: '\n',
        src: [
          'assets/js/**/*.js',
      ],
        dest: 'assets/dist/powercraft.js',
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
        files: ['./assets/js/*.*', './assets/scss/**/*', './assets/img/*.*'],
        tasks: ['sass', 'css_url_replace', 'concat'],
        options: {
          interrupt: true,
          spawn: true,
        },
      },
      livereload: {
        options: { livereload: false },
        files: [
          './assets/js/**/*.*', 
          './assets/scss/**/*.*', 
          './assets/img/**/*.*'
        ],
      },
    },

  });


  grunt.registerTask('default', ['concat', 'uglify']);
};
