#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync
const source = path.join(__dirname, 'npmrc')
const gitRoot = execSync('git rev-parse --show-toplevel').toString().trim()
const dest = path.join(gitRoot, '.npmrc')

if (path.dirname(source) === gitRoot) {
  console.log('@leboncoin/npmrc: Can\'t copy .npmrc because ' +
              'source and destination are identical')
  process.exit(0)
}

console.log(`@leboncoin/npmrc: Will create the .npmrc file (${dest})`)

if (fs.existsSync(dest)) {
  console.log('@leboncoin/npmrc: .npmrc exists, deleting it.')
  fs.unlinkSync(dest)
}

console.log('@leboncoin/npmrc: Create the .npmrc file.')
const data = fs.readFileSync(source)
fs.writeFileSync(dest, data, { mode: 0o444 })
