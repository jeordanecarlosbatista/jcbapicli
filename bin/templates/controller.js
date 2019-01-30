
const pluralize = require('pluralize');
const utils = require('../utils');

module.exports = { 
    get: function(recurso) {
        return `'use strict';
const ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Service = require('../services/${pluralize.singular(utils.convertPrimeiraLetra(recurso, false))}Service');
const service = new ${pluralize.singular(utils.convertPrimeiraLetra(recurso))}Service();

module.exports.get${pluralize.singular(utils.convertPrimeiraLetra(recurso))} = function (req, res) {
    service.findById(req, res);
}

module.exports.get${utils.convertPrimeiraLetra(pluralize(recurso))} = function (req, res) {
    service.find(req, res);
}

module.exports.post${pluralize.singular(utils.convertPrimeiraLetra(recurso))} = function (req, res) {
    service.save(req, res);
}

module.exports.put${pluralize.singular(utils.convertPrimeiraLetra(recurso))} = function (req, res) {
    service.update(req, res);
}

module.exports.delete${pluralize.singular(utils.convertPrimeiraLetra(recurso))} = function (req, res) {
    service.remove(req, res);
}
        `;
    }
}




