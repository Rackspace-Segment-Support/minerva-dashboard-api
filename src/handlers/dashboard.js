const dashboard = function(db) {
    return {
        /**
         * @name dashboard.get
         * @description
         * API handler for getting a single instance
         * of a dashboard from the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response with JSON payload
         */
        get: (req, res) => {
            db.dashboard.findById(req.params.id, {
                include: [{
                    model: db.component,
                    through: {
                        attributes: ['id', 'name', 'description']
                    }
                }]
            }).then((dashboard) => {
                if (dashboard === null) {
                    res.status(404).send('Unable to find this resource');
                    return;
                }

                var components = [];

                dashboard.Components.forEach((component) => {
                    components.push({
                        id: component.id,
                        name: component.name,
                        description: component.description
                    })
                })

                var payload = {
                    id: dashboard.id,
                    name: dashboard.name,
                    userId: dashboard.userId,
                    description: dashboard.description,
                    components: components,
                    createdAt: dashboard.createdAt,
                    updatedAt: dashboard.updatedAt
                }

                res.status(200).json(payload);
            });
        },
        /**
         * @name dashboard.getAll
         * @description
         * API handler for getting all instances
         * of dashboards for a specific user from the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response with JSON payload
         */
        getAll: (req, res) => {
            db.dashboard.findAll({
                where: {
                    userId: req.params.userId
                }
            })
                .then((dashboards) => {
                    if (dashboards === null) {
                        res.status(404).send('Unable to find this resource');
                        return;
                    }

                    var payload = [];
                    dashboards.forEach(inst => {
                        var item = {
                            id: inst.id,
                            name: inst.name,
                            userId: dashboard.userId,
                            description: inst.description,
                            createdAt: inst.createdAt,
                            updatedAt: inst.updatedAt
                        };
                        payload.push(item);
                    });
            
                    res.status(200).json(payload);
                })
        },
        /**
         * @name dashboard.add
         * @description
         * API handler for creating a new instance
         * of a dashboard and saving it to the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response
         */
        add: (req, res) => {
            if (!req.body) {
                res.status(400).send('Missing request body');
                return;
            }

            db.dashboard.create({name: req.body.name, description: req.body.description, userId: req.body.userId})
                .then((dashboard) => {
                    var item = {
                        id: dashboard.id,
                        name: dashboard.name,
                        userId: dashboard.userId,
                        description: dashboard.description,
                        createdAt: dashboard.createdAt,
                        updatedAt: dashboard.updatedAt
                    };
                    res.status(201).json(item);
                }).catch((error) => {
                    res.status(500).send(error);
                })
        },
        /**
         * @name dashboard.update
         * @description
         * API handler for updating a specific instance
         * of a dashboard and saving it to the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response
         */
        update: (req, res) => {
            db.dashboard.findById(req.params.id).then((dashboard) => {
                if (dashboard === null) {
                    res.status(404).send('Unable to find this resource');
                    return;
                }

                if (!req.body) {
                    res.status(400).send('Missing request body');
                    return;
                }

                dashboard.name = req.body.name;
                dashboard.description = req.body.description;
                dashboard.userId = req.body.userId;
                dashboard.save().then((dashboard) => {
                    var item = {
                        id: dashboard.id,
                        name: dashboard.name,
                        userId: dashboard.userId,
                        description: dashboard.description,
                        createdAt: dashboard.createdAt,
                        updatedAt: dashboard.updatedAt
                    };
                    res.status(202).json(item);
                }).catch((error) => {
                    res.status(500).send(error);
                });
            });
        },
        /**
         * @name dashboard.delete
         * @description
         * API handler for deleting an instance
         * of a dashboard from the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response
         */
        delete: (req, res) => {
            db.dashboard.findById(req.params.id).then((dashboard) => {
                if (dashboard === null) {
                    res.status(404).send('Unable to find this resource');
                    return;
                }
                
                dashboard.destroy().then(() => {
                    res.status(202).send('deleted.');
                }).catch((error) => {
                    res.status(500).send(error);
                });
            });
        }
    }
}

module.exports = dashboard;