var express = require('express');
var router = express.Router();
const cacheService = require('../Services/CacheService');

router.get("/", (req, res) => {
    res.json('Use /api');
});

//TODO: Implement logger
router.get('/api', async (res) => {
    var response = await cacheService.getAllKeys();

    return res.json(response);
});

router.get('/api/:key', async (req, res) => {
    var response = await cacheService.getKeyById(req.params.key);

    return res.json(response);
});

router.post('/api/:key', async (req, res) => {
    var response = await cacheService.AddKey(req.params.key);

    return res.json(response);
});


router.delete('/api/:key', async (req, res) => {
    var response = await cacheService.DeleteKey(req.params.key);

    return res.json(response);
});

router.delete('/api', async (res) => {
    var response = await cacheService.deleteAllKeys();

    return response.json(response);
});

module.exports = router; 