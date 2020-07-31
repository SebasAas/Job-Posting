require('dotenv').config();

const chalk = require('chalk');
const debug = require('debug')('from:app');

// Server
const app = require('./server/server');

// Database
require('./database/connectionString');

// Routes
app.use(require('./routes/routes'));

// Repopulate database
// require('./utils/helper');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  {
    process.env.ENVIROMENT === 'development' ?
      debug(`Listeninig on port ${chalk.green(port)}`)
      :
      console.log(`Listeninig on port ${port}`)
  }
})