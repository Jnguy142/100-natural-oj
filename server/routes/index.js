const router = require('express').Router();
const manufacturers = require('./manufacturersRoute');

router.route('/manufacturers')
.get(manufacturers.get)
.put(manufacturers.put);

module.exports = router;