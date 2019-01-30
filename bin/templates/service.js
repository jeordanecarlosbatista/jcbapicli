
const pluralize = require('pluralize');
const utils = require('../utils');

module.exports = { 
    get: function(recurso) {
        return `'use strict';
const CommonService = require('./commonService');
const ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}BO = require('../../domain/business/${pluralize.singular(utils.convertPrimeiraLetra(recurso, false))}BO');

class ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Service extends CommonService {
    constructor() {
        super(new ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}BO());
    }
}

module.exports = ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Service;
        `;
    }
}




