/**
 * @name router
 * @description
 * Connects routes to route handlers so that we can execute
 * methods based on HTTP requests
 * @param {object} app instance of the express application
 * @param {object} db instance of the db
 */
const router = function (app, db) {

    // Handlers
    const dashboardHandler = require('./handlers/dashboard')(db);
    const componentHandler = require('./handlers/components')(db);

    // Dashboard routes
    app.get('/dashboard/user/:userId', dashboardHandler.getAll);
    app.get('/dashboard/:id', dashboardHandler.get);
    app.post('/dashboard', dashboardHandler.add);
    app.put('/dashboard/:id', dashboardHandler.update);
    app.delete('/dashboard/:id', dashboardHandler.delete);

    // Component routes
    app.get('/component', componentHandler.getAll);
    app.get('/component/:id', componentHandler.get);
    app.post('/component', componentHandler.add);
    app.put('/component/:id', componentHandler.update);
    app.delete('/component/:id', componentHandler.delete);
    app.put('/component/:id/dashboard/:dashboardId', componentHandler.saveToDashboard);
}

module.exports = router;