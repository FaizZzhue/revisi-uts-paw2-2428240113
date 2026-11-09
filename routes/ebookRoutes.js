const express = require('express');
const router = express.Router();
const ebookControllers = require('../controllers/ebookControllers');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', ebookControllers.getAll);
router.get('/:id', ebookControllers.getById);
router.post('/', cekApiKey, ebookControllers.create);
router.put('/:id', cekApiKey, ebookControllers.update);
router.delete('/:id', cekApiKey, ebookControllers.remove);

module.exports = router;