'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('ZUI.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    source:['src/<%= pkg.name %>.js'],
    path:{
      "bootstrap" : "src/bootstrap/",
      "angular" : "libs/angular/"
    },

    // Task configuration.
    clean: {
      files: ['dist']
    },

    concat: {
      dist: {
        options: {
          banner: '<%= banner %>',
          stripBanners: true
        },
        src: ['src/<%= pkg.name %>.js','src/directive/*'],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      angular:{
        src:['<%= path.angular %>angular.js','<%= path.angular %>angular-route.js','<%= path.angular %>angular-resource.js'],
        dest:'dist/js/libs/angular.js'
      }
    },

    uglify: {
      dist: {
        options: {
          banner: '<%= banner %>'
        },
        src: '<%= concat.dist.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      },
      bootstrap:{
        src: [
          '<%= path.bootstrap %>js/transition.js',
          '<%= path.bootstrap %>js/alert.js',
          '<%= path.bootstrap %>js/button.js',
          '<%= path.bootstrap %>js/carousel.js',
          '<%= path.bootstrap %>js/collapse.js',
          '<%= path.bootstrap %>js/dropdown.js',
          '<%= path.bootstrap %>js/modal.js',
          '<%= path.bootstrap %>js/tooltip.js',
          '<%= path.bootstrap %>js/popover.js',
          '<%= path.bootstrap %>js/scrollspy.js',
          '<%= path.bootstrap %>js/tab.js',
          '<%= path.bootstrap %>js/affix.js'
        ],
        dest: 'dist/js/bootstrap.js'
      }
    },

    recess: {
      options: {
        compile: true
      },
      bootstrap: {
        src: ['src/basic.less'],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['src/basic.less'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    copy: {
      fonts: {
        expand: true,
        cwd: '<%= path.bootstrap %>/',
        src: ["fonts/*"],
        dest: 'dist/'
      },
      jquery:{
        src:"libs/jquery/jquery.js",
        dest:'dist/js/libs/jquery.js'
      },
      highcharts:{
        src:"libs/highcharts/highcharts.js",
        dest:'dist/js/libs/highcharts.js'
      },
      dist:{
        expand: true,
        src:"dist/**/*",
        dest:"demo/",
        filter: 'isFile'
      }
    },

    watch: {
      main: {
        files: ['<%= source %>','src/directive/*'],
        tasks: ['concat','uglify','copy']
      },
      recess:{
        files: '**/*.less',
        tasks: ['recess']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // Default task.
  grunt.registerTask('default', ['clean', 'concat', 'uglify','recess','copy']);
  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);
  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

};
