'use strict';

var rootPath;
if (process.env.APP_ROOT_PATH) {
    const path = require('path');
    rootPath = path.resolve(process.env.APP_ROOT_PATH);
} else {
    const execSync = require('child_process').execSync
    rootPath = execSync('git rev-parse --show-toplevel').toString().trim()
}

module.exports = rootPath
