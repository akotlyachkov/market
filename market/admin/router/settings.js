var router = require('express').Router(),
    handler = require('../../api/handlers/index').settings;

router.post('/select', handler.select.bind(handler));
router.post('/upsert', handler.upsert.bind(handler));

module.exports = router;
