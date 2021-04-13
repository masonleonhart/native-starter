const pg = require("pg");

// Sets config based on enviornment

let config = {};

if (process.env.DATABASE_URL) {
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false}
    };
} else {
    config = {
        database: 'native-todo-list',
        host: 'localhost',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    }; 
};

// Creates a pool variable that connects to postgres

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('connected to postgres');
});

pool.on('error', (err) => {
    console.log('error connecting to postgres', error);
});

module.exports = pool;