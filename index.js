'use strict'
const fs = require('fs')
const pify = require('pify')
const plist = require('plist')

const iterm = '/Applications/iTerm.app/Contents/Info.plist'

module.exports = function () {
	return pify(fs)
		.readFile(iterm, 'utf8')
		.then(data => plist.parse(data).CFBundleGetInfoString)
}

module.exports.sync = function () {
	const data = fs.readFileSync(iterm, 'utf8')
	return plist.parse(data).CFBundleGetInfoString
}
