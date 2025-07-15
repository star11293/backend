const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/apply', upload.single('resume'), formController.submitApplication);
router.post('/contact', formController.submitContact);

module.exports = router;