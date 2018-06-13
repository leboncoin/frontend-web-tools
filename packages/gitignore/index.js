#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync
const gitRoot = execSync('git rev-parse --show-toplevel').toString().trim()
const source = path.join(__dirname, '.gitignore')
const dest = path.join(gitRoot, '.gitignore')
const patternsToIgnore = [
  'node_modules',
  '.editorconfig',
  'npm-debug.log',
  '.prettierignore',
  'prettier.config.js',
]

const arrayToText = array => array.join('\n') + '\n'

if (source === dest) {
  console.log('@leboncoin/gitignore: Can\'t amend .gitignore because ' +
              'source and destination are identical')
  process.exit(0)
}
if (!fs.existsSync(dest)) {
  console.log(`@leboncoin/gitignore: ${dest} does not exist. Let's create it with:`)
  console.log(`@leboncoin/gitignore: ${patternsToIgnore.join(', ')}.`)
  fs.writeFileSync(dest, arrayToText(patternsToIgnore))
  process.exit(0)
}

console.log(`@leboncoin/gitignore: ${dest} exist. Let's amend it if necessary.`)
const patterns = []
const gitignorePatterns = fs.readFileSync(dest).toString().split('\n')
// Remove last element, because it's an empty string
gitignorePatterns.pop()

for (const patternToIgnore of patternsToIgnore) {
  if (!gitignorePatterns.includes(patternToIgnore)) {
    patterns.push(patternToIgnore)
  }
}

if (patterns.length === 0) {
  console.log(`@leboncoin/gitignore: All patterns were found. Leaving the file as is.`)
  process.exit(0)
}

console.log(`@leboncoin/gitignore: Writing these patterns to ${dest}:`)
console.log(`@leboncoin/gitignore: ${patterns.join(', ')}.`)
const allPatterns = [...gitignorePatterns, ...patterns]
fs.writeFileSync(dest, arrayToText(allPatterns))
