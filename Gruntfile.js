/*
 * Grunt Nette Tester
 * https://github.com/nette/tester
 *
 * Copyright (c) 2013 David Grudl
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	var win = require('os').platform() === 'win32';

	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		nette_tester: {
			options: {
				bin: 'vendor/bin/tester' + (win ? '.bat' : ''),
				phpBin: 'php',
				jobs: 40,
			},
			src: ['vendor/nette/tester/tests'],
		},
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['nette_tester']);

	grunt.registerTask('default', ['jshint', 'test']);

};
