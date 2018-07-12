#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const rootPath = require('@leboncoin/root-path')
const source = path.join(__dirname, '.editorconfig')
const dest = path.join(rootPath, '.editorconfig')

if (source === dest) {
  console.log('@leboncoin/editorconfig: Can\'t copy .editorconfig because ' +
              'source and destination are identical')
  process.exit(0)
}

console.log(`@leboncoin/editorconfig: Will create the .editorconfig file (${dest})`)

if (fs.existsSync(dest)) {
  console.log('@leboncoin/editorconfig: .editorconfig exists, deleting it.')
  fs.unlinkSync(dest)
}

console.log('@leboncoin/editorconfig: Create the .editorconfig file.')
const data = fs.readFileSync(source)
fs.writeFileSync(dest, data, { mode: 0o444 })
