const express = require('express')
const router = express.Router()

router.get('/anal', (req, res) => {
    res.send('Anal route')
})

module.exports = router;