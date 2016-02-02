module.exports = function(grunt) {
  // Do grunt-related things in here
  // Project configuration.
  grunt.initConfig({
    responsive_images: {
    	my-task {
    		options: {
          		engine: 'im',
	          	sizes: [{
	            name:"thumbnail",
	            width: 640,
	            height: 360,
	          	}]
        	}
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
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images:my-task']);

};