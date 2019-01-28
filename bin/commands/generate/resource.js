'use stric';
const pluralize = require('pluralize');
const utils = require('../../utils');

module.exports = {

    create: (name) => {
        const fs = require('fs');
        const path = require('path');

        const controllerPath = path.join(__dirname, `../../../app/api/controllers/${pluralize.singular(utils.convertPrimeiraLetra(name, false))}Controller.js`);
        const controllerGenerate = require('../../templates/controller');

        const servicePath = path.join(__dirname, `../../../app/api/services/${pluralize.singular(utils.convertPrimeiraLetra(name, false))}Service.js`);
        const serviceGenerate = require('../../templates/service');

        const boPath = path.join(__dirname, `../../../app/domain/business/${pluralize.singular(utils.convertPrimeiraLetra(name, false))}BO.js`);
        const boGenerate = require('../../templates/business');

        const repositoryPath = path.join(__dirname, `../../../app/domain/repository/${pluralize.singular(utils.convertPrimeiraLetra(name, false))}Repository.js`);
        const repositoryGenerate = require('../../templates/repository');

        if (!fs.existsSync(controllerPath) &&
            !fs.existsSync(servicePath) &&
            !fs.existsSync(boPath) &&
            !fs.existsSync(repositoryPath)) {
            fs.writeFileSync(controllerPath, controllerGenerate.get(name), 'utf-8');
            fs.writeFileSync(servicePath, serviceGenerate.get(name), 'utf-8');
            fs.writeFileSync(boPath, boGenerate.get(name), 'utf-8');
            fs.writeFileSync(repositoryPath, repositoryGenerate.get(name), 'utf-8');
            console.log("Arquivos gerados com sucesso!")
        }
    }
}