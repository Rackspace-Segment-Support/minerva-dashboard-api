const commander = require('commander');

commander
    .option('-s, --sync', 'Sync schema changes with the database')
    .option('-p, --port <port>', 'Binding port', 6000)
    .option('-a, --address <address>', 'Binding address', '0.0.0.0')
    .parse(process.argv);

module.exports = commander;