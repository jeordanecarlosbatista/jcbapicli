
const pluralize = require('pluralize');
const utils = require('../utils');

module.exports = { 
    get: function(recurso) {
        return `'use strict';
const CommomBO = require('./commonBO');
const ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Repository = require('../repository/${pluralize.singular(utils.convertPrimeiraLetra(recurso, false))}Repository');
const ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}DTO = require('../${pluralize.singular(utils.convertPrimeiraLetra(recurso, false))}DTO');

class ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}BO extends CommomBO {
    constructor() {
        super(new ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Repository(), ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}DTO);
    }
}

module.exports = ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}BO;
        `;
    }
}




