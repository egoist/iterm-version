'use strict'
var fs = require('fs')
var pify = require('pify')
var plist = require('plist')
var Promise = require('pinkie-promise')

var iterm = '/Applications/iTerm.app/Contents/Info.plist'

module.exports = function () {
	return pify(fs, Promise).readFile(iterm, 'utf8')
		.then(function (data) {
			data = plist.parse(data)
			return data.CFBundleGetInfoString
		})
}

module.exports.sync = function () {
	var data = fs.readFileSync(iterm, 'utf8')
	data = plist.parse(data)
	return data.CFBundleGetInfoString
}
