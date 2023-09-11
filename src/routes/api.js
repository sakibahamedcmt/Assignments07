const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../controllers/messageController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');

router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);

router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/delete', commentController.delete);
router.get('/comment/update', commentController.update);

router.get('/message/create', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/delete', messageController.delete);
router.get('/message/update', messageController.update);

router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/delete', portfolioController.delete);
router.get('/portfolio/update', portfolioController.update);

router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/delete', productController.delete);
router.get('/product/update', productController.update);


module.exports = router;