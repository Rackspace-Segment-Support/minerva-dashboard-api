/**
 * @name minerva-dashboard-api
 * @description
 * Main entry point for this application.
 * The object here is to provide a light API and 
 * data access layer for managing custom dashboards
 * @requires './arguments' CLI argument parser
 * @requires './models/index' Data access layer entry point
 */

const args = require('./arguments');
const db = require('./models/index');

// if we want to sync the database
// there will be a process arg passed via the CLI
if (args.sync) {
    db.conn.sync().then(() => {
        console.log('Database sync complete');
        db.conn.close();
    });
}