/* 


*/

module.exports = function(grunt) {
  
  // 1. Configures our tasks and tells plugins where to find certain files
  grunt.initConfig({
    // pass in options to plugins, references to files, etc
  });
  
  // 2. Load plugins into the file (e.g uglify)
  // grunt.loadNPMTasks('')

  // 3. Register tasks which need to be run
  // first parameter is name you give the task, second parameter is reference to config or function etc
  grunt.registerTask('run', () => {
    console.log('I am a task that is running');
  });
  
  grunt.registerTask('sleep', () => {
    console.log('I am a task that is sleeping');
  });

}