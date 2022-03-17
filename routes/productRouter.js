// import controllers review, products
const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController')


// router
const router = require('express').Router()


// product router
router.post('/addProduct', productController.upload , productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)

router.get('/getProductReviews/:id', productController.getProductReviews)

router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)






// Products router


module.exports = router