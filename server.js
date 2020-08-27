'use strict';

let restify = require('restify');
const config = require('./config/config.js');
let routes = require('./app/routes/route.js');
let handlers   = require('./app/routes/handlers');
const plugins = require('restify-plugins')
const logger = require('turbo-logger').createStream({});

let server = restify.createServer({
    name: config.app_name ,
    versions: ['1.0.0'],
});

// set API versioning and allow trailing slashes
server.pre(restify.pre.sanitizePath());

// set request handling and parsing
server.use(plugins .acceptParser(server.acceptable));
server.use(plugins.queryParser());
server.use(plugins .bodyParser());


// setup Routing and Error Event Handling
handlers.setup(server);
routes.setup(server);

// start server
server.listen(config.port, () => {
    logger.log(`[${server.name}] - `, ' listening at port: ', config.port);

    if (process.env.NODE_ENV === 'development') {
        require('konga-restify-route-table')(server.router.mounts);
    }
});
