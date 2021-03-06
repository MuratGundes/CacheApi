var express = require('express');
var router = express.Router();
const cacheDomainService = require('../Domain/CacheDomainService');

router.get("/", (req, res) => {
    res.json('Use /api');
});

//TODO: Implement Swagger
//TODO: Implement logger
//TODO: Use controller instead of router class

router.get('/api', async (res) => {
    var response = await cacheDomainService.getAllKeys();

    return res.json(response);
});

router.get('/api/:key', async (req, res) => {
    var response = await cacheDomainService.getKeyById(req.params.key);

    return res.json(response);
});

router.post('/api/:key', async (req, res) => {
    var response = await cacheDomainService.addKey(req.params.key);

    return res.json(response);
});


router.delete('/api/:key', async (req, res) => {
    var response = await cacheDomainService.deleteKeyById(req.params.key);

    return res.json(response);
});

router.delete('/api', async (res) => {
    var response = await cacheDomainService.deleteAllKeys();

    return response.json(response);
});

module.exports = router; 