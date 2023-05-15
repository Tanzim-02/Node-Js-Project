const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('weather');
});

module.exports = router;
