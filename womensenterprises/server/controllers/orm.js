const knex = require('./../db');

exports.homeData = async (req, res) => {
    knex
        .select('*')
        .from('home')
        .then(homeContents => {
            res.json(homeContents)
        })
        .catch(err => {
            res.json({message: `There was an error retrieving home content: ${err}`})
        })
}

exports.createHomeData = async (req, res) => {
    knex('home')
        .insert({
            'recentMessageTitle':req.body.recentMessageTitle,
            'recentMessage': req.body.recentMessage,
            'missionTitle': req.body.missionTitle,
            'mission': req.body.mission,
            'resultsTitle': req.body.resultsTitle,
            'results': req.body.results
        })
        .then(() => {
            res.json({ message: `home data created`})
        })
        .catch(err => {
            res.json({ message: `There was an error creating home data`})
        })
}