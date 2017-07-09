'use strict'

const fs = require('fs')
const path = require('path')
const split = require('css-split')

// prepare data
const SPLIT_SIZE = 450;
const content = fs.readFileSync(path.join(__dirname, './node_modules/bootstrap/dist/css/bootstrap.min.css'), 'utf8')

let outputDir = path.join(__dirname, 'css')
if (!fs.existsSync(outputDir)) {
fs.mkdirSync(outputDir)
}

split(content, SPLIT_SIZE).forEach((part, i) => {
	let file = path.join(outputDir, `part${i}-css-split.css`)
	let data = part.content.trim()
	fs.	writeFileSync(file, data)
});

 