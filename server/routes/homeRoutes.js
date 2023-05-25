const router = require('express').Router();

const {
    createForm,
} = require('../controllers/userController');

router.route('/contact').post(createForm);
  
module.exports = router;