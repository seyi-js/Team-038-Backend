/**
 @description Define errors available in project
 **/

'use strict';

var create = require('custom-error-generator');

module.exports = {
    InvalidVersion: create('InvalidVersion', { code: 'INVALID_VERSION' }),

    MethodNotImplemented: create('MethodNotImplemented', { code: 'METHOD_NOT_IMPLEMENTED' }),

    InternalServerError: create('InternalServerError', { code: 'INTERNAL_SERVER_ERROR' }),
};
