const commander = require('commander');

commander
    .option('-s, --sync', 'Sync schema changes with the database')
    .parse(process.argv);

module.exports = commander;