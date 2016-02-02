
'use strict'

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      img: {
        options: {
          engine: 'im',
          sizes: [{
            name:"small",
            width: 360,
          },
          {
            name:"medium",
            width: 640,
          },
          {
            name:"large",
            width: 1024,
          }
          ]},

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src_images/',
          dest: 'images/'
        }]
      },
    },
  }

  );

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images:img']);

};