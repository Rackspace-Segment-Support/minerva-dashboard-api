/**
 * @name minerva-dashboard-api
 * @description
 * Main entry point for this application.
 * The object here is to provide a light API and 
 * data access layer for managing custom dashboards
 * @requires './arguments' CLI argument parser
 * @requires './models/index' Data access layer entry point
 * @requires express API framework
 * @requires body-parser middleware for parsing request bodies
 */

const args = require('./arguments');
const db = require('./models/index');
const express = require('express');
const router =  require('./router');
var bodyParser = require('body-parser');

const app = express();
const port = args.port;
const host = args.address;

app.use(bodyParser.json());

// if we want to sync the database
// there will be a process arg passed via the CLI
if (args.sync) {
    db.conn.sync().then(() => {
        console.log('Database sync complete');
        db.conn.close();
    });
}

// Setup routes
router(app, db);

app.listen(port, host, () => console.log(`listening at ${host} on port ${port}!`));