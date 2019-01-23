const args = require('./arguments');
const db = require('./models/index');

if (args.sync) {
    db.conn.sync().then(() => {
        console.log('Database sync complete');
        db.conn.close();
    });
}