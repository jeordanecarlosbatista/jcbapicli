
const pluralize = require('pluralize');
const utils = require('../utils');

module.exports = { 
    get: function(recurso) {
        return `'use strict';
const mssql = require('mssql');
const MssqlFactory = require('../infrastructure/mssql');
const CommonRepository = require('./commonRepository');
const { Procedure } = require('../persistence/contract');

class ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Repository extends CommonRepository {
    constructor() {
        super(Procedure.sp${pluralize.singular(utils.convertPrimeiraLetra(recurso))}GET, 'pCodigo')
        this._mssqlFactory = new MssqlFactory();
    }
}

module.exports = ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Repository;
        `;
    }
}




