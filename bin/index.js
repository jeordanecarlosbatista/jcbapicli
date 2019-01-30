#! /usr/bin/env node
const comandos = require('commander');
const generateResource = require('./commands/generate/resource');

comandos
    .version('1.0.5')
    .description('A command line interface for Node.js API');

comandos
    .command('generate <schematics> <name>')
    .description('creates feature in controller, service, business, dto and repository layers')
    .action(function (schematic, schematicName) {

        if (schematic === 'resource') {
            if (schematicName) {
                generateResource.create(schematicName);
            }
        }
    });

comandos.parse(process.argv);