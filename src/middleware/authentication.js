const request = require('request-promise');

/**
 * @name authentication
 * @description
 * Middleware for validating authenticated requests to the API
 */
module.exports = () => {
    return (req, res, next) => {
        var token = req.get('X-Auth-Token');

        // Do we have a token header
        if (!token) {
            // If not send 401
            res.status(401).send('Unauthorized');
            return;
        }
        
        // Validate the token against idenity
        request({
                uri: process.env.IDENTITY_URL + 'tokens/' + token,
                headers: {
                    'X-Auth-Token': token
                }
            })
            .then((res) => {
                // Everything checks out
                // pass the request to the next
                // layer of the request chain
                next();
            })
            .catch((err) => {
                console.log('unauthorized request', token);
                res.status(401).send('Unauthorized');
                return;
            });

       
    };
};