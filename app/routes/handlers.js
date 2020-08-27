/**
 * @description Sets up the restify handlers.
 */

'use strict';

let errors = require('../error');
let httpStatusCodes = require('http-status');

/**
 * Allows us to register the restify server handlers.
 *
 * @param  {server} server An instance of the restify server
 */
module.exports.setup = function setup(server) {

    server.on('NotFound', (req, res) => {
        res.send(
            httpStatusCodes.NOT_FOUND,
            new errors.MethodNotImplemented('Method not Implemented')
        );
    });

    server.on('VersionNotAllowed', (req, res) => {
        res.send(
            httpStatusCodes.NOT_FOUND,
            new errors.InvalidVersion('Unsupported API version requested')
        );
    });

    server.on('InvalidVersion', (req, res) => {
        res.send(
            httpStatusCodes.NOT_FOUND,
            new errors.InvalidVersion('Unsupported API version requested')
        );
    });

    server.on('uncaughtException', (req, res, route, error) => {
        res.send(
            httpStatusCodes.INTERNAL_SERVER_ERROR,
            new errors.InternalServerError('Internal Server Error')
        );
    });

    server.on('MethodNotAllowed', (req, res) => {
        res.send(
            httpStatusCodes.METHOD_NOT_ALLOWED,
            new errors.MethodNotImplemented('Method not Implemented')
        );
    });

};
