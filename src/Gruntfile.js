module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css-url-replace');
  grunt.loadNpmTasks('grunt-babel');

  const babel = require('@babel/core')

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

    babel: {
        options: {
          sourceMap: false,
          compact: true,
          presets: [['@babel/preset-env', {
            "targets": "> 0.25%, not dead",
            modules: false
          }]]
        },
        dist: {
          files:[{
            "expand": true,
            "cwd": "assets/dist",
            "src": ["includes.js", 'powercraft.js'],
            "dest": "assets/dist",
            "ext": ".min.js"
        }]
        }
    },

    concat: {
      options: {
        separator: '\n',
      },
    
      cssImports: {

        src: [ 'node_modules/video.js/dist/video-js.min.css' ],
        dest: 'assets/dist/includes.css',
        
      },

      jsDependencies: {
        footer: '\n',
        banner: '\n',
        src: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/is-in-viewport/lib/isInViewport.min.js',
            'node_modules/video.js/dist/video.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      ],
        dest: 'assets/dist/includes.js',
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
          'assets/dist/powercraft.min.js': ['assets/dist/includes.babel.js' ,'assets/dist/powercraft.babel.js'],
        }
      }
    },
    
    watch: {
      mywatch: {
        files: ['./assets/js/*.*', './assets/img/*.*'],
        tasks: ['babel', 'concat'],
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


  grunt.registerTask('default', ['concat', 'babel']);
};
