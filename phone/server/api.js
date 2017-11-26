const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const mongo_string = "mongodb://@localhost:27017/cmcourse"


router.get('/show', function (req, res) {
    //res.end("Hi, show api");
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection("course")
        .find()
        .toArray()
        .then(course=> {
            const output = {results : course}
            res.json(output);
        });
        db.close();
    });
})

router.get('/showkana', function (req, res) {
    //res.end("Hi, show api");
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection("kana")
        .find()
        .sort( { kana: 1})
        .toArray()
        .then(course=> {
            const output = {results : course}
            res.json(output);
        });
        db.close();
    });
})

router.get('/showsaka/:saka', function (req, res) {
    const query = { kana : (req.params.saka) };
    //res.end("Hi, show api");
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection("course")
        .find(query)
        .toArray()
        .then(course=> {
            const output = {results : course}
            res.json(output);
        });
        db.close();
    });
})

router.get('/show/:id', function (req, res) {
    const query = { _id : ObjectId(req.params.id) };
    //res.end("Hi, show api");
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection("course")
        .find(query)
        .toArray()
        .then(course=> {
            const output = {results : course}
            res.json(output);
        });
        db.close();
    });
})

router.post('/add', function (req, res) {
    mongoClient.connect(mongo_string, function (err, db) {
    const data = {name : req.body.name,
                  kana : req.body.kana,
                  number : req.body.number };
    db.collection('course')
    .insertOne(data, (err, result)=>{
        if (err) throw err;
        const response = {result : 'ok', message : result.result.n + " Inserted"};
        res.json(response);
    });
    db.close();
});
})


router.delete('/delete/:id', function (req, res) {
    //res.end("Hi delete api: " + req.params.name);
    mongoClient.connect(mongo_string, function (err, db) {
    const query = { _id : ObjectId(req.params.id) };
    db.collection('course')
    .deleteMany(query, function (err, result){
        const response = {result : 'ok', message : result.result.n + " Deleted"};
        res.json(response);
    });
    db.close();
});
})


router.post('/update', function (req, res) {
    //res.end("Hi update api: ObjectId(" + req.params.id + ")" );
    mongoClient.connect(mongo_string, function (err, db) {
    const query = { _id : ObjectId(req.body.id) };
    const newvalues = { $set: {name: req.body.name,
        number: req.body.number, kana: req.body.kana } };
    db.collection('course')
    .updateOne(query, newvalues, function (err, result){
        const response = {result : 'ok', message : result.result.n + " Updated"};
        res.json(response);
    });
    db.close();
});
})

module.exports = router;