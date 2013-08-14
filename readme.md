grunt-nette-tester
==================

> Grunt plugin for [Nette Tester](http://tester.nette.org).

This plugin requires Grunt `0.4.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

1. Install this grunt plugin with the following command:
	```
	npm install grunt-nette-tester --save-dev
	```

2. Install Nette Tester (preferably with [Composer](http://getcomposer.org))
	```
	composer require nette/tester --dev
	```

3. Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
	```js
	grunt.loadNpmTasks('grunt-nette-tester');
	```


The `nette_tester` task
-----------------------

In your project's Gruntfile, add a section named `nette_tester` to the data object passed into `grunt.initConfig()`.
Run this task with the `grunt nette_tester` command.

```js
nette_tester: {
	options: {
		bin: 'vendor/bin/tester',
		jobs: 40,
		quiet: false,
	},
	src: ['vendor/nette/tester/tests'],
}
```

Options
-------

### bin
Type: `String` Default: `'tester'`

The Nette Tester executable path.

### phpBin
Type: `String` Default: `'php-cgi'`

The PHP executable binary path.

### phpIni
Type: `String` Default: `none`

Sets a php.ini path.

### log
Type: `String` Default: `none`

File path for log.

### ini
Type: `Object` Default: `{}`

List of php ini options. `Example: {upload_max_filesize: '10MB'}`

### skipped
Type: `Bool` Default: `false`

Show information about skipped tests.

### tap
Type: `Boolean` Default: `false`

Report test execution in TAP format.

### jobs
Type: `Integer` Default: `1`

Number of jobs to run parallel.

### colors
Type: `Boolean` Default: auto

Use colors in output.

### quiet
Type: `Boolean` Default: `false`

Disables the output.

-----

[![Build Status](https://secure.travis-ci.org/nette/grunt-nette-tester.png?branch=master)](http://travis-ci.org/nette/grunt-nette-tester)
