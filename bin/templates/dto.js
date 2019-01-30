
const pluralize = require('pluralize');
const utils = require('../utils');

module.exports = { 
    get: function() {
        return `
'use strict';

module.exports = {
    dto: (entity) => {
        return {
            //return properties
        }
    }
};
        `;
    }
}




