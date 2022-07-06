const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
function connectDB(uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err))
}

module.exports = connectDB;

