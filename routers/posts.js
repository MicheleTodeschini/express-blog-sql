const express = require('express')
const router = express.Router()
const articoliController = require('../controllers/articoliController')


// Per richiamarli su Postman, usare http://localhost:3000/api/posts/

router.get('/', articoliController.index)

router.get('/:id', articoliController.show)

router.post('/', articoliController.store)

router.put('/:id', articoliController.update)

router.patch('/:id', articoliController.modify)

router.delete('/:id', articoliController.destroy)

module.exports = router