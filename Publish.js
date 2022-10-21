#!/usr/bin/env node

const { writeFile } = require('fs/promises')
const { exec } = require("child_process");
const { promisify } = require("util");

const execPromise = promisify(exec);

async function main (step) {
    const pack = require('./package.json')
    pack.name = step

    await writeFile('./package.json', JSON.stringify(pack, null, 4))

    await execPromise(`git checkout -b ${step}`);
    await execPromise(`git add --all`);
    await execPromise(`git rm --cached Publish.js`);
    await execPromise(`git commit -m ${step}`);
    await execPromise(`git push -u origin/${step}`)
}

main(process.argv[2])
