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
    .then(data => console.log('home:', data))
    .catch(err => console.error(err));



//create table
knex.schema
    .hasTable('about')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('about', (table) => {
                table.increments('id').primary()
                table.string('missionTitle')
                table.string('mission')
                table.string('founderTitle')
                table.string('founderAbout')
                table.string('founderImgUrl')
                table.string('communityPartnersLinkText')
                table.string('moreDetailsTitle')
                table.string('moreDetails')
                table.string('governmentVendingLinkText')
            })
            .then(() => {
                console.log('Table "about" created');
            })
            .catch((error) => {
                console.error(`There was an error creating table "about": ${error}`);
            })
        }
    })
    .then(() => {
        console.log('sqlite spinup complete');
    })
    .catch((error) => {
        console.error(`There was an error spinning up the database: ${error}`);
    });


knex.select('*').from('about')
    .then(data => console.log('about:', data))
    .catch(err => console.error(err));







//create table
knex.schema
    .hasTable('communityPartners')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('communityPartners', (table) => {
                table.increments('id').primary()
                table.string('pageTitle')
                table.string('endBlurb')
                table.string('contactLinkText')
            })
            .then(() => {
                console.log('Table "communityPartners" created');
            })
            .catch((error) => {
                console.error(`There was an error creating table "communityPartners": ${error}`);
            })
        }
    })
    .then(() => {
        console.log('sqlite spinup complete');
    })
    .catch((error) => {
        console.error(`There was an error spinning up the database: ${error}`);
    });


knex.select('*').from('communityPartners')
    .then(data => console.log('communityPartners:', data))
    .catch(err => console.error(err));



//create table
knex.schema
    .hasTable('communityPartnersList')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('communityPartnersList', (table) => {
                table.increments('id').primary()
                table.string('orgName')
                table.string('orgUrl')
                table.string('orgImgLink')
                table.string('orgBlurb')
            })
            .then(() => {
                console.log('Table "communityPartnersList" created');
            })
            .catch((error) => {
                console.error(`There was an error creating table "communityPartnersList": ${error}`);
            })
        }
    })
    .then(() => {
        console.log('sqlite spinup complete');
    })
    .catch((error) => {
        console.error(`There was an error spinning up the database: ${error}`);
    });


knex.select('*').from('communityPartnersList')
    .then(data => console.log('communityPartnersList:', data))
    .catch(err => console.error(err));






//create table
knex.schema
    .hasTable('governmentVending')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('governmentVending', (table) => {
                table.increments('id').primary()
                table.string('pageTitle')
                table.string('aboutVending')
                table.string('productsIntro')
                table.string('productsOutro')
                table.string('contactLinkText')
            })
            .then(() => {
                console.log('Table "governmentVending" created');
            })
            .catch((error) => {
                console.error(`There was an error creating table "governmentVending": ${error}`);
            })
        }
    })
    .then(() => {
        console.log('sqlite spinup complete');
    })
    .catch((error) => {
        console.error(`There was an error spinning up the database: ${error}`);
    });


knex.select('*').from('governmentVending')
    .then(data => console.log('governmentVending:', data))
    .catch(err => console.error(err));






    

//create table
knex.schema
.hasTable('ProductList')
.then((exists) => {
    if (!exists) {
        return knex.schema.createTable('ProductList', (table) => {
            table.increments('id').primary()
            table.string('prodName')
            table.string('prodImgLink')
            table.string('prodBlurb')
            table.string('prodPrice10')
            table.string('prodPrice50')
            table.string('prodPrice100')
            table.string('prodPrice500')
            table.string('prodPrice1000')
        })
        .then(() => {
            console.log('Table "ProductList" created');
        })
        .catch((error) => {
            console.error(`There was an error creating table "ProductList": ${error}`);
        })
    }
})
.then(() => {
    console.log('sqlite spinup complete');
})
.catch((error) => {
    console.error(`There was an error spinning up the database: ${error}`);
});


knex.select('*').from('ProductList')
.then(data => console.log('ProductList:', data))
.catch(err => console.error(err));













//create table
knex.schema
    .hasTable('contact')
    .then((exists) => {
        if (!exists) {
            return knex.schema.createTable('contact', (table) => {
                table.increments('id').primary()
                table.string('email')
                table.string('phone')
                table.string('facebook')
                table.string('instagram')
            })
            .then(() => {
                console.log('Table "contact" created');
            })
            .catch((error) => {
                console.error(`There was an error creating table "contact": ${error}`);
            })
        }
    })
    .then(() => {
        console.log('sqlite spinup complete');
    })
    .catch((error) => {
        console.error(`There was an error spinning up the database: ${error}`);
    });


knex.select('*').from('contact')
    .then(data => console.log('contact:', data))
    .catch(err => console.error(err));



module.exports = knex;