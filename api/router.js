var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.json('Use /api/cache/{key}');
});

module.exports = router; 