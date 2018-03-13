/* 


*/

module.exports = function(grunt) {
  
  // 1. Configures our tasks and tells plugins where to find certain files
  grunt.initConfig({
    // pass in options to plugins, references to files, etc
    concat: {
      js: {
        src: ['js/*.js'], // grab all js files in js folder
        dest: 'build/scripts.js' 
      },
      css: {
        src: ['css/*.css'], // grab all js files in js folder
        dest: 'build/styles.js' 
      },

    }
  });
  
  // 2. Load plugins into the file (e.g uglify)
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 3. Register tasks which need to be run
  // first parameter is name you give the task, second parameter is reference to config or function etc
  grunt.registerTask('run', () => {
    console.log('I am a task that is running');
  });
  
  grunt.registerTask('sleep', () => {
    console.log('I am a task that is sleeping');
  });
  
  // fire multiple tasks at once
  grunt.registerTask('all', ['sleep', 'run']);

}