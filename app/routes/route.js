'use strict';

module.exports.setup = function setUp (server) {

    //Health route
        server.post({
            path: '/',
            name: 'health',
            version: '1.0.0',
        }, (req, res, next) => {
            res.json(
                { 
                    status: 'Healthy', 
                    message: "Beneficiary Service up and running" 
                }
            )
        });

        server.get({
            path: '/',
            name: 'health',
            version: '1.0.0',
        }, (req, res, next) => {
            res.json(
                { 
                    status: 'Healthy', 
                    message: "Beneficiary Service up and running" 
                }
            )    
        });
}