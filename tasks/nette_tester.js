/*
 * nette-tester
 * https://github.com/nette/tester
 *
 * Copyright (c) 2013 David Grudl
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	var spawn = require('child_process').spawn;

	grunt.registerMultiTask('nette_tester', 'Run Nette Tester.', function() {
		var options = this.options({
			bin: 'tester',
			phpBin: null,
			phpIni: null,
			log: null,
			ini: {},
			skipped: false,
			tap: false,
			jobs: null,
			colors: null,
			quiet: false,
		}), args = [];

		if (options.phpBin) {
			args.push('-p', options.phpBin);
		}
		if (options.phpIni) {
			args.push('-c', options.phpIni);
		}
		if (options.log) {
			args.push('--log', options.log);
		}
		Object.keys(options.ini).forEach(function(value) {
			args.push('-d', value + '=' + options.ini[value]);
		});
		if (options.skipped) {
			args.push('-s');
		}
		if (options.tap) {
			args.push('--tap');
		}
		if (options.jobs) {
			args.push('-j', options.jobs);
		}
		if (options.colors !== null) {
			args.push('--colors', +options.colors);
		}
		if (options.setup) {
			args.push('--setup', options.setup);
		}
		this.filesSrc.forEach(function(path) {
			args.push(path);
		});

		grunt.log.writeln('Starting Nette Tester');
		grunt.verbose.writeln('Exec: ' + options.bin, args);

		var proc = grunt.util.spawn({
			cmd: options.bin,
			args: args,
			opts: {stdio: options.quiet ? 'ignore' : 'inherit'},
		}, this.async());
	});

};
