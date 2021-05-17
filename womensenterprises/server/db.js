const { table } = require('console');
const path = require('path');
const dbPath = path.resolve(__dirname, 'db/database.sqlite');

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
});


//create table
knex.schema
    .hasTable('home')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('home', (table) => {
                table.increments('id').primary()
                table.string('recentMessageTitle')
                table.string('recentMessage')
                table.string('missionTitle')
                table.string('mission')
                table.string('resultsTitle')
                table.string('results')
            })
            .then(() => {
                console.log('Table "home" created');
            })
            .catch((error) => {
                console.error(`There was an error creating table "home": ${error}`);
            })
        }
    })
    .then(() => {
        console.log('sqlite spinup complete');
    })
    .catch((error) => {
        console.error(`There was an error spinning up the database: ${error}`);
    });


knex.select('*').from('home')
    .then(data => console.log('data:', data))
    .catch(err => console.error(err));


module.exports = knex;