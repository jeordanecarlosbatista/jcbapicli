
const pluralize = require('pluralize');
const utils = require('../utils');

module.exports = { 
    get: function(recurso) {
        return `'use strict';
const Response = require('../helpers/httpResponse');
const HttpStatusCode = require('../helpers/httpStatusCode');
const mssql = require('mssql');
const MssqlFactory = require('../infrastructure/mssql');
const CommonRepository = require('./commonRepository');
const ProcedureException = require('../../api/exception/procedureException');
const { Procedure } = require('../persistence/contract');

class ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Repository extends CommonRepository {
    constructor() {
        super(Procedure.sp${pluralize.singular(utils.convertPrimeiraLetra(recurso))}GET, 'pCodigo')
    }
}

module.exports = ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Repository;
        `;
    }
}




