'use strict'
var fs = require('fs')
var pify = require('pify')
var plist = require('plist')

var iterm = '/Applications/iTerm.app/Contents/Info.plist'

module.exports = function () {
	return pify(fs)
		.readFile(iterm, 'utf8')
		.then(data => plist.parse(data).CFBundleGetInfoString)
}

module.exports.sync = function () {
	var data = fs.readFileSync(iterm, 'utf8')
	return plist.parse(data).CFBundleGetInfoString
}
