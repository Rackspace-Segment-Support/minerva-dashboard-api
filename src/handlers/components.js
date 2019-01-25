const component = function (db) {
    return {
        /**
         * @name component.get
         * @description
         * API handler for getting a single instance
         * of a component from the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response with JSON payload
         */
        get:  (req, res) => {
            db.component.findById(req.params.id).then((component) => {
                if (component === null) {
                    res.status(404).send('Unable to find this resource');
                    return;
                }

                var payload = {
                    id: component.id,
                    name: component.name,
                    description: component.description,
                    createdAt: component.createdAt,
                    updatedAt: component.updatedAt
                }

                res.status(200).json(payload);
            });
        },
        /**
         * @name component.getAll
         * @description
         * API handler for getting all instances
         * of components from the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response with JSON payload
         */
        getAll: (req, res) => {
            db.component.findAll()
                .then((components) => {
                    if (components === null) {
                        res.status(404).send('Unable to find this resource');
                        return;
                    }

                    var payload = [];
                    components.forEach(inst => {
                        var item = {
                            id: inst.id,
                            name: inst.name,
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
         * @name component.add
         * @description
         * API handler for creating a new instance
         * of a component and saving it to the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response
         */
        add: (req, res) => {
            if (!req.body) {
                res.status(400).send('Missing request body');
                return;
            }

            db.component.create({name: req.body.name, description: req.body.description})
                .then((component) => {
                    res.status(201).send('created.');
                }).catch((error) => {
                    res.status(500).send(error);
                })
        },
        /**
         * @name component.update
         * @description
         * API handler for updating a specific instance
         * of a component and saving it to the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response
         */
        update: (req, res) => {
            db.component.findById(req.params.id).then((component) => {
                if (component === null) {
                    res.status(404).send('Unable to find this resource');
                    return;
                }

                if (!req.body) {
                    res.status(400).send('Missing request body');
                    return;
                }

                component.name = req.body.name;
                component.description = req.body.description;
                component.save().then(() => {
                    res.status(202).send('updated');
                }).catch((error) => {
                    res.status(500).send(error);
                });
            });
        },
        /**
         * @name component.saveToDashboard
         * @description
         * API handler for associating a specific instance
         * of a component with a dashboard and saving it to the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response
         */
        saveToDashboard: (req, res) => {
            db.component.findById(req.params.id).then((component) => {
                if (component === null) {
                    res.status(404).send('Unable to find this resource');
                    return;
                }

                if (!req.body) {
                    res.status(400).send('Missing request body');
                    return;
                }

                component.setDashboards([req.params.dashboardId])
                    .then((c) => {
                        res.status(202).send('updated');
                    }).catch((error) => {
                        res.status(500).send(error);
                    });
            });
        },
        /**
         * @name component.delete
         * @description
         * API handler for deleting an instance
         * of a dashboard from the database
         * @param {object} req request object
         * @param {object} res response object
         * @returns HTTP response
         */
        delete: (req, res) => {
            db.component.findById(req.params.id).then((component) => {
                if (component === null) {
                    res.status(404).send('Unable to find this resource');
                    return;
                }
                
                component.destroy().then(() => {
                    res.status(202).send('deleted.');
                }).catch((error) => {
                    res.status(500).send(error);
                });
            });
        }
    }
}

module.exports = component;