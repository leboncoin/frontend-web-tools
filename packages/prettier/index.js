#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync
const gitRoot = execSync('git rev-parse --show-toplevel').toString().trim()

function copy (sourceFile) {
  const source = path.join(__dirname, sourceFile)
  const dest = path.join(gitRoot, sourceFile)

  if (path.join(__dirname, sourceFile) === dest) {
    console.log('@leboncoin/prettier: source and destination files ' +
                'are the same, can\'t copy, exiting.')
    process.exit(0)
  }

  console.log(`@leboncoin/prettier: Will create the ${dest} file.`)

  if (fs.existsSync(dest)) {
    console.log(`@leboncoin/prettier: ${dest} exists, deleting it.`)
    fs.unlinkSync(dest)
  }

  console.log(`@leboncoin/prettier: Create the ${dest} file.`)
  const data = fs.readFileSync(source)
  fs.writeFileSync(dest, data, { mode: 0o764 })
}

copy('.prettierignore')
copy('prettier.config.js')
