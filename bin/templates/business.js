
const pluralize = require('pluralize');
const utils = require('../utils');

module.exports = { 
    get: function(recurso) {
        return `
'use strict';
const CommomBO = require('./commonBO');
const ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Repository = require('../repository/${pluralize.singular(utils.convertPrimeiraLetra(recurso, false))}Repository');

class ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}BO extends CommomBO {
    constructor() {
        super('${pluralize.singular(utils.convertPrimeiraLetra(recurso))}', new ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Repository());
    }
}

module.exports = ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}BO;
        `;
    }
}




